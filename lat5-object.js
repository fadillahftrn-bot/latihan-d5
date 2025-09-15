const prompt = require("prompt-sync")();

let mahasiswa = [
    {nama: "jaemin", nilai: 85},
    {nama: "jeno", nilai: 92},
    {nama: "haechan", nilai: 76},
    {nama: "jisung", nilai: 88}
];

// 1. Data mahasiswa 
console.log("\nDaftar Nilai Mahasiswa:");
mahasiswa.forEach(mhs => {
    console.log(`${mhs.nama} - Nilai: ${mhs.nilai}`);
});

// 2. Array baru mahasiswa dengan status kelulusan
let daftarNama = mahasiswa.map(mhs => {
    let status = mhs.nilai >= 70 ? 'Lulus' : 'Tidak Lulus';
    return {
        nama: mhs.nama,
        nilai: mhs.nilai,
        status: status
    };
});

console.log("\nDaftar Mahasiswa dengan Status:");
daftarNama.forEach(mhs => {
    console.log(`${mhs.nama} - Nilai: ${mhs.nilai} - Status: ${mhs.status}`);
});

// 3. Urutan berdasarkan nilai tertinggi
let urutNilai = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);
console.log("\nUrutan Berdasarkan Nilai Tertinggi (Tertinggi -> Terendah):");
urutNilai.forEach(mhs => console.log(`${mhs.nama} - ${mhs.nilai}`));

// 4. Cari mahasiswa berdasarkan nama (dengan mode loop)
let lanjutCari = true;

while(lanjutCari) {
    console.log("\n--- Mode Pencarian Mahasiswa ---");
    let cariNama = prompt("Masukkan Nama Mahasiswa yang dicari: ");
    let hasilCari = mahasiswa.find(mhs => mhs.nama.toLowerCase() === cariNama.toLowerCase());

    if (hasilCari) {
        let statusMhs = hasilCari.nilai >= 70 ? 'Lulus' : 'Tidak Lulus';
        console.log(`\nDitemukan: ${hasilCari.nama} dengan nilai ${hasilCari.nilai} Dinyatakan ${statusMhs}`);
    } else {
        console.log("\nMahasiswa tidak ditemukan.");
    }

    // Tanya apakah ingin mencari lagi
    let pilihan = prompt("\nApakah ingin mencari mahasiswa lain? (y/n): ").toLowerCase();
    
    if (pilihan !== 'y' && pilihan !== 'yes') {
        lanjutCari = false;
        console.log("\n Terima kasih! Program selesai.");
    }
}