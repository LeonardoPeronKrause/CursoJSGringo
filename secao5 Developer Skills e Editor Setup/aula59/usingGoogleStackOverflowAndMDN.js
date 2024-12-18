'use strict';

// PROBLEM 1:
// Ww work for a company building a smart home thermomether. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem

//  - What is temp amplitude? answer: diference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breking up into sub-problems

//  - How to ignore errors?
// - Find max values in temp array
// - Find min values in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function(temps) {

    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const currentTemperatures = temps[i];
        if (typeof currentTemperatures !== 'number') continue;
        
        if (currentTemperatures > max) max = currentTemperatures;
        if (currentTemperatures < min) min = currentTemperatures;
    }
    console.log(max, min);
    return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO!  Just merge two arrays

// 2) Breking up into sub-problems
// Merge(Mesclar) 2 arrays 

const calcTempAmplitudeNew = function(t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];
    
    for (let i = 0; i < temps.length; i++) {
        const currentTemperatures = temps[i];
        if (typeof currentTemperatures !== 'number') continue;
        
        if (currentTemperatures > max) max = currentTemperatures;
        if (currentTemperatures < min) min = currentTemperatures;
    }
    console.log(max, min);
    return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
