let produk = {
    nama : "Mouse Wireless",
    harga : 150000,
    stok : 3,
    diskon : 0.1,
    //menampilkan data produk
    tampilkanDataProduk : function(){
        console.log("Nama Produk: " + this.nama);
        console.log("Harga: " + this.harga);
        console.log("Stok: " + this.stok);
    },

    //harga setelah diskon
    hargasetelahdiskon : function(){
        let hargaSetelahDiskon = this.harga - (this.harga * this.diskon);
        return hargaSetelahDiskon;
    },
    //menghitung stok setelah pembelian
    beliproduk : function(jumlah){
        if (this.stok >= jumlah ){
            this.stok -= jumlah;
            console.log (`Pembelian berhasil! Anda membeli ${jumlah} ${this.nama}.`);

            if (this.stok === 0 ){
                console.log ("Stok produk kini habis!")
            };
        }
        else {
            console.log (`Stok produk tidak mencukupi. Stok saat ini: ${this.stok}`);
        }
    },
};
//Simulasi Program
produk.tampilkanDataProduk();
console.log("================================")
//Menampilkan harga setelah diskon
console.log("Harga setelah diskon: " + produk.hargasetelahdiskon());

//Melakukan pembelian produk
produk.beliproduk(1);
produk.beliproduk(2);
produk.beliproduk(1);