// concat() Joins arrays and returns an array with the joined arrays
let concatArray = ["Tom", "Phil"];
let concatArray2 = ["Mark", "Jim"];
let concat = concatArray.concat(concatArray2);
console.log("concat =>");
console.log(concat);
/*concat =>
[ 'Tom', 'Phil', 'Mark', 'Jim' ]*/
 
// copyWithin() Copies array elements within the array, to and from specified positions
//(where I want to copy to, staring index of what I am going to copy, where to stop copying from)
let copyWithinArray = ["Harry", "Barry", "Jill", "Meg"];
let copyWithin = copyWithinArray.copyWithin(0,3,5);
console.log("copyWithin() =>");
console.log(copyWithin);
/* [ 'Meg', 'Barry', 'Jill', 'Meg' ]
entries() =>*/
 
// entries()    Returns a key/value pair Array Iteration Object
let cat = {
    name: "Kitty",
    age: 5,
    whiskers: true,
    height: [7, "inches"],
    food: {yellow: "banana",
            meat: ["chicken", "fish"]
            }
    };
let entries = Object.entries(cat);
console.log("entries() =>");
console.log(entries);
/*entries() =>
[
  [ 'name', 'Kitty' ],
  [ 'age', 5 ],
  [ 'whiskers', true ],
  [ 'height', [ 7, 'inches' ] ],
  [ 'food', { yellow: 'banana', meat: [Array] } ]
] */
 
// every()  Checks if every element in an array pass a test
let everyNumberArray = [3,2,9.6,5286,0.0548,1];
let every = everyNumberArray.every(checkNum);
function checkNum(everyNumberArray){
    console.log("every() =>");
    console.log(everyNumberArray < 50);
}
/* find() =>
false
  because at least one of the numbers within the array failed the test.*/

 
// fill()   Fill the elements in an array with a static value
let fillArray = ["Josh", "Hannha", "Lisa", "Ralph"];
let fill = fillArray.fill("papadum");
console.log("fill() =>");
console.log(fill);
/*fill() =>
[ 'papadum', 'papadum', 'papadum', 'papadum' ] */
 
    //filling the word "papadum" from index 1 upto but excluding index 3
    let fillPositionArray = ["James", "Laurie", "Carline", "Locklear"];
    let fillPosition = fillPositionArray.fill("papadum", 1,3);
    console.log("fill() =>");
    console.log(fillPosition);
    /*fill() =>
[ 'James', 'papadum', 'papadum', 'Locklear' ] */
 
// filter() Creates a new array with every element in an array that pass a test
let filterNum = [1,2,35,98,15];
let filter = filterNum.filter(checkOverTwenty);
function checkOverTwenty(filterNum){
    console.log("filter() =>");
    console.log(filterNum>20);
};
/*filter() =>
false
filter() =>
false
filter() =>
true
filter() =>
true
filter() =>
false*/
 
 
// find()   Returns the value of the first element in an array that pass a test
let findNum = [25, 14, 3 , 0.5, 69 , 5];
let find = findNum.find(checkNum);
function checkNum(Num){
    console.log("find() =>");
    console.log(Num>18);
};
/*find() =>
true
find() =>
false
find() =>
false
find() =>
false
find() =>
true
find() =>
false*/

// findIndex()  Returns the index of the first element in an array that pass a test
let findIndexArrayNum = [2,12,81,7,32];
let findIndex = findIndexArrayNum.findIndex(checkyNum);
function checkyNum(nums){
    return nums > 18;
}
console.log("findIndex =>");
console.log(findIndex);
/* findIndex =>
2*/
 
//forEach() Calls a function for each array element  OPtional: index of Array, and Original Array
let forEachNumArray = [2, 67, 15];
forEachNumArray.forEach(loopingFunction);
function loopingFunction(numberFromArray, index, array){
    console.log("forEach =>");
    console.log(numberFromArray, index, array);
}
/*forEach =>
2 0 [ 2, 67, 15 ]
forEach =>
67 1 [ 2, 67, 15 ]
forEach =>
15 2 [ 2, 67, 15 ]*/
 
//from()    Creates an array from an object
let fromString = "Carrot";
let from = Array.from(fromString);
console.log("from() =>");
console.log(from);
/*from() =>
[ 'C', 'a', 'r', 'r', 'o', 't' ]*/
 
//includes()    Check if an array contains the specified element
let includesArray = ["Jonah", "Billy", "Savoia", "Xander"];
let includes = includesArray.includes("Savoia");
console.log("includes =>");
console.log(includes);
/*includes =>
true */

 
//indexOf() Search the array for an element and returns its position
let indexOfArray = ["Apple", "Peach", "Rambutan"];
let indexOf = indexOfArray.indexOf("Peach");
console.log("indexOf() =>");
console.log(indexOf);
/*indexOf() =>
1*/
 
        //Start at index 3:
        let indexOfArrayPosition = ["Coin", "Shilling", "Dubloon", "Penny", "Dollar"];
        let indexOfPosition = indexOfArrayPosition.indexOf("Penny", 1);
        console.log("indexOf() => (position)");
        console.log(indexOfPosition);
        /*indexOf() => (position)
            3*/
 
//isArray() Checks whether an object is an array
let anArray= [1,2,3];
let isArray = Array.isArray(anArray);
console.log("isArray() =>");
console.log(isArray);
/* isArray() =>
true*/
 
    //Check if another datatype is an array:
    let anotherArray = "potatoes rock!";
    let isItAnArray = Array.isArray(anotherArray);
    console.log("isArray() => ");
    console.log(isItAnArray);
    /* isArray() =>
    false*/
 
//join()    Joins all elements of an array into a string
let joinArray = ["Sand", "Is", "Course"];
let join = joinArray.join();
console.log("join() =>");
console.log(join);
/*join() =>
Sand,Is,Course*/
 
    //Using another seperator
    let joinArrayWithAnd = ["It", "Gets", "Every", "Where"];
    let joinArrayWithSeperator = joinArrayWithAnd.join(" ");
    console.log("join() => (using a space between the array elements when joining");
    console.log(joinArrayWithSeperator);
    /* join() => (using a space between the array elements when joining
    It Gets Every Where*/
 
//keys()    Returns a Array Iteration Object, containing the keys of the original array
let keyObject = {
    veg : "potato",
    num: 5,
    color: "yellow"
};
let keys = Object.keys(keyObject);
console.log("keys() =>");
console.log(keys);
/*keys() =>
[ 'veg', 'num', 'color' ] */
 
 
 
            // TO get the keys
            for (let property in keyObject){
                console.log(property);
            }
            /*veg
            num
            color */
 
            //TO get the values
            for (let property in keyObject){
                console.log(keyObject[property]);}
            /*potato
            5
            yellow*/
 
//lastIndexOf() Search the array for an element, starting at the end, and returns its position
let lastIndexOfArray = ["blue", "azure", "cerulean", "cobalt"];
let lastIndexOf = lastIndexOfArray.lastIndexOf("azure");
console.log("lastIndexOf() =>");
console.log(lastIndexOf);
/*lastIndexOf() =>
1 */
 
//length    Sets or returns the number of elements in an array
let lengthArray = [1,2,3];
let length = lengthArray.length;
console.log("length =>");
console.log(length);
/*length =>
3 */
 
//map() Creates a new array with the result of calling a function for each array element
let mapArray = ["eye", "nose", "mouth"];
let map = mapArray.map(addSfunction);
function addSfunction(mapArrayElement){
 return mapArrayElement + "s";
};
console.log("map() =>");
console.log(map);
/*map() =>
[ 'eyes', 'noses', 'mouths' ] */
 
//pop() Removes the last element of an array, and returns that element
let popArray = ["Kylo", "Ben", "Ren"];
let pop = popArray.pop();
console.log("pop() =>");
console.log(pop);
/*pop() =>
Ren */
 
//push()    Adds new elements to the end of an array, and returns the new length
let pushArray = ["Han", "Leia", "Luke"];
let push = pushArray.push("Chewbacca");
console.log("push() =>");
console.log(push);
/*push() =>
4 */
 
//reduce()  Reduce the values of an array to a single value (going left-to-right)
let reduceArray = [1,2,3,4];
let reduce = reduceArray.reduce((accumulator , currentValue)=>{
return accumulator + currentValue;
},0);
console.log("reduce() =>");
console.log(reduce);  
 
//reduceRight() Reduce the values of an array to a single value (going right-to-left)
let reduceRightArray = [4,5,6,7];
let reduceRight = reduceRightArray.reduce((accumulator , currentValue)=>{
    return accumulator + currentValue;
    },0);
    console.log("reduceRight() =>");
    console.log(reduceRight);  
/*reduceRight() =>
22 */
 
//reverse() Reverses the order of the elements in an array
let reverseArray = ["leaf", "twig", "branch", "seed"];
let reverse = reverseArray.reverse();
console.log("reverse() =>");
console.log(reverse);
/*reverse() =>
[ 'seed', 'branch', 'twig', 'leaf' ] */
 
//shift()   Removes the first element of an array, and returns that element
let shiftArray = ["pine", "Douglas Fir", "Cyprus"];
let shift = shiftArray.shift();
console.log("shift() =>");
console.log(shift);
/*shift() =>
pine */
 
//slice()   Selects a part of an array, and returns the new array
let sliceArray = ["Pacific", "Atlantic", "Indian", "Arctic", "Antarctic"];
let slice = sliceArray.slice(1,3);
console.log("slice(startIndex, excludedEndIndex) =>");
console.log(slice);
/*slice(startIndex, excludedEndIndex) =>
[ 'Atlantic', 'Indian' ] */
 
     //Select elements using negative values:
    let sliceNegativeArray = ["Ant", "Bee", "Caterpillar", "Dung Beetle", "Elephant Moth"];
    let sliceNegative = sliceNegativeArray.slice(-3,-1);
    console.log("slice() =>  (using negative values)");
    console.log(sliceNegative);
    /*slice() =>  (using negative values)
    [ 'Caterpillar', 'Dung Beetle' ] */
 
//some()    Checks if any of the elements in an array pass a test
let someArray = [32,19,5,67,0.235,8];
let some = someArray.some(checkSome);
 
function checkSome(arr){
return arr < 18;
};
 
console.log("some(function) =>");
console.log(some);
/*some(function) =>
true */

 
//sort()    Sorts the elements of an array
let sortArray = ["Juniper", "Blueberry", "Lingonberry", "Raspberry","Blackberry"];
let sort = sortArray.sort();
console.log("sort() =>");
console.log(sort);
/*sort() =>
[ 'Blackberry', 'Blueberry', 'Juniper', 'Lingonberry', 'Raspberry' ] */    
 
    /*When sorting Numbers, must include callback function, to specify order, if not    
    numbers will be ordered like [1, 11, 2, 278, 3]*/ 
    let sortNumberArray = [2,9,7.524,0.28,3684,88];
    /*[ 0.28, 2, 3684, 7.524, 88, 9 ]  TO correct this: include a function*/
    let sortNumber = sortNumberArray.sort(sortFunction);
 
    function sortFunction(a,b){
    return a-b;
    };
    console.log("sort() =>");
    console.log(sortNumber);
    /*sort() =>
    [ 0.28, 2, 7.524, 9, 88, 3684 ] */
 
//splice()  Adds/Removes elements from an array
let spliceArrayAdd = ["Mario", "Bowser", "Wario", "Toad"];
let spliceAdd = spliceArrayAdd.splice(1, 0, "Luigi", "Peach");
console.log("splice(insertIndex, numberOfItemsToBeRemoved, valueToInsert) =>");
console.log(spliceArrayAdd);
/* splice(insertIndex, numberOfItemsToBeRemoved, valueToInsert) =>
[ 'Mario', 'Luigi', 'Peach', 'Bowser', 'Wario', 'Toad' ] */
 
    //At position 2, remove 2 items:
    let spliceArrayRemove = ["Potato", "Onion", "Carrot", "Bell Pepper", "Radish"];
    let spliceRemove = spliceArrayRemove.splice(2,2);
    console.log("splice(startIndex, numberofItemsToBeRemoved) =>");
    console.log(spliceArrayRemove);
    /*splice(startIndex, numberofItemsToBeRemoved) =>
    [ 'Potato', 'Onion', 'Radish' ] */
 
//toString()    Converts an array to a string, and returns the result NOT NORMALLY USED IN CODE
let toStringArray = ["I", "Have", "The", "Higher", "Ground"];
let toString = toStringArray.toString();
console.log("toString() =>");
console.log(toString);
/*toString() =>
I,Have,The,Higher,Ground */
 
//unshift() Adds new elements to the beginning of an array, and returns the new length
let unshiftArray = ["Inuit", "Iroquis", "Metis", "Ojibwe"];
let unshift = unshiftArray.unshift("Mi'q-Ma'q", "Maori");
console.log("unshift(valuesToInsert) =>");
console.log(unshift);
/*unshift(valuesToInsert) =>
6 */
 
//valueOf() Returns the primitive value of an array
console.log("valueOf(anArray) =>");
console.log(unshiftArray);
/*valueOf(anArray) =>
[ "Mi'q-Ma'q", 'Maori', 'Inuit', 'Iroquis', 'Metis', 'Ojibwe' ] */
