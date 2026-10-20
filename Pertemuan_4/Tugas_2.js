var motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

var result = {};

for (var i = 0; i < motoGP.length; i++) {

    var country = motoGP[i].winner.country;

    if (!result[country]) {
        result[country] = {
            winningCircuits: [],
            totalWin: 0
        };
    }

    result[country].winningCircuits.push({
        name: motoGP[i].winner.firstName + ' ' +
              motoGP[i].winner.lastName,

        winLocation: motoGP[i].circuit + ', ' +
                     motoGP[i].location
    });

    result[country].totalWin++;
}

console.log(JSON.stringify(result, null, 2));