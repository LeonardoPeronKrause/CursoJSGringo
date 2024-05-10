// time dolphins e koalas -> jogam 3 vezes entre si e quem tiver mais potos na média ganha

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy !');
} else if (scoreDolphins < scoreKoalas) {
    console.log('Koalas win the trophy!');
} else if (scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy!');
} else {
    console.log('Erro!');
}
