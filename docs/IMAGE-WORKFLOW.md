# Panduan Lengkap Optimasi Gambar (Sharp AVIF & WebP) di Windows PowerShell

Dokumen ini dirancang khusus agar kamu dapat mengelola puluhan hingga ratusan foto kamera berukuran besar (**10–20 MB per foto**) tanpa membuat website lambat atau membuat repository GitHub penuh.

---

## 1. Mengapa Tidak Boleh Langsung Memasukkan Foto 10–20 MB ke Website?

1. **Kecepatan Website:** Jika pengunjung membuka galeri berisi 10 foto yang masing-masing berukuran 15 MB, mereka harus mengunduh **150 MB** hanya untuk melihat satu halaman. Di jaringan seluler, gambar akan gagal dimuat atau sangat lambat.
2. **Batas Ukuran GitHub:** GitHub membatasi ukuran repository dan file. Menyimpan ratusan foto mentah di Git akan membuat proses `git push` dan proses build di Vercel menjadi sangat lambat.
3. **Solusi di Proyek Ini:**
   - Foto asli (10–20 MB) disimpan di folder `source-images/` yang **diabaikan oleh Git** (`.gitignore`).
   - Script `npm run images:optimize` menggunakan **Sharp** di laptop Windows kamu untuk membuat versi ringan berformat **AVIF** dan **WebP** dalam beberapa ukuran layar (`480w`, `768w`, `1200w`, `1600w`, `2048w`), sekaligus menghapus data lokasi GPS dari EXIF demi privasi.
   - Hasil ukurannya turun drastis dari **15 MB menjadi sekitar 120 KB – 350 KB** tanpa terlihat pecah!

---

## 2. Mengenal Perbedaan Format Gambar

- **Original JPG / PNG:** File mentah dari kamera atau software desain (misal Canva/Figma). Ukurannya sangat besar (10–20 MB). Hanya disimpan di laptop lokal (`source-images/`).
- **AVIF (`.avif`):** Format gambar generasi terbaru dengan kompresi paling efisien dan detail warna yang sangat halus. Browser modern (Chrome, Edge, Firefox, Safari terbaru) akan otomatis memilih file ini terlebih dahulu.
- **WebP (`.webp`):** Format gambar modern yang didukung hampir seluruh browser sebagai *fallback* (cadangan) apabila browser pengunjung belum mendukung AVIF.
- **Responsive Image Variants (`480w` s.d. `2048w`):**
  - Layar HP hanya perlu mengunduh gambar lebar `480px` atau `768px`.
  - Layar monitor laptop/PC atau saat membuka *Lightbox* layar penuh akan otomatis mengambil ukuran `1600px` atau `2048px`.
- **Thumbnail vs Full-size Image:** Kamu tidak perlu memotong gambar *thumbnail* secara manual di Photoshop/Canva. Satu foto original otomatis dibuatkan ukuran kecil (untuk *card/grid*) dan ukuran besar (untuk *Lightbox*).

---

## 3. Tutorial Langkah demi Langkah (Menggunakan Windows PowerShell)

### Langkah 1: Buka PowerShell di Folder Proyek
Buka terminal di VS Code (`Ctrl + ~`) atau buka Windows PowerShell lalu masuk ke folder proyekmu:
```powershell
cd D:\path\ke\aurell-portfolio

---
## 4. Salin Foto Original (10–20 MB) ke Folder source-images/
Masukkan foto sesuai kategorinya:
- Foto kegiatan gunung/alam/dokumentasi -> source-images/photography/
- Desain feed/carousel/poster IG -> source-images/social-media/
- Screenshot aplikasi/proyek -> source-images/projects/
- Foto kegiatan organisasi -> source-images/experiences/

Contoh perintah di PowerShell untuk menyalin foto dari folder Downloads ke proyek (atau kamu bisa drag-and-drop lewat File Explorer Windows seperti biasa):

    # Copy-Item "C:\Users\Aurell\Downloads\IMG_8821.JPG" -Destination ".\source-images\photography\merbabu-summit.jpg"

---

## 5: Jalankan Script Optimasi Sharp
Ketik perintah berikut di PowerShell:
    # npm run images:optimize

---

## 6: Daftarkan imageKey ke File Data TypeScript
Perhatikan teks di dalam kurung siku pada laporan di atas: photography/merbabu-summit. Itulah imageKey milik fotomu (nama folder + nama file tanpa .jpg).

Buka file src/data/photography.ts, lalu tambahkan ke dalam images pada album yang sesuai:

# Contoh :
    #     {
    #   slug: "mountain-activities",
    #   title: "Mountain & Vertical Activities",
    #   category: "Mountain Activities",
    #   description: "Dokumentasi kegiatan lapangan, operasional gunung hutan, dan aktivitas pemanjatan tebing.",
    #   coverImageKey: "photography/merbabu-summit",
    #   images: [
    #     {
    #       imageKey: "photography/merbabu-summit",
    #       alt: "Kegiatan operasional lapangan di jalur pendakian",
    #       caption: "Operasional lapangan gunung hutan",
    #       date: "2026",
    #       location: "Jawa Tengah"
    #     }
    #   ],
    #   featured: true,
    #   tags: ["Mountaineering", "Rock Climbing", "Field Operations"],
    # }

---
## 7: Cek Tampilan di Browser Lokal
Jalankan server lokal: 
    #npm run dev