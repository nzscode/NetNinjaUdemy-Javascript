//abs(x)	Returns the absolute value of x
let absNumNeg = Math.abs(-7.25);
console.log("Math.abs(Negative Number) =>");
console.log(absNumNeg);
/*Math.abs(Negative Number) =>
7.25 */

    //When using a positive number
    let absNumPos = Math.abs(6.98);
    console.log("Math.abs(positive number) =>");
    console.log(absNumPos);
    /*Math.abs(positive number) =>
    6.98 */

    //When using a  null value   
    let absNumNull = Math.abs(null);
    console.log("Math.abs(null) =>");
    console.log(absNumNull);
    /*Math.abs(null) =>
    0 */

    //When using a  zero  
    let absNumZero = Math.abs(0);
    console.log("Math.abs(0) =>");
    console.log(absNumZero);
    /*Math.abs(0) =>
    0 */

    //When using a String
    let absNumString = Math.abs("Hello");
    console.log("Math.abs(string) =>");
    console.log(absNumString);
    /*Math.abs(string) =>
    NaN */
    
    //When using a  Calculation   
    let absNumCalc = Math.abs(2-6);
    console.log("Math.abs(calculation) =>");
    console.log(absNumCalc);
    /*Math.abs(calculation) =>
    4 */

//ceil(x)	Returns x, rounded upwards to the nearest integer
//When using a positive whole number
let mathCeilPos = Math.ceil(5);
console.log("Math.ceil(whole number) =>");
console.log(mathCeilPos);
/* Math.ceil(whole number) =>
5*/

    //When using a positive number under 1 under the half 
    let mathCeilUnderHalf = Math.ceil(0.40);
    console.log("Math.ceil(decimal between 0 and 0.5) =>");
    console.log(mathCeilUnderHalf);
    /*Math.ceil(decimal between 0 and 0.5) =>
    1 */

    //When using a positive number under 1 over the half
    let mathCeilOverHalf = Math.ceil(0.60);
    console.log("Math.ceil(decimal between 0.5 and 1) =>");
    console.log(mathCeilOverHalf);
    /*Math.ceil(decimal between 0.5 and 1) =>
    1 */

    //When using a positive number over the half
    let mathCeilPosUnderHalf = Math.ceil(5.1);
    console.log("Math.ceil(number over a whole but over .5) =>");
    console.log(mathCeilPosUnderHalf);
    /* Math.ceil(number over a whole but over .5) =>
    6*/

    //When using a positive  number under the half
    let mathCeilPosOverHalf = Math.ceil(5.8);
    console.log("Math.ceil(number over a whole but under .5) =>");
    console.log(mathCeilPosOverHalf);
    /*Math.ceil(number over a whole but under .5) =>
    6 */

    //When using a negative number under the half
    let mathCeilNegUnderHalf = Math.ceil(-5.1);
    console.log("Math.ceil(negative number over a whole but under .5) =>");
    console.log(mathCeilNegUnderHalf);
    /*Math.ceil(negative number over a whole but under .5) =>
    -5 */

    //When using a negative number over the half
    let mathCeilNegOverHalf = Math.ceil(-5.75);
    console.log("Math.ceil(negative number over a whole but over .5) =>");
    console.log(mathCeilNegOverHalf);
    /*Math.ceil(negative number over a whole but over .5) =>
    -5 */

//floor(x)	Returns x, rounded downwards to the nearest integer
//When using a positive whole number
let mathFloorPos = Math.floor(5);
console.log("Math.floor(whole number) =>");
console.log(mathFloorPos);
/* Math.floor(whole number) =>
5*/

    //When using a positive number under 1 under the half 
    let mathFloorUnderHalf = Math.floor(0.40);
    console.log("Math.floor(decimal between 0 and 0.5) =>");
    console.log(mathFloorUnderHalf);
    /*Math.floor(decimal between 0 and 0.5) =>
    0 */

    //When using a positive number under 1 over the half
    let mathFloorOverHalf = Math.floor(0.60);
    console.log("Math.floor(decimal between 0.5 and 1) =>");
    console.log(mathFloorOverHalf);
    /*Math.floor(decimal between 0.5 and 1) =>
    0 */

    //When using a positive number over the half
    let mathFloorPosUnderHalf = Math.floor(5.1);
    console.log("Math.floor(number over a whole but over .5) =>");
    console.log(mathFloorPosUnderHalf);
    /* Math.floor(number over a whole but over .5) =>
    5*/

    //When using a positive  number under the half
    let mathFloorPosOverHalf = Math.floor(5.8);
    console.log("Math.floor(number over a whole but under .5) =>");
    console.log(mathFloorPosOverHalf);
    /*Math.floor(number over a whole but under .5) =>
    5 */

    //When using a negative number under the half
    let mathFloorNegUnderHalf = Math.floor(-5.1);
    console.log("Math.floor(negative number over a whole but under .5) =>");
    console.log(mathFloorNegUnderHalf);
    /*Math.floor(negative number over a whole but under .5) =>
    -6*/

    //When using a negative number over the half
    let mathFloorNegOverHalf = Math.floor(-5.75);
    console.log("Math.floor(negative number over a whole but over .5) =>");
    console.log(mathFloorNegOverHalf);
    /*Math.floor(negative number over a whole but over .5) =>
    -6 */

//max(x1,x2,..)	Returns the number with the highest value
let maxBetweenNums = Math.max(5,8);
console.log("Math.max(positive nums) =>");
console.log(maxBetweenNums);
/*Math.max(positive nums) =>
8 */

//min(x1,x2,..)	Returns the number with the lowest value
let minBetweenNums = Math.min(5,8);
console.log("Math.min(negative nums) =>");
console.log(minBetweenNums);
/*Math.min(negative nums) =>
5*/

//PI	Returns PI (approx. 3.14)
let radius = 5;
let circumference = 2*Math.PI*radius;
console.log("circumference = 2*Math.PI*r =>");
console.log(circumference);
/*circumference = 2*Math.PI*r =>
31.41592653589793 */

//pow(x, y)	Returns the value of x to the power of y
let power = Math.pow(4,3);
console.log("Math.pow(x to the power of y) =>");
console.log(power);
/*Math.pow(x to the power of y) =>
64 */

//random()	Returns a random number between 0(inclusive) and 1(exclusive)
let random = Math.random();
console.log("Math.random() => (will return a number including 0, but excluding 1, between 0 and 1)");
console.log(random);
//0.1130927641183539

    //TO make it between 1 and 10 numbers(round and multiply by 10)
    let randomLimited = Math.round(Math.random()*10);
    console.log(randomLimited);
    /*2 */

    //TO make it between 1 and 100 numbers(round and multiply by 100)
    let randomLimitedHundred = Math.round(Math.random()*100);
    console.log(randomLimitedHundred);
    /*24 */

//round(x)	Rounds x to the nearest integer
let roundPos = Math.round(4.5);
console.log("Math.round() => rounding 4.5");
console.log(roundPos);
/*round() => rounding 4.5
5 */

    //round 4.51
    let roundPosOverHalf = Math.round(4.51);
    console.log("Math.round() => rounding 4.51");
    console.log(roundPosOverHalf);
    /* round() => rounding 4.51
    5*/

    //round 4.49
    let roundPosUnderHalf = Math.round(4.49);
    console.log("Math.round() => rounding 4.49");
    console.log(roundPosUnderHalf);
    /*round() => rounding 4.49
    4*/

    //round -4.5
    let roundNeg = Math.round(-4.5);
    console.log("Math.round() => rounding -4.5");
    console.log(roundNeg);
    /*round() => rounding -4.5
    -4 */

    //round -4.51
    let roundNegOverHalf = Math.round(-4.51);
    console.log("Math.round() => rounding -4.51");
    console.log(roundNegOverHalf);
    /* round() => rounding -4.51
    -5*/

    //round -4.49
    let roundNegUnderHalf = Math.round(-4.49);
    console.log("Math.round() => rounding -4.49");
    console.log(roundNegUnderHalf);
    /*round() => rounding -4.49
    -4 */

//sign(x)	Returns the sign of a number (checks whether it is positive, negative or zero)
//when the number is zero
let whatNumSign = Math.sign(0);
console.log("Math.sign() =>");
console.log(whatNumSign);
/*Math.sign() =>
0 */

    //when the number is positive
    let whatNumSignA= Math.sign(5);
    console.log("Math.sign() =>");
    console.log(whatNumSignA);
    /* Math.sign() =>
    1*/

    //when the number is negative
    let whatNumSignB= Math.sign(-7);
    console.log("Math.sign() =>");
    console.log(whatNumSignB);
    /*Math.sign() =>
    -1 */

//sqrt(x)	Returns the square root of a number
let sqrtNum = Math.sqrt(16);
console.log("Math.sqrt() =>");
console.log(sqrtNum);
/*Math.sqrt() =>
4 */

//trunc(x)	Returns the integer part of a number (x) removes decimals does not round number
let truncNum = Math.trunc(8.39);
console.log("Math.trunc() => removes decimals does not round number");
console.log(truncNum);
/*Math.trunc() => removes decimals does not round number
8 */

