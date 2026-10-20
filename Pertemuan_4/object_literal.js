const studentdata = [{
    name : "Andi",
    java_programming_score : 80,
    python_programming_score : 100,
    javascript_programming_score : 80,
},
{
    name : "Rudi",
    java_programming_score : 50,
    python_programming_score : 90,
    javascript_programming_score : 70,
},
{
    name : "Dio",
    java_programming_score : 70,
    python_programming_score : 95,
    javascript_programming_score : 60,
}
]
for (let i in studentdata){
    for (let j in studentdata[i]){
        console.log(j + ": " + studentdata[i][j])
    }
}