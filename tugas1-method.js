const prompt = require("prompt-sync")();

// Array untuk menyimpan data siswa
let dataSiswa = [
    {
        id: 1,
        nama: "Ahmad Fadli",
        alamat: "Jl. Sudirman No. 123, Jakarta",
        nohp: "081234567890"
    },
    {
        id: 2,
        nama: "Siti Nurhaliza",
        alamat: "Jl. Gatot Subroto No. 456, Bandung",
        nohp: "082345678901"
    },
    {
        id: 3,
        nama: "Budi Santoso",
        alamat: "Jl. Merdeka No. 789, Surabaya",
        nohp: "083456789012"
    },
    {
        id: 4,
        nama: "Rina Kusuma",
        alamat: "Jl. Diponegoro No. 321, Yogyakarta",
        nohp: "084567890123"
    },
    {
        id: 5,
        nama: "Dedi Prasetyo",
        alamat: "Jl. Ahmad Yani No. 654, Medan",
        nohp: "085678901234"
    },
    {
        id: 6,
        nama: "Maya Sari",
        alamat: "Jl. Pahlawan No. 987, Semarang",
        nohp: "086789012345"
    },
    {
        id: 7,
        nama: "Riko Firmansyah",
        alamat: "Jl. Veteran No. 246, Malang",
        nohp: "087890123456"
    },
    {
        id: 8,
        nama: "Laila Maharani",
        alamat: "Jl. Pemuda No. 135, Palembang",
        nohp: "088901234567"
    },
    {
        id: 9,
        nama: "Andi Wijaya",
        alamat: "Jl. Kartini No. 468, Makassar",
        nohp: "089012345678"
    },
    {
        id: 10,
        nama: "Fitri Handayani",
        alamat: "Jl. Cut Nyak Dien No. 579, Padang",
        nohp: "081123456789"
    }
];

let idCounter = 11; // ID selanjutnya

// Fungsi untuk menampilkan menu utama
function tampilkanMenu() {
    console.log("\n" + "=".repeat(40));
    console.log("       SISTEM DATA SISWA");
    console.log("=".repeat(40));
    console.log("1. Tambah Data Siswa");
    console.log("2. Tampilkan Data Siswa");
    console.log("3. Hapus Data Siswa");
    console.log("4. Cari Data Siswa");
    console.log("5. Keluar");
    console.log("=".repeat(40));
}

// Fungsi untuk menambah data siswa
function tambahData() {
    console.log("\n--- TAMBAH DATA SISWA ---");
    
    let nama = prompt("Masukkan nama siswa: ");
    let alamat = prompt("Masukkan alamat: ");
    let nohp = prompt("Masukkan no HP: ");
    
    // Validasi input tidak boleh kosong
    if (!nama || !alamat || !nohp) {
        console.log("❌ Error: Semua field harus diisi!");
        return;
    }
    
    // Validasi no HP hanya angka
    if (!/^\d+$/.test(nohp)) {
        console.log("❌ Error: No HP hanya boleh berisi angka!");
        return;
    }
    
    let siswa = {
        id: idCounter++,
        nama: nama,
        alamat: alamat,
        nohp: nohp
    };
    
    dataSiswa.push(siswa);
    console.log("✅ Data siswa berhasil ditambahkan!");
    console.log(`📝 Siswa: ${nama} (ID: ${siswa.id})`);
}

// Fungsi untuk menampilkan semua data siswa
function tampilkanData() {
    console.log("\n--- DAFTAR DATA SISWA ---");
    
    if (dataSiswa.length === 0) {
        console.log("❌ Tidak ada data siswa!");
        return;
    }
    
    console.log("\n" + "-".repeat(80));
    console.log("| ID |        NAMA        |           ALAMAT           |     NO HP     |");
    console.log("-".repeat(80));
    
    dataSiswa.forEach(siswa => {
        console.log(`| ${siswa.id.toString().padEnd(2)} | ${siswa.nama.padEnd(18)} | ${siswa.alamat.padEnd(26)} | ${siswa.nohp.padEnd(13)} |`);
    });
    
    console.log("-".repeat(80));
    console.log(`Total siswa: ${dataSiswa.length} orang`);
}

// Fungsi untuk hapus data siswa
function hapusData() {
    console.log("\n--- HAPUS DATA SISWA ---");
    
    if (dataSiswa.length === 0) {
        console.log("❌ Tidak ada data siswa untuk dihapus!");
        return;
    }
    
    // Tampilkan daftar siswa terlebih dahulu
    console.log("\nDaftar Siswa:");
    dataSiswa.forEach((siswa, index) => {
        console.log(`${index + 1}. ${siswa.nama} (ID: ${siswa.id})`);
    });
    
    let pilihan = prompt("\nPilih nomor siswa yang akan dihapus (atau ketik 0 untuk batal): ");
    let index = parseInt(pilihan) - 1;
    
    if (pilihan === "0") {
        console.log("❌ Penghapusan dibatalkan!");
        return;
    }
    
    if (isNaN(index) || index < 0 || index >= dataSiswa.length) {
        console.log("❌ Error: Nomor tidak valid!");
        return;
    }
    
    let siswaYangDihapus = dataSiswa[index];
    let konfirmasi = prompt(`Yakin ingin menghapus data ${siswaYangDihapus.nama}? (y/n): `).toLowerCase();
    
    if (konfirmasi === 'y' || konfirmasi === 'yes') {
        dataSiswa.splice(index, 1);
        console.log(`✅ Data ${siswaYangDihapus.nama} berhasil dihapus!`);
    } else {
        console.log("❌ Penghapusan dibatalkan!");
    }
}

// Fungsi untuk mencari data siswa
function cariData() {
    console.log("\n--- CARI DATA SISWA ---");
    
    if (dataSiswa.length === 0) {
        console.log("❌ Tidak ada data siswa untuk dicari!");
        return;
    }
    
    console.log("Cari berdasarkan:");
    console.log("1. Nama");
    console.log("2. No HP");
    console.log("3. ID");
    
    let metodeCari = prompt("Pilih metode pencarian (1-3): ");
    let keyword = prompt("Masukkan kata kunci pencarian: ").toLowerCase();
    
    let hasilCari = [];
    
    switch (metodeCari) {
        case "1":
            hasilCari = dataSiswa.filter(siswa => 
                siswa.nama.toLowerCase().includes(keyword)
            );
            break;
        case "2":
            hasilCari = dataSiswa.filter(siswa => 
                siswa.nohp.includes(keyword)
            );
            break;
        case "3":
            hasilCari = dataSiswa.filter(siswa => 
                siswa.id.toString() === keyword
            );
            break;
        default:
            console.log("❌ Error: Pilihan tidak valid!");
            return;
    }
    
    if (hasilCari.length === 0) {
        console.log("❌ Data tidak ditemukan!");
        return;
    }
    
    console.log(`\n✅ Ditemukan ${hasilCari.length} data:`);
    console.log("\n" + "-".repeat(80));
    console.log("| ID |        NAMA        |           ALAMAT           |     NO HP     |");
    console.log("-".repeat(80));
    
    hasilCari.forEach(siswa => {
        console.log(`| ${siswa.id.toString().padEnd(2)} | ${siswa.nama.padEnd(18)} | ${siswa.alamat.padEnd(26)} | ${siswa.nohp.padEnd(13)} |`);
    });
    
    console.log("-".repeat(80));
}

// Fungsi utama program
function main() {
    console.log("🎓 Selamat datang di Sistem Manajemen Data Siswa!");
    
    while (true) {
        tampilkanMenu();
        let pilihan = prompt("Pilih menu (1-5): ");
        
        switch (pilihan) {
            case "1":
                tambahData();
                break;
            case "2":
                tampilkanData();
                break;
            case "3":
                hapusData();
                break;
            case "4":
                cariData();
                break;
            case "5":
                console.log("\n🎓 Terima kasih telah menggunakan Sistem Data Siswa!");
                console.log("👋 Sampai jumpa!");
                return;
            default:
                console.log("❌ Error: Pilihan tidak valid! Silakan pilih 1-5.");
                break;
        }
        
        // Pause sebelum menampilkan menu lagi
        prompt("\nTekan Enter untuk melanjutkan...");
    }
}

// Jalankan program utama
main();