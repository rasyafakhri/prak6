# prak6

# Praktikum 6 - JavaScript DOM dan Event Handling

## Identitas Praktikum

- Mata Kuliah: Pemrograman Web
- Pertemuan: 7
- Topik: JavaScript DOM dan Event Handling
- Nama Project: Form Pendaftaran Workshop

Project ini dibuat untuk memenuhi tugas Praktikum 6 yang membahas penggunaan DOM (Document Object Model), manipulasi elemen HTML, event handling, serta validasi form menggunakan JavaScript. 【1-69667d】

---

# Tujuan

Adapun tujuan dari praktikum ini adalah:

1. Memahami konsep DOM pada JavaScript.
2. Memilih dan memanipulasi elemen HTML menggunakan JavaScript.
3. Menggunakan event handling dengan addEventListener().
4. Membuat validasi form.
5. Menampilkan pesan kesalahan dan pesan sukses kepada pengguna.
6. Membuat halaman web interaktif menggunakan DOM dan Event Handling. 【1-69667d】

---

# Struktur Folder

```text
Lab6Web/
│
├── index.html
├── style.css
└── script.js
```

## Keterangan File

### index.html
Berisi struktur halaman web seperti:

- Form pendaftaran workshop
- Input nama
- Input email
- Dropdown pilihan sesi
- Tombol daftar
- Tombol reset
- Area menampilkan hasil validasi

### style.css

Berisi pengaturan tampilan halaman, antara lain:

- Layout halaman
- Warna dan font
- Responsive design
- Tampilan pesan error dan sukses
- Tampilan ringkasan data pendaftaran

### script.js

Berisi logika JavaScript untuk:

- Menghitung jumlah karakter nama
- Menampilkan sesi yang dipilih
- Memvalidasi data input
- Menampilkan pesan sukses atau error
- Mereset form

---

# Fitur Program

## 1. Penghitung Karakter Nama

Saat pengguna mengetik nama, jumlah karakter akan diperbarui secara otomatis menggunakan event:

```javascript
input
```

Fitur ini membantu pengguna mengetahui panjang karakter yang telah dimasukkan.

---

## 2. Menampilkan Pilihan Sesi

Ketika pengguna memilih sesi workshop pada dropdown, informasi sesi yang dipilih akan langsung ditampilkan menggunakan event:

```javascript
change
```

---

## 3. Validasi Nama

Program akan memeriksa:

- Nama tidak boleh kosong.
- Nama minimal 3 karakter.

Contoh valid:

```text
Rasya
```

Contoh tidak valid:

```text
Ra
```

---

## 4. Validasi Email

Program menggunakan Regular Expression (Regex) untuk memeriksa format email.

Contoh valid:

```text
rasya@gmail.com
```

Contoh tidak valid:

```text
rasyagmail.com
```

---

## 5. Validasi Sesi Workshop

Pengguna wajib memilih salah satu sesi workshop sebelum mengirim data.

---

## 6. Menampilkan Ringkasan Data

Jika seluruh data valid, program akan menampilkan:

- Nama
- Email
- Sesi workshop yang dipilih

---

## 7. Tombol Reset

Tombol reset berfungsi untuk:

- Menghapus seluruh input
- Menghapus pesan validasi
- Menghapus ringkasan data
- Mengembalikan penghitung karakter menjadi 0

---

# Event Handling yang Digunakan

Project ini menggunakan beberapa event JavaScript, yaitu:

| Event | Fungsi |
|---------|----------|
| input | Menghitung jumlah karakter nama |
| change | Menampilkan sesi yang dipilih |
| submit | Memvalidasi form |
| click | Menjalankan tombol reset |

---

# Cara Menjalankan Program

1. Download atau clone repository ini.

```bash
git clone https://github.com/username/Lab6Web.git
```

2. Masuk ke folder project.

```bash
cd Lab6Web
```

3. Buka file:

```text
index.html
```

menggunakan browser seperti:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

---

# Langkah Pengujian

## Pengujian 1 - Semua Kosong

Input:

```text
Nama  : kosong
Email : kosong
Sesi  : kosong
```

Hasil:

```text
Nama wajib diisi.
```

---

## Pengujian 2 - Nama Kurang dari 3 Karakter

Input:

```text
Nama : Ra
```

Hasil:

```text
Nama minimal 3 karakter.
```

---

## Pengujian 3 - Email Tidak Valid

Input:

```text
Email : rasyagmail.com
```

Hasil:

```text
Masukkan email yang valid.
```

---

## Pengujian 4 - Sesi Belum Dipilih

Input:

```text
Sesi : kosong
```

Hasil:

```text
Silakan pilih sesi workshop.
```

---

## Pengujian 5 - Data Valid

Input:

```text
Nama  : Rasya Fakhri
Email : rasya@gmail.com
Sesi  : Cyber Security
```

Hasil:

```text
Pendaftaran berhasil!
```

dan menampilkan ringkasan data peserta.

---

# Screenshot

## Halaman Utama

Tambahkan screenshot halaman utama di sini.

```md
![Halaman Utama](images/halaman-utama.png)
```

## Validasi Error

Tambahkan screenshot validasi error.

```md
![Validasi Error](images/error.png)
```

## Validasi Berhasil

Tambahkan screenshot validasi berhasil.

```md
![Validasi Berhasil](images/sukses.png)
```

---

# Konsep yang Dipelajari

Pada praktikum ini dipelajari beberapa konsep penting JavaScript, yaitu:

- DOM (Document Object Model)
- getElementById()
- addEventListener()
- textContent
- innerHTML
- Event Input
- Event Change
- Event Submit
- Event Click
- Validasi Form
- Manipulasi Elemen HTML menggunakan JavaScript. 【1-69667d】

---

# Kesimpulan

Praktikum ini berhasil mengimplementasikan DOM dan Event Handling menggunakan JavaScript. Program dapat melakukan validasi data pengguna, menampilkan informasi secara interaktif, serta memberikan feedback berupa pesan kesalahan maupun pesan sukses. Dengan praktikum ini, kemampuan dalam manipulasi elemen HTML dan event handling menjadi lebih memahami dan dapat diterapkan pada aplikasi web yang lebih kompleks. 【1-69667d】
