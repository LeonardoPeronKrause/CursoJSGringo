'use strict';

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',

        // C) Consertar o bug;
        //value: Number(prompt('Degree celsius')),
        value: 10
    };

    // B) Encontrar o bug;
    console.log(measurement);

    //console.log(measurement.value);
    //console.warm(measurement.value);
    //console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin
};

// A) Identificar o bug;
console.log(measureKelvin());

// Using a debuger
const calcTempAmplitudeBug = function(t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = 0;
    let min = 0;
    
    for (let i = 0; i < temps.length; i++) {
        const currentTemperatures = temps[i];
        if (typeof currentTemperatures !== 'number') continue;
        
        if (currentTemperatures > max) max = currentTemperatures;
        if (currentTemperatures < min) min = currentTemperatures;
    }
    console.log(max, min);
    return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// A) IDENTIFY
console.log(amplitudeBug);
