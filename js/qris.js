// QRIS statis -> dinamis (EMVCo Merchant Presented Mode).
// - Tag 01 (Point of Initiation): "11" statis -> "12" dinamis
// - Tag 54 (nominal transaksi, rupiah bulat) disisipkan urut setelah tag 53
// - CRC16-CCITT (0xFFFF) tag 63 dihitung ulang

function parseRootTLV(s) {
  const out = [];
  let i = 0;
  while (i + 4 <= s.length) {
    const tag = s.substr(i, 2);
    const len = parseInt(s.substr(i + 2, 2), 10);
    if (isNaN(len) || len < 0 || i + 4 + len > s.length) break;
    out.push({ tag, value: s.substr(i + 4, len) });
    i += 4 + len;
  }
  return out;
}

export function crc16ccitt(str) {
  let crc = 0xFFFF;
  for (let i = 0; i < str.length; i++) {
    crc ^= (str.charCodeAt(i) << 8);
    for (let j = 0; j < 8; j++) {
      if (crc & 0x8000) crc = ((crc << 1) ^ 0x1021) & 0xFFFF;
      else crc = (crc << 1) & 0xFFFF;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

export function verifyQris(payload) {
  if (typeof payload !== 'string' || payload.length < 8) return false;
  const m = payload.match(/6304([0-9A-Fa-f]{4})$/);
  if (!m) return false;
  const body = payload.slice(0, -4); // sudah berakhiran "6304", tinggal CRC-nya yg dilepas
  // pastikan tag 00 & 01 ada (format EMV valid)
  const tags = parseRootTLV(payload);
  if (!tags.some(t => t.tag === '00') || !tags.some(t => t.tag === '01')) return false;
  return crc16ccitt(body) === m[1].toUpperCase();
}

// Cek struktur saja (tanpa CRC): untuk QR bawaan penerbit yg CRC-nya cacat
// tapi terbukti kebaca dompet. Return true bila TLV utuh + ada tag 00/01/63.
export function isQrisStructureValid(payload) {
  if (typeof payload !== 'string' || payload.length < 8) return false;
  const tags = parseRootTLV(payload);
  if (!tags.length) return false;
  const rebuilt = tags.map(t => t.tag + String(t.value.length).padStart(2, '0') + t.value).join('');
  if (rebuilt !== payload) return false; // ada sisa/rusak
  return tags.some(t => t.tag === '00') && tags.some(t => t.tag === '01') && tags.some(t => t.tag === '63');
}

// Ubah QRIS statis jadi dinamis sesuai nominal. Return string payload atau null bila gagal.
// Secara default longgar soal CRC input (banyak QR cetak CRC-nya cacat tapi valid di dompet);
// output SELALU ditulis dengan CRC yang benar. Pakai { strict: true } untuk menolak CRC input yg cacat.
export function qrisStaticToDynamic(staticPayload, amount, opts = {}) {
  const amt = Math.round(Number(amount) || 0);
  if (typeof staticPayload !== 'string' || !staticPayload || amt <= 0) return null;
  const crcOk = verifyQris(staticPayload);
  if (!crcOk) {
    if (opts.strict || !isQrisStructureValid(staticPayload)) return null;
    console.warn('[qris] CRC statis tidak valid, lanjut dengan struktur apa adanya (output CRC tetap benar).');
  }

  const tags = parseRootTLV(staticPayload).filter(t => t.tag !== '63');
  const amountStr = String(amt);

  let has54 = false;
  const mapped = tags.map(t => {
    if (t.tag === '01') return { tag: '01', value: '12' }; // dinamis
    if (t.tag === '54') { has54 = true; return { tag: '54', value: amountStr }; }
    return t;
  });
  if (!has54) {
    // sisipkan tag 54 terurut angka (lazimnya sesudah 53, sebelum 58)
    const idx = mapped.findIndex(t => parseInt(t.tag, 10) > 54);
    const node = { tag: '54', value: amountStr };
    if (idx === -1) mapped.push(node); else mapped.splice(idx, 0, node);
  }

  let body = mapped.map(t => t.tag + String(t.value.length).padStart(2, '0') + t.value).join('');
  body += '6304';
  return body + crc16ccitt(body);
}
