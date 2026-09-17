export const CONFIG = {
  WEBHOOK_URL: 'https://discordapp.com/api/webhooks/1549895161906077799/PB7O4Lw3CitpgRKAJFhgeW8-XR0iQrWiLC7XiM-2H8r0nzuDkQcqMAnBiybKtgRGPT96', 
  STORE_NAME: 'D`Abi Coffe & Resto',
  EVENT_NAME: 'Testing D-Abi FnB PoS',
  TAG_LINE: 'Semangat Baru - https://github.com/darojatun/d-abi',
  VERSION: '2026',
  MASCOT: 'assets/d-abi.dc.qr.square.png',
  LOGO: 'assets/d-abi-logo.png',
  RECEIPT_FOOTER: '-= Terima Kasih =-',
  QRIS_STATIC: '00020101021126570011ID.DANA.WWW011893600915303412044302090341204430303UMI51440014ID.CO.QRIS.WWW0215ID10265714866570303UMI5204899953033605802ID5911BLUE MATRIX6015Kota Padang Sid61052271163042C9C',
  ROLE_ID_DAPUR: '1549712082122055760' 
};
export const MENU = [
  { 
    id: 1, 
    name: 'Lumpia Ubi Lumer', 
    price: 15000, 
    category: 'Food', 
    img: './assets/ubiunguahh.jpg',
    active: true,
    variants: [
      { name: 'Coklat', nickname: 'CHUBI 🍫', desc: 'Lumpia Ubi Ungu isi Coklat Lumer', active: true },
      { name: 'Keju', nickname: 'CHEUBI 🧀', desc: 'Lumpia Ubi Ungu isi Keju Gurih', active: true }
    ] 
  },
  { 
    id: 2, 
    name: 'Cilok Bumbu Kacang', 
    nickname: 'CIBYTE 🍡',
    desc: 'Cilok kenyal dengan sambal kacang pedas manis',
    price: 1000, 
    category: 'Food', 
    img: './assets/cilokahh.jpg',
    variants: null,
    active: true,
    custom_qty: true 
  },
  { 
    id: 3, 
    name: 'Sticky Milk Series', 
    price: 12000, 
    category: 'Drink', 
    img: './assets/stickymilk.jpg',
    active: true,
    variants: [
      { name: 'Mango', nickname: 'MANGO STICKY', desc: 'Susu creamy rasa Mangga', active: true },
      { name: 'Matcha', nickname: 'MATCHA STICKY', desc: 'Susu creamy rasa Matcha', active: true }
    ] 
  },
  { 
    id: 5, 
    name: 'Es Lumut', 
    nickname: 'ES LUMUT',
    desc: 'Es segar penghilang dahaga',
    price: 10000, 
    category: 'Drink', 
    img: './assets/eslumut.jpg',
    variants: null,
    active: true
  },
  { 
    id: 6, 
    name: 'Jamur Enoki Goreng', 
    nickname: 'EGOKING 🍄',
    desc: 'Enoki Goreng King Crispy',
    price: 12000, 
    category: 'Food', 
    img: './assets/enoki.jpg',
    active: true,
    variants: [
      { name: 'Mix', nickname: 'EGOSTICK MIX', desc: 'Rasa Campur', active: true }, 
      { name: 'BBQ', nickname: 'EGOSTICK BBQ', desc: 'Rasa BBQ', active: true }, 
      { name: 'Balado', nickname: 'EGOSTICK BALADO', desc: 'Rasa Balado', active: true },
      { name: 'Originl', nickname: 'EGOKING', desc: 'Flavourless as hell', active: true }
    ]
  },

];
