const prompt = require("prompt-sync")();

// Data siswa (kosong)
let siswa = [];

// Menu utama
function menu() {
    console.log("\n=== DATA SISWA ===");
    console.log("1. Tambah Data");
    console.log("2. Tampil Data");
    console.log("3. Hapus Data");
    console.log("4. Cari Data");
    console.log("5. Keluar");
}

// Tambah data
function tambah() {
    console.log("\n-- TAMBAH DATA --");
    let nama = prompt("Nama: ");
    let alamat = prompt("Alamat: ");
    let nohp = prompt("No HP: ");
    
    siswa.push({nama, alamat, nohp});
    console.log("Data berhasil ditambah!");
}

// Tampil semua data
function tampil() {
    console.log("\n-- DAFTAR SISWA --");
    if (siswa.length === 0) {
        console.log("Tidak ada data!");
        return;
    }
    
    siswa.forEach((s, i) => {
        console.log(`${i+1}. ${s.nama} - ${s.alamat} - ${s.nohp}`);
    });
}

// Hapus data
function hapus() {
    console.log("\n-- HAPUS DATA --");
    tampil();
    
    if (siswa.length === 0) return;
    
    let nomor = prompt("Pilih nomor yang akan dihapus: ");
    let index = parseInt(nomor) - 1;
    
    if (index >= 0 && index < siswa.length) {
        siswa.splice(index, 1);
        console.log("Data berhasil dihapus!");
    } else {
        console.log("Nomor tidak valid!");
    }
}

// Cari data
function cari() {
    console.log("\n-- CARI DATA --");
    let nama = prompt("Masukkan nama yang dicari: ");
    
    let hasil = siswa.filter(s => 
        s.nama.toLowerCase().includes(nama.toLowerCase())
    );
    
    if (hasil.length > 0) {
        console.log("Data ditemukan:");
        hasil.forEach((s, i) => {
            console.log(`${i+1}. ${s.nama} - ${s.alamat} - ${s.nohp}`);
        });
    } else {
        console.log("Data tidak ditemukan!");
    }
}

// Program utama
while (true) {
    menu();
    let pilihan = prompt("Pilih (1-5): ");
    
    switch (pilihan) {
        case "1":
            tambah();
            break;
        case "2":
            tampil();
            break;
        case "3":
            hapus();
            break;
        case "4":
            cari();
            break;
        case "5":
            console.log("Terima kasih!");
            process.exit();
        default:
            console.log("Pilihan tidak valid!");
    }
    
    prompt("Tekan Enter...");
}