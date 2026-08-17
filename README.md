<h1 align="center">X-ENC</h1>
<p align="center">
  <strong>HTML Obfuscation Tool</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Author-Xemzz-blue?style=for-the-badge" alt="Author">
</p>

## 📌 Tentang
**X-ENC** adalah sebuah web tool sederhana namun *powerful* untuk melakukan *obfuscate* atau enkripsi pada file HTML. Dirancang dengan antarmuka elegan. Pada versi ini, pemrosesan enkripsi telah terintegrasi dengan **API Backend**, memastikan performa pemrosesan yang lebih handal.

## ✨ Fitur Utama
- ⚡ **API Processing:** Pemrosesan obfuscation kini dikelola secara aman melalui endpoint API.
- 📱 **Responsif:** Tampilan menyesuaikan dengan sempurna baik di desktop maupun mobile.
- 🛡️ **4 Pilihan Metode Enkripsi:**
  - `unescape`: Mengonversi karakter menjadi format URL encoding (`%XX`).
  - `base64`: Mengenkripsi kode menjadi string Base64 yang akan dieksekusi menggunakan `atob()`.
  - `hex`: Mengonversi setiap karakter menjadi kode heksadesimal (`\xXX`).
  - `mixed`: Kombinasi kompleks antara Base64 dan Hexadecimal untuk tingkat obfuscation yang lebih tinggi dan sulit dibaca.

## 🚀 Cara Penggunaan
1. Clone repositori ini:
   ```bash
   git clone https://github.com/sigma284-keren/X-ENC.git
   ```
2. Karena versi ini menggunakan Fetch API (`/api`), pastikan untuk **menghosting atau menjalankan project ini di environment server** (misalnya di-deploy ke Vercel menggunakan Serverless Functions, atau dijalankan via server lokal Node.js).
3. Buka halaman utama web di browser.
4. Klik **Pilih file HTML** dan masukkan file `.html` atau `.htm` target yang ingin kamu enkripsi.
5. Pilih salah satu **Metode** enkripsi yang tersedia di menu.
6. Klik tombol **Proses & Download**.
7. File hasil obfuscate akan otomatis terunduh dengan format nama `<namafile>_<metode>.html`.

## 🛠️ Teknologi yang Digunakan
- **Frontend:** HTML5, CSS3 (Glassmorphism), Vanilla JavaScript (Fetch API, FormData)
- **Backend:** API Endpoint (`/api`) untuk memproses enkripsi file

## ⚠️ Disclaimer
**Gunakan alat ini dengan bijak.** Tool ini dibuat semata-mata untuk tujuan perlindungan source code dasar agar tidak mudah dibaca secara langsung. Jangan menyalahgunakan tool ini untuk menyembunyikan script berbahaya (malware/phishing) atau tujuan lain yang melanggar hukum. 

**Segala bentuk penyalahgunaan adalah tanggung jawab pengguna sepenuhnya.** Developer tidak bertanggung jawab atas segala kerugian, penyalahgunaan, atau masalah hukum yang ditimbulkan dari penggunaan tool ini.

## 👤 Author
Dibuat oleh **Xemzz**
- WhatsApp: [wa.me/6285754585160](https://wa.me/6285754585160)