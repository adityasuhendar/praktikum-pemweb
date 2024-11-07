// ADITYA WAHYU SUHENDAR 
// 122140235 
// KELAS RA (ASAL RB)
// FILE JAVASCRIPT

function nilai() {
    // Mengambil nilai tugas dari input dengan id "tugas" dan mengonversinya ke tipe number
    const tugas = parseFloat(document.getElementById("tugas").value);
    
    // Mengambil nilai UTS dari input dengan id "uts" dan mengonversinya ke tipe number
    const uts = parseFloat(document.getElementById("uts").value);
    
    // Mengambil nilai UAS dari input dengan id "uas" dan mengonversinya ke tipe number
    const uas = parseFloat(document.getElementById("uas").value);

    // Memeriksa apakah nilai yang diinputkan valid, yaitu antara 0 dan 100
    if (isNaN(tugas) || tugas < 0 || tugas > 100 || // Memeriksa apakah nilai tugas bukan angka atau berada di luar rentang 0-100
        isNaN(uts) || uts < 0 || uts > 100 || // Memeriksa apakah nilai UTS bukan angka atau berada di luar rentang 0-100
        isNaN(uas) || uas < 0 || uas > 100) { // Memeriksa apakah nilai UAS bukan angka atau berada di luar rentang 0-100
        alert("Nilai harus di antara 0 dan 100."); // Menampilkan pesan kesalahan jika nilai tidak valid
        return; // Menghentikan eksekusi fungsi jika ada nilai tidak valid, sehingga perhitungan tidak dilanjutkan
    }

    // Mendefinisikan konstanta untuk bobot nilai tugas, UTS, dan UAS
    const BOBOT_TUGAS = 0.3; // Bobot nilai tugas adalah 30%
    const BOBOT_UTS = 0.3; // Bobot nilai UTS adalah 30%
    const BOBOT_UAS = 0.4; // Bobot nilai UAS adalah 40%
    const BATAS_LULUS = 60; // Batas minimal nilai rata-rata agar lulus adalah 60

    // Menghitung rata-rata tertimbang dari nilai tugas, UTS, dan UAS
    const rataRata = (tugas * BOBOT_TUGAS) + (uts * BOBOT_UTS) + (uas * BOBOT_UAS);

    // Menentukan nilai huruf berdasarkan nilai rata-rata
    let nilaiHuruf;
    if (rataRata >= 90) {
        nilaiHuruf = 'A'; // Nilai A jika rata-rata 90 atau lebih
    } else if (rataRata >= 80) {
        nilaiHuruf = 'B'; // Nilai B jika rata-rata 80 atau lebih
    } else if (rataRata >= 70) {
        nilaiHuruf = 'C'; // Nilai C jika rata-rata 70 atau lebih
    } else if (rataRata >= 60) {
        nilaiHuruf = 'D'; // Nilai D jika rata-rata 60 atau lebih
    } else {
        nilaiHuruf = 'E'; // Nilai E jika rata-rata kurang dari 60
    }

    // Mengecek apakah nilai rata-rata memenuhi batas kelulusan
    const lulus = rataRata >= BATAS_LULUS;
    const status = lulus ? "Lulus" : "Tidak Lulus"; // Menetapkan status berdasarkan kelulusan
    const warna = lulus ? "status lulus" : "status gagal"; // Menetapkan kelas warna sesuai status

    // Menampilkan hasil perhitungan rata-rata, nilai huruf, dan status di elemen dengan id "hasil"
    document.getElementById("hasil").innerHTML = `
        <p>Rata-Rata: ${rataRata.toFixed(2)}</p> <!-- Menampilkan nilai rata-rata dengan 2 angka desimal -->
        <p>Nilai Huruf: ${nilaiHuruf}</p> <!-- Menampilkan nilai huruf berdasarkan rata-rata -->
        <p class="${warna}">Status: ${status}</p> <!-- Menampilkan status lulus atau tidak dengan warna sesuai status -->
        `;
}

function resetForm() {
    // Mengosongkan nilai input pada elemen dengan id "tugas"
    document.getElementById("tugas").value = "";
    
    // Mengosongkan nilai input pada elemen dengan id "uts"
    document.getElementById("uts").value = "";
    
    // Mengosongkan nilai input pada elemen dengan id "uas"
    document.getElementById("uas").value = "";

    // Menghapus konten pada elemen dengan id "hasil" untuk mengosongkan hasil sebelumnya
    document.getElementById("hasil").innerHTML = "";
}

let backgrounds = [
    './gambar/itera1.jpg',  // Gambar background pertama
    './gambar/itera2.jpg', // Gambar background kedua
    './gambar/itera3.jpg', // Gambar background ketiga
    './gambar/itera4.jpg', // Gambar background keempat
    './gambar/itera5.jpg', // Gambar background kelima
    './gambar/itera6.jpg', // Gambar background keenam
    './gambar/itera7.jpg'  // Gambar background ketujuh
];

let currentBackgroundIndex = 0; // Indeks awal untuk gambar background

function changeBackground() {
    // Mengubah gambar background pada elemen body menggunakan gambar dari array berdasarkan indeks
    document.body.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
    // Menaikkan indeks untuk gambar background berikutnya, dan kembali ke 0 jika mencapai akhir array
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
}

setInterval(changeBackground, 2000); // Memanggil fungsi changeBackground setiap 2 detik
