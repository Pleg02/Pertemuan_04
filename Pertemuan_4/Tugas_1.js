let StudentScore = [
{
    name : 'Andi',
    score : 90
},
{
    name : 'Rudi',
    score : 80
},
{
    name : 'Dira',
    score : 100
}
];

// Mengurutkan mahasiswa dari nilai tertinggi ke terendah
for (let i = 0; i < StudentScore.length - 1; i++){
    for (let j = 0; j < StudentScore.length - 1 - i; j++){
        
        if (StudentScore[j].score < StudentScore[j+1].score){
            let sementara = StudentScore[j];
            StudentScore[j] = StudentScore[j + 1];
            StudentScore[j + 1] = sementara; 
        }
    }
}
for (let i = 0; i < StudentScore.length; i++) {
    console.log("Nama:",StudentScore[i].name,":", StudentScore[i].score);
}