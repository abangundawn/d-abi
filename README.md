![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANklEQVR4nO3OQQmAABRAsScYxpg/h5VMYARvRrCCNxG2BFtmZquOAAD4i3Ot7mr/egIAwGvXA224BcUMk6pDAAAAAElFTkSuQmCC)  
**BeByte — Aplikasi Web Kasir (Simple POS)**  
BeByte adalah aplikasi kasir berbasis web sederhana untuk usaha F&B. Dibangun menggunakan **HTML**,  **CSS**, dan  **Vanilla JavaScript**, aplikasi ini ringan, mudah digunakan, dan tidak memerlukan backend. Cukup buka  **index.html**, dan sistem kasir langsung berjalan.  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAMUlEQVR4nO3WAQkAIBAEsBPMYs4PZhMDWMAA5njYUmxU1UqyAwBAF2cmeZE4AIBO7gentgXapSWpbgAAAABJRU5ErkJggg==)  
**✨ Fitur Utama**  
- Daftar produk lengkap dengan gambar.  
- Tombol **Detail Produk** untuk melihat informasi tambahan.  
- Tambah ke keranjang, update jumlah, dan hapus item.  
- Perhitungan otomatis subtotal & total.  
- Checkout sederhana.  
- Manajemen data produk melalui data.js. (edit sendiri teksnya)  
- Integrasi opsional dengan Discord Webhook melalui discord.js.  
- Simpan orderan untuk yang bayar diakhir. pesanan boleh tetap diproses checkout belakangan. Pesanan terlama didahulukan.  
- Tambahkan catatan disediakan shortcut atau ketik sendiri  
- Bisa print resi jika pelanggan menginginkan  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAM0lEQVR4nO3KsQ0AIRAEsUW6Qij1KvnevhMSYmKQ7GiCGd09k3wBAOAVf+2o4wYAwE1qAdYuAy151mgcAAAAAElFTkSuQmCC)  
**📂 Struktur Proyek**  
/  
 ├─ assets/  
 │  ├─ bebyte-logo.png  
 │  ├─ cilokahh.jpg  
 │  ├─ enoki.jpg  
 │  ├─ eslumut.jpg  
 │  ├─ stickymilk.jpg  
 │  └─ ubiunguahh.jpg  
 │  
 ├─ css/  
 │  └─ style.css  
 │  
 ├─ js/  
 │  ├─ app.js  
 │  ├─ data.js  
 │  ├─ discord.js  
 │  └─ report.js  
 │  
 └─ index.html  
   
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANklEQVR4nO3OQQmAABRAsScYxpg/h5VMYARvRrCCNxG2BFtmZquOAAD4i3Ot7mr/egIAwGvXA224BcUMk6pDAAAAAElFTkSuQmCC)  
**🚀 Cara Menjalankan**  
1. Clone repo:  
git clone <repo-url>  
   
1. Buka folder proyek.  
2. ~~Jalankan dengan membuka ~~ ~~**index.html**~~ ~~ di browser.~~  
3. ~~*Tidak perlu server atau instalasi tambahan. *~~Sebaiknya gunakan server walau yang sederhana misal dengan python3 -m http.server 8888 langsung di folder proyek atau gunakan[ Simple web server](https://simplewebserver.org/ "https://simplewebserver.org/")  
Untuk pengembangan, gunakan extension **Live Server** agar auto-refresh.  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANElEQVR4nO3OUQmAABBAsSdYxKYXx1gmEBOIFfwTYUuwZWa2ag8AgL841uquzq8nAAC8dj05WgYLQTzjnAAAAABJRU5ErkJggg==)  
**🛠️ Cara Mengubah Data Produk**  
Edit js/data.js:  
{  
   id: 'p001',  
   name: 'Lumpia Ubi Lumer',  
   price: 12000,  
   image: 'assets/ubiunguahh.jpg',  
   description: 'Lumpia ubi lumer coklat keju.'  
 }  
   
Tambahkan objek baru untuk menambah menu.  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANUlEQVR4nO3OMQ2AABAAsSNhwgJGkPcrHpnRgQU2QtIq6DIze3UGAMBf3Gu1VcfXEwAAXrseaJkELjbMzy0AAAAASUVORK5CYII=)  
**🎨 Kustomisasi Tampilan**  
Semua style ada di:  
css/style.css  
   
Tema warna dapat disesuaikan, termasuk palet hijau untuk identitas BeByte.  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANklEQVR4nO3OQQmAABRAsScYxpg/h5VMYARvRrCCNxG2BFtmZquOAAD4i3Ot7mr/egIAwGvXA224BcUMk6pDAAAAAElFTkSuQmCC)  
**📈 Pengembangan Selanjutnya**  
- Sistem laporan transaksi otomatis.  
- Simpan data ke IndexedDB atau database server.  
- Cetak struk thermal printer.✅ (walau mungkin tidak sama seperti yang diharapkan founder  
- Fitur login kasir & owner.  
- Integrasi pembayaran QRIS.  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANklEQVR4nO3OMQ2AABAAsSNBCkLfFDZwwIgHRiywEZJWQZeZ2ao9AAD+4lyruzq+ngAA8Nr1AOH0BedHjjlfAAAAAElFTkSuQmCC)  
