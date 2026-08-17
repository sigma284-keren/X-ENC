<h1 align="center">X-ENC</h1>
<p align="center">
  <strong>HTML Obfuscation Tool</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Author-Xemzz-blue?style=for-the-badge" alt="Author">
</p>

## 📌 Tentang
**X-ENC** adalah sebuah web tool sederhana namun *powerful* untuk melakukan *obfuscate* atau enkripsi pada file HTML. Dirancang dengan antarmuka elegan. Semua proses enkripsi berjalan 100% di *client-side* (di dalam browser), sehingga kode sumber kamu dijamin aman dan tidak ada data yang dikirim ke server.

## ✨ Fitur Utama
- ⚡ **Client-Side Processing:** Pemrosesan cepat dan aman langsung dari browser, tanpa perlu backend.
- 📱 **Responsif:** Tampilan menyesuaikan dengan sempurna baik di desktop maupun mobile.
- 🛡️ **4 Pilihan Metode Enkripsi:**
  - `unescape`: Mengonversi karakter menjadi format URL encoding (`%XX`).
  - `base64`: Mengenkripsi kode menjadi string Base64 yang akan dieksekusi menggunakan `atob()`.
  - `hex`: Mengonversi setiap karakter menjadi kode heksadesimal (`\xXX`).
  - `mixed`: Kombinasi kompleks antara Base64 dan Hexadecimal untuk tingkat obfuscation yang lebih tinggi dan sulit dibaca.

## 🚀 Cara Penggunaan
1. Clone repositori ini atau download file ZIP:
   ```bash
   git clone https://github.com/sigma284-keren/X-ENC.git
   ```
2. Buka file `index.html` menggunakan browser pilihanmu (bisa langsung dibuka atau dihosting via Vercel / GitHub Pages).
3. Klik **Pilih file HTML** dan masukkan file `.html` atau `.htm` target yang ingin kamu enkripsi.
4. Pilih salah satu **Metode** enkripsi yang tersedia di menu.
5. Klik tombol **Proses & Download**.
6. File hasil obfuscate akan otomatis terunduh dengan format nama `<namafile>_<metode>.html`.

## 🛠️ Teknologi yang Digunakan
- **HTML5**
- **CSS3** (Custom Properties, Backdrop Filter, CSS Animations)
- **Vanilla JavaScript** (FileReader API, Blob API, Btoa/Atob)

## ⚠️ Disclaimer
**Gunakan alat ini dengan bijak.** Tool ini dibuat semata-mata untuk tujuan perlindungan source code dasar agar tidak mudah dibaca secara langsung. Jangan menyalahgunakan tool ini untuk menyembunyikan script berbahaya (malware/phishing) atau tujuan lain yang melanggar hukum. 

**Segala bentuk penyalahgunaan adalah tanggung jawab pengguna sepenuhnya.** Developer tidak bertanggung jawab atas segala kerugian, penyalahgunaan, atau masalah hukum yang ditimbulkan dari penggunaan tool ini.

## 👤 Author
Dibuat oleh **Xemzz**
- WhatsApp: [wa.me/6285754585160](https://wa.me/6285754585160)