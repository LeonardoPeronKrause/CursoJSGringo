'use strict';

const calcAverage = (game1, game2, game3) => {
    const media = (game1 + game2 + game3) / 3;
    return media;
}

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
 
function checkWinner(avgDolphins, avgKoalas) {
    if (scoreDolphins >= 2 * scoreKoalas) {
        console.log(`Os Dolphins venceram a partida, e o resultado final foi de ${scoreDolphins} vs ${scoreKoalas} para os Dolphins.`);
    } else if (scoreKoalas >= 2 * scoreDolphins) {
        console.log(`Os Koalas venceram a partida, e o resultado final foi de ${scoreDolphins} vs ${scoreKoalas} para os Koalas.`);
    } else {
        console.log('Nenhuma equipe ganhou...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);