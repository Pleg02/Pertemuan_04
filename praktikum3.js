let a = 20;
let b = 6;

const luaspersegi = (a, b) =>{
    return a * b;
};
const luassegitiga = (a, b) => {
    return 0.5 * a * b;
};
const luaslingkaran =(a)=> {
    return 3.14 * a * a;
};

console.log("Hasil Penjumlahan: ", a + b);
console.log("Hasil Pengurangan: ", a - b);
console.log("Hasil Perkalian: ", a * b);
console.log("Hasil Pembagian: ", a / b);
console.log("Hasil Sisa Bagi: ", a % b);
console.log("Hasil Luas Persegi: ", luaspersegi(a, b));
console.log("Hasil Luas Segitiga: ", luassegitiga(a, b));
console.log("Hasil Luas Lingkaran: ", luaslingkaran(a));