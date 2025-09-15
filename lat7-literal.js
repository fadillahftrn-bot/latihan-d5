//Object Literal
let mhs1= {
    nama : 'ade',
    energi : 10,
    makan : function(porsi){
        this.energi = this.energi+porsi;
        console.log('Hallo $(nama), Selamat Makan! ');
    }
}
let mhs2 = {
    nama : 'asep',
    energi : 20,
    makan : function(porsi){
        this.energi = this.energi+porsi;
        console.log('Hallo $(nama), Selamat Makan!');
    }
}
console.log('SEBELUM MAKAN');
console.log(`${mhs1.nama} memiliki energi: ${mhs1.energi}`);
console.log(`${mhs2.nama} memiliki energi: ${mhs2.energi}`);
console.log("\n=== SETELAH MAKAN ===");
console.log(`${mhs1.nama} memiliki energi: ${mhs1.energi}`);
console.log(`${mhs2.nama} memiliki energi: ${mhs2.energi}`);
