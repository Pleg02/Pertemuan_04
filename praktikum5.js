const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan bilangan: ",function(bilangan) {
    bilangan = parseInt(bilangan);
    if (bilangan % 2 == 0) {
        console.log("Bilangan " + bilangan + " adalah bilangan genap.");
    }
    else {
        console.log("Bilangan " + bilangan + " adalah bilangan ganjil.");
    }
    rl.close();
});