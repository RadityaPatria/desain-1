# Redesain Sistem Registrasi & Undangan — JawaPos Awards 2026

Proyek ini merupakan redesain tingkat tinggi (**high-craft editorial design, anti AI-slop**) untuk sistem acara **JawaPos Awards 2026**, yang telah disesuaikan secara presisi dengan **blueprint 3D CAD arsitektur Grand Ballroom** dan dipisahkan menjadi 2 halaman mandiri:

1. **[index.html](index.html) — Halaman Undangan Tamu Elektronik (`/i/<kode>`)**
   - E-Ticket boarding pass eksklusif dengan QR code verifikasi.
   - Daftar delegasi resmi (Ibu Gubernur Jawa Timur + staf protokol + pendamping).
   - **Denah Resmi Grand Ballroom 3D**:
     - Panggung Utama 19,20 m × 3,60 m (tinggi 0,80 m)
     - Curved Giant LED Screen 16,80 m / 17,00 m
     - Catwalk Runway 3,60 m × 2,40 m
     - **Tepat 8 Kursi per Meja Bundar** (Round Banquet Table 8-seater)
     - **Formasi 40 Meja** sesuai gambar CAD: Sayap Kiri (baris 3, 4, 3, 4, 3, 3 meja) dan Sayap Kanan (baris 3, 4, 3, 4, 3, 3 meja)
     - Stand Kamera Broadcast di baris ke-3 tepi luar
     - Meja 1 VVIP di baris terdepan Sayap Kiri, berdampingan langsung dengan catwalk utama.
     - Inspektur meja interaktif saat meja diklik.
   - Form pesan/protokol untuk panitia.

2. **[checkin.html](checkin.html) — Layar Kiosk Check-in Meja Registrasi (`/checkin`)**
   - Tampilan stasiun kerja operator MacBook di meja lobi.
   - Viewfinder kamera scanner otomatis dengan animasi reticle laser.
   - Verifikasi Check-in Berhasil untuk Ibu Gubernur Jawa Timur (Meja 1 VVIP · 8 Kursi).
   - Toggle kehadiran individu (hadir / belum) dengan pembaruan counter otomatis.
   - Audio feedback scanner bip via Web Audio API bawaan browser.
   - Modal dialog pencarian nama tamu manual.

---

## 🎨 Palet Warna Asli (Dipertahankan 100%)
- **Deep British Teal**: `#0f2a2e` / `#13343a` (Warna utama malam gala Jawa Pos)
- **Antique Brass / Gold**: `#b98a22` / `#d8a21a` / `#f3e5bd` (Aksen prestisius VVIP)
- **Ivory Soft White**: `#eef2ee` / `#f4f5f2`
- **Muted Sage**: `#9fb3ae` / `#2f4a4d`
- **Status Emerald**: `#34d399` / `#6ee7b7` (Check-in verified)
- **Cobalt Blue**: `#3b6fd4` (Meja tamu)

---

## 🚀 Cara Menjalankan & Upload ke GitHub Pages

### 1. Uji Coba Lokal Langsung
Cukup klik ganda (double click) file `index.html` atau `checkin.html` untuk membuka langsung di browser Anda, atau jalankan melalui local server:
```bash
npx -y serve .
```

### 2. Upload ke GitHub Pages
1. Push file `index.html`, `checkin.html`, `styles.css`, dan `app.js` ke repository GitHub Anda.
2. Buka tab **Settings** > **Pages** di repository GitHub Anda.
3. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
4. Website langsung live di:
   - Undangan Tamu: `https://<username>.github.io/<repo>/` (otomatis membuka `index.html`)
   - Layar Kiosk: `https://<username>.github.io/<repo>/checkin.html`
