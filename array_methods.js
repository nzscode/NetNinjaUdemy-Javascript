//pop()	Removes the last element of an array, and returns that element
let popArray = ["Kylo", "Ben", "Ren"];
let pop = popArray.pop();
console.log("pop() =>");
console.log(pop);
/*pop() =>
Ren */

//push()	Adds new elements to the end of an array, and returns the new length
let pushArray = ["Han", "Leia", "Luke"];
let push = pushArray.push("Chewbacca");
console.log("push() =>");
console.log(push);
/*push() =>
4 */

//reduce()	Reduce the values of an array to a single value (going left-to-right)
let reduceArray = [1,2,3,4];
let reduce = reduceArray.reduce((accumulator , currentValue)=>{
return accumulator + currentValue;
},0);
console.log("reduce() =>");
console.log(reduce);  