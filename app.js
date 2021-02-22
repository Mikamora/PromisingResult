// slowMath.add(6,2)
// .then((number) => {
//     console.log(number);
//     return slowMath.multiply(number, 2);
// }).then((num) => {
//     console.log(num);
//     return slowMath.divide(num, 4);
// }).then((num) => {
//     console.log(num);
//     return slowMath.subtract(num, 3);
// }).then((num) => {
//     console.log(num);
//     return slowMath.add(num, 98);
// }).then((num) => {
//     console.log(num);
//     return slowMath.remainder(num, 2);
// }).then((num) => {
//     console.log(num);
//     return slowMath.multiply(num, 50);
// }).then((num) => {
//     console.log(num);
//     return slowMath.remainder(num, 40);
// }).then((num) => {
//     console.log(num);
//     return slowMath.add(num, 32);
// }).then((num) => {
//     console.log(`the final result is: ${num}`);
// }).catch((err) => {
//     console.log(err);
// });






// slowMath.add(1, 1)
// .then((number) => {
//     console.log(number);
//     return slowMath.multiply(number, 2);
// }).then((num) => {
//     console.log(num);
//     return slowMath.divide(num, 4);
// }).then((num) => {
//     console.log(num);
//     return slowMath.subtract(num, 3);
// }).then((num) => {
//     console.log(num);
//     return slowMath.add(num, 98); //error is caught because it has a condition where it cant add negative numbers
// }).then((num) => {
//     console.log(num);
//     return slowMath.remainder(num, 2);
// }).then((num) => {
//     console.log(num);
//     return slowMath.multiply(num, 50);
// }).then((num) => {
//     console.log(num);
//     return slowMath.remainder(num, 40);
// }).then((num) => {
//     console.log(num);
//     return slowMath.add(num, 32);
// }).then((num) => {
//     console.log(`the final result is: ${num}`);
// }).catch((err) => {
//     console.log(err);
// });



let doMath = async () => {
    try {
        let num = await slowMath.add(6, 2);
        console.log(num);
        num = await slowMath.multiply(num, 2);
        console.log(num);
        num = await slowMath.divide(num, 4);
        console.log(num);
        num = await slowMath.subtract(num, 3);
        console.log(num);
        num = await slowMath.add(num, 98);
        console.log(num);
        num = await slowMath.remainder(num, 2);
        console.log(num);
        num = await slowMath.multiply(num, 50);
        console.log(num);
        num = await slowMath.remainder(num, 40);
        console.log(num);
        num = await slowMath.add(num, 32);
        console.log(`The final result is ${num}!`);
    } catch (e) {
        console.log(e);
    }
}
doMath();