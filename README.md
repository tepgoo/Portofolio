# Web Portofolio

Website portofolio pribadi statis (HTML, CSS, JavaScript murni — tanpa framework, tanpa build tools). Ringan, responsif, ada mode gelap, dan siap dipakai sebagai syarat magang.

## Fitur

- Responsif (desktop, tablet, mobile) dengan menu hamburger di layar kecil
- Mode gelap/terang (tersimpan otomatis di browser)
- Navigasi smooth scroll + highlight menu aktif otomatis
- Section: Beranda, Tentang Saya, Portfolio (dengan filter), Pendidikan, Pengalaman, Blog, Kontak
- Timeline pendidikan & pengalaman
- Filter proyek berdasarkan kategori
- Animasi muncul saat scroll
- Tombol "kembali ke atas"

## Struktur File

```
portfolio-web/
├── index.html      # Struktur & konten halaman
├── styles.css      # Semua styling & tema
├── script.js       # Interaktivitas (menu, filter, dark mode, dll.)
├── assets/         # Gambar & CV kamu (lihat assets/README.txt)
└── README.md       # Dokumen ini
```

## Cara Menjalankan di Komputer

Cukup buka `index.html` dengan klik dua kali, atau untuk pengalaman lebih baik jalankan server lokal:

```bash
# Python 3
python3 -m http.server 8000
```

Lalu buka http://localhost:8000 di browser.

## Cara Kustomisasi (yang perlu kamu ganti)

Semua teks placeholder mudah dicari. Buka `index.html` lalu ganti:

1. **Nama & judul** — cari `Nama Kamu` dan `NamaKamu`, ganti dengan namamu.
2. **Deskripsi hero & Tentang Saya** — ubah paragraf di section `#beranda` dan `#tentang`.
3. **Keahlian / Tech Stack** — sesuaikan daftar di kartu "Keahlian & Tech Stack".
4. **Proyek** — pada tiap `<article class="project-card">`: ganti judul, deskripsi, link `href`, dan `data-category` (`web`, `dashboard`, atau `kampus`).
5. **Pendidikan & Pengalaman** — edit tiap `timeline-item` (tanggal, judul, instansi).
6. **Blog** — ganti judul, tanggal, dan link tulisanmu.
7. **Kontak** — ganti email, nomor telepon, dan link media sosial di section `#kontak`.

### Menambah gambar & CV

Masukkan file ke folder `assets/` dengan nama sesuai `assets/README.txt`
(`profile.jpg`, `project1.jpg`, ..., `cv.pdf`). Jika belum ada, website tetap tampil dengan placeholder.

### Mengganti warna tema

Buka `styles.css` bagian paling atas (`:root`), ubah nilai `--primary` dan `--accent`.

## Deploy ke GitHub Pages

Ada dua cara. Yang paling umum untuk portofolio adalah **User Site** (URL: `https://username.github.io`).

### Cara 1 — User Site (`username.github.io`)

1. Buat repository baru di GitHub dengan nama **persis**: `username.github.io`
   (ganti `username` dengan username GitHub-mu, huruf kecil semua).
2. Upload semua isi folder `portfolio-web` (bukan foldernya, tapi isinya: `index.html`, `styles.css`, `script.js`, `assets/`) ke root repository.

   Lewat terminal:
   ```bash
   cd portfolio-web
   git init
   git add .
   git commit -m "Portofolio pertama"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```
3. Buka repo di GitHub → **Settings** → **Pages** → pastikan Source = `Deploy from a branch`, Branch = `main`, folder `/root`.
4. Tunggu 1-2 menit, situs live di **https://username.github.io**

### Cara 2 — Project Site (`username.github.io/nama-repo`)

1. Buat repo dengan nama bebas, misal `portfolio`.
2. Push isi folder seperti langkah di atas (ganti URL remote ke repo tersebut).
3. Settings → Pages → Branch `main` → `/root` → Save.
4. Situs live di **https://username.github.io/portfolio**

> Catatan: `index.html` harus berada di root repository (atau di folder yang kamu pilih di Settings → Pages), bukan di dalam subfolder.

## Tips untuk Lamaran Magang

- Pastikan tombol "Unduh CV" mengarah ke `assets/cv.pdf` yang valid.
- Isi minimal 3-6 proyek nyata dengan link yang bisa diakses.
- Cek tampilan di HP sebelum kirim link.
- Gunakan foto profil profesional.
# Portofolio
