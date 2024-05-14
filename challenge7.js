'use strict';

const mark = {
    fullName: 'Mark Miller',
    massa: 78,
    altura: 1.69,
    calcImc: function() {
        this.imc = this.massa / (this.altura * this.altura);
        return this.imc;
    }
};

const john = {
    fullName: 'John Smith',
    massa: 92,
    altura: 1.95,
    calcImc: function() {
        this.imc = this.massa / (this.altura * this.altura);
        return this.imc
    }
};

if (mark.calcImc() > john.calcImc()) {
    console.log(`O IMC  do ${mark.fullName} (${mark.calcImc()}) é maior que o do ${john.fullName} (${john.calcImc()})!`);
} else {
    console.log(`O IMC  do ${john.fullName} (${john.calcImc()}) é maior que o do ${mark.fullName} (${mark.calcImc()})!`);
}