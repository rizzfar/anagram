# 🔍 Pencarian Anagram dengan Algoritma Steinhaus-Johnson-Trotter

## 📌 Deskripsi
Proyek ini adalah implementasi **pencarian anagram** menggunakan **algoritma permutasi Steinhaus-Johnson-Trotter**. Algoritma ini digunakan untuk menemukan semua kemungkinan permutasi dari suatu kata dan mencari pola kata yang valid menggunakan **strategi brute force**.

---

## ⚡ Fitur
- ✅ Menghasilkan semua permutasi dari sebuah kata.
- ✅ Menggunakan **algoritma Steinhaus-Johnson-Trotter** untuk menghasilkan permutasi dengan efisiensi yang lebih baik.
- ✅ Memeriksa validitas anagram berdasarkan daftar kata yang tersedia.
---

## 🛠️ Instalasi & Penggunaan
### **1️⃣ Clone Repository**
```sh
git clone https://github.com/rizzfar/anagram.git
cd anagram
```
---

## 🔬 Algoritma yang Digunakan
### **📌 Steinhaus-Johnson-Trotter Algorithm**
Algoritma **Steinhaus-Johnson-Trotter** digunakan untuk menghasilkan permutasi dari suatu kata dengan efisiensi tinggi. Algoritma ini menghasilkan setiap permutasi hanya dengan menukar dua elemen berdekatan, sehingga lebih optimal dibandingkan metode rekursif tradisional.

### **📌 Strategi Brute Force**
Setiap permutasi yang dihasilkan kemudian diperiksa terhadap daftar kata valid menggunakan metode **brute force** untuk menemukan anagram yang sesuai.

---

## 📖 Contoh Penggunaan
### **Input:**
```
Kata: "kasur"
```

### **Output:**
```
Permutasi yang dihasilkan:
rakus, kuras, rasuk, rusak, etc.
Anagram yang valid ditemukan: abc, bac
```

---

## 🏗️ Kontribusi
Kontribusi sangat diterima! Silakan lakukan **fork** dan **pull request** jika ingin menambahkan fitur baru atau meningkatkan performa algoritma.

1. **Fork repository ini**
2. **Buat branch baru**
3. **Commit perubahan Anda**
4. **Buka pull request**

---

## 🔗 Referensi
- [Algoritma Steinhaus-Johnson-Trotter - Wikipedia](https://en.wikipedia.org/wiki/Steinhaus–Johnson–Trotter_algorithm)
- [Strategi Brute Force dalam Pencarian Pola](https://en.wikipedia.org/wiki/Brute-force_search)

---

## 📜 Lisensi
MIT License © 2025 - Rizky Al Farid Hafizh
