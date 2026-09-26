# Portofolio - Stefany Go

Website portofolio pribadi untuk menampilkan profil, proyek, riwayat pendidikan, dan publikasi penelitian. Dibangun dengan HTML, CSS, dan JavaScript murni tanpa framework, dengan dukungan mode gelap/terang dan tampilan responsif.

## Fitur

- Halaman satu layar (single page) dengan navigasi antar-section yang mulus
- Mode gelap dan terang, preferensi tersimpan di browser
- Filter proyek berdasarkan kategori (Web App dan Research Paper)
- Tautan unduh langsung untuk paper penelitian dalam format PDF
- Desain responsif untuk desktop maupun perangkat mobile
- Animasi muncul saat scroll (reveal on scroll)

## Struktur Proyek

```
portfolio-web/
├── index.html      # Struktur halaman
├── styles.css      # Gaya tampilan dan tema
├── script.js       # Interaksi: menu, filter, tema, scroll
└── assets/         # Gambar, foto profil, dan file PDF paper
```

## Teknologi

- HTML5
- CSS3 (custom properties, grid, flexbox)
- JavaScript (vanilla, tanpa dependensi)

## Menjalankan Secara Lokal

Cukup buka `index.html` langsung di browser, atau gunakan server statis:

```bash
# opsi dengan Python
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Deployment

Website ini merupakan situs statis dan dapat langsung di-deploy ke Vercel:

1. Hubungkan repository ke Vercel
2. Framework Preset: Other (tanpa build command)
3. Deploy

## Kontak

- Email: stefanygo239323@gmail.com
- LinkedIn: [linkedin.com/in/stefany-go](https://linkedin.com/in/stefany-go)
