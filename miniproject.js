const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Nama mahasiswa: ", (nama) => {
    rl.question("Nilai Tugas: ", (tugas) => {
        rl.question("Nilai UTS: ", (uts) => {
            rl.question("Nilai UAS: ", (uas) => {

                tugas = parseFloat(tugas);
                uts = parseFloat(uts);
                uas = parseFloat(uas);

                let nilaiAkhir = (tugas * 30 / 100) +
                                 (uts * 30 / 100) +
                                 (uas * 40 / 100);

                console.log("\n=== HASIL NILAI ===");
                console.log("Nama Mahasiswa :", nama);
                console.log("Nilai Tugas    :", tugas);
                console.log("Nilai UTS       :", uts);
                console.log("Nilai UAS       :", uas);
                console.log("Nilai Akhir     :", nilaiAkhir);

                rl.close();
            });
        });
    });
});