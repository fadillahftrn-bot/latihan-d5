const prompt = require("prompt-sync")();

let produk = [
    {nama: "Acer", harga: 12000000},
    {nama: "HP", harga: 3500000},
    {nama: "Tablet", harga: 500000},
    {nama: "Smartwatch", harga: 1500000}
];

// 1. Data Produk
console.log("\nDaftar Produk Beserta Harganya:");
produk.forEach(prd => {
    console.log(`${prd.nama} - Harga: Rp ${prd.harga.toLocaleString()}`);
});

// 2. Array baru produk dengan status penjualan
let daftarProduk = produk.map(prd => {
    let status = prd.harga >= 1000000 ? 'Terjual' : 'Tidak Terjual';
    return {
        nama: prd.nama,
        harga: prd.harga,
        status: status
    };
});

console.log("\nDaftar Produk dengan Status:");
daftarProduk.forEach(prd => {
    console.log(`${prd.nama} - Harga: Rp ${prd.harga.toLocaleString()} - Status: ${prd.status}`);
});

// 3. Urutan berdasarkan harga tertinggi
let urutHarga = [...produk].sort((a, b) => b.harga - a.harga);
console.log("\nUrutan Berdasarkan Harga Tertinggi (Tertinggi -> Terendah):");
urutHarga.forEach(prd => console.log(`${prd.nama} - Rp ${prd.harga.toLocaleString()}`));

// 4. Cari produk berdasarkan nama (dengan mode loop)
let lanjutCari = true;

while (lanjutCari) {
    console.log("\n--- Mode Pencarian Produk ---");
    let cariNama = prompt("Masukkan Nama Produk yang dicari: ");
    let hasilCari = produk.find(prd => prd.nama.toLowerCase() === cariNama.toLowerCase());

    if (hasilCari) {
        let statusPrd = hasilCari.harga >= 1000000 ? 'Terjual' : 'Tidak Terjual';
        console.log(`\nDitemukan: ${hasilCari.nama} dengan harga Rp ${hasilCari.harga.toLocaleString()} - Status: ${statusPrd}`);
    } else {
        console.log("\nProduk tidak ditemukan.");
    }

    // Tanya apakah ingin mencari lagi
    let pilihan = prompt("\nApakah ingin mencari produk lain? (y/n): ").toLowerCase();
    
    if (pilihan !== 'y' && pilihan !== 'yes') {
        lanjutCari = false;
        console.log("\nTerima kasih! Program selesai.");
    }
}