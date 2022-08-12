//charAt()	Returns the character at a specified index (position)
let charAtString = "felina";
let charAt = charAtString.charAt(3);
console.log("charAt() =>")
console.log(charAt);
/* charAt() =>  
i*/


//concat() 	Returns two or more joined strings
let concatString = "Anakin";
let concatSecondString = "Skywalker";
let concat = concatString.concat(concatSecondString);
console.log("concat() =>");
console.log(concat);
/*concat() =>
AnakinSkywalker */

//endsWith()	Returns if a string ends with a specified value
let endsWithString = "Harry is a wizard";
let endsWith = endsWithString.endsWith("ard");
console.log("endsWith(expectedValue) =>");
console.log(endsWith);
/*endsWith(expectedValue) =>
true */

//includes()	Returns if a string contains a specified value (value, start at)
let includesString = "I have the higher ground";
let includes = includesString.includes("the", 2);
console.log("includes(valueToLookFor, startIndex) =>");
console.log(includes);
/*includes(valueToLookFor, startIndex) =>
true */


//indexOf()	Returns the index (position) of the first occurrence of a value in a string
let indexOfString = "Bilbo Baggins of Bag End";
let indexOf = indexOfString.indexOf("of");
console.log("indexOf(stringToLookFor) =>");
console.log(indexOf);
/* indexOf(stringToLookFor) =>
14*/

//lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
let lastIndexOfString = "Polly Pocket has a Polly Pocket in her pocket";
let lastIndexOf = lastIndexOfString.lastIndexOf("Pocket");
console.log("lastIndexOf(valueToFind) =>");
console.log(lastIndexOf);
/*lastIndexOf(valueToFind) =>
25 */

//length	Returns the length of a string
let lengthString = "Geronimo! ya losers.";
let length= lengthString.length;
console.log("length =>");
console.log(length);
/*length =>
20 */

//match()	Searches a string for a value, or a regular expression, and returns the matches
let matchString = "In the jungle";
let match = matchString.match("jun");
console.log("match() =>");
console.log(match);
/*match() =>
[ 'jun', index: 7, input: 'In the jungle', groups: undefined ] */

//repeat()	Returns a new string with a number of copies of a string
let repeatString = "There is some good in this world";
let repeat = repeatString.repeat(3);
console.log("repeat(numberOfTimesToRepeat) =>");
console.log(repeat);
/*repeat(numberOfTimesToRepeat) =>
There is some good in this worldThere is some good in this worldThere is some good in this world*/

//replace()	Searches a string for a value, or a regular expression, and returns a string where the values are replaced
let replaceString = "I solemnly swear I am up to no good.";
let replace = replaceString.replace("swear", "promise me Harry!");
console.log("replace(valueToReplace, ReplaceWith) =>");
console.log(replace);
/*replace(valueToReplace, ReplaceWith) =>
I solemnly promise me Harry! I am up to no good. */

//search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
let searchString = "Try not. Do or do not. There is no try";
let search = searchString.search("try");
console.log("search(valueToSearch) =>");
console.log(search);
/* search(valueToSearch) =>
35*/

//slice()	Extracts a part of a string and returns a new string
let sliceString = "Congratulations. You are being rescued.";
let slice = sliceString.slice(5,9);
console.log("slice(startIndex, includeIndex) =>");
console.log(slice);
/* slice(startIndex, includeIndex) =>
atul*/

    //A negative number selects from the end of the string.
    let sliceNegativeString = "Be careful not to choke on your aspirations, director.";
    let sliceNeg = sliceNegativeString.slice(0,-5);
    console.log("slice(endOfString, lengthFromEndOfString) =>");
    console.log(sliceNeg);
    /*slice(endOfString, lengthFromEndOfString) =>
    Be careful not to choke on your aspirations, dire */

//split()	Splits a string into an array of substrings
let spiltString = "Fear leads to anger, anger leads to hate, hate leads to suffering";
let split = spiltString.split("hate");
console.log("split(valueToSplitAt) =>");
console.log(split[0]);
/*split(valueToSplitAt) =>
Fear leads to anger, anger leads to  */

    //with limit parameter   Items after the limit are excluded.
    let splitWithDelimiterString = "Laugh it up, fuzzball!";
    let splitLimit = splitWithDelimiterString.split(" ", 7);
    console.log("split(delimiter, numberOfStringToReturn) =>");
    console.log(splitLimit);
    /*split(delimiter, numberOfStringToReturn) =>
    [ 'Laugh', 'it', 'up,', 'fuzzball!' ] */
   
//startsWith()	Checks whether a string begins with specified characters
//starting at index 0
let startsWithString = "Let go of your hate.";
let startsWith = startsWithString.startsWith("go");
console.log("startsWith(valueToStartAt) =>");
console.log(startsWith);
/*startsWith(valueToStartAt) =>
false */
    
    //starting at index 22
    let startsWithPositionString = "Even the smallest person can change the course of the future.";
    let startsWithPosition = startsWithPositionString.startsWith("change", 23);
    console.log("startsWith(valueToStartAt, indexToStartAt) =>");
    console.log(startsWithPosition);
    /*startsWith(valueToStartAt, indexToStartAt) =>
    false */

//substr()	Extracts a number of characters from a string, from a start index (position)
let substrStringy = "The Quest stands upon the edge of a knife";
let substr = substrStringy.substr(5);
console.log("substr(startIndex) =>");
console.log(substr);
/*substr(startIndex) =>
uest stands upon the edge of a knife */

    //starting at index 1 and 4 more characters, (length)
    let substrPositionString = "Stray but a little, and it will fail, to the ruin of all";
    let substrPosition = substrPositionString.substr(1,4);
    console.log("substr(startIndex, lengthToReturn) =>");
    console.log(substrPosition);
    /*substr(startIndex, lengthToReturn) =>
    tray */

    //using negative start position
    let substrNegativeString = "Yet hope remains while the Company is true";
    let substrPositionNeg = substrNegativeString.substr(-4,4);
    console.log("(NegStartIndex, lengthToReturn) =>");
    console.log(substrPositionNeg);
    /* (NegStartIndex, lengthToReturn) =>
    true   because it started from the end, and returned the 4 characters.*/

//substring()	Extracts characters from a string, between two specified indices (positions)
//start at index 1, and return upto (excluding) index 4)
let substrString = "I am one with the Force and the Force is with me";
let substring = substrString.substring(3,6);
console.log("substring(startIndex, excludingEndIndex) =>");
console.log(substring);
/*substring(startIndex, excludingEndIndex) =>
m o */

//toUpperCase()	Returns a string converted to uppercase letters
let toUpperCaseString = "This is the way";
let toUpperCase = toUpperCaseString.toUpperCase();
console.log("toUpperCase() =>");
console.log(toUpperCase);
/*toUpperCase() =>
THIS IS THE WAY */

//toLowerCase()	Returns a string converted to lowercase letters
let toLowerCaseString = "I’m a big deal in the resistance";
let toLowerCase = toLowerCaseString.toLowerCase();
console.log("toLowerCase() =>");
console.log(toLowerCase);
/*toLowerCase() =>
i’m a big deal in the resistance */

//toString()	Returns a string or a string object as a string
let stringArray = ["Rebellions", "are", "built", "on", "hope"];
let toString = stringArray.toString();
console.log("toString() =>");
console.log(toString);
/*toString() =>
Rebellions,are,built,on,hope  */

//trim()	Returns a string with removed whitespaces from start and end ONLY
let trimString = "    Make ten men feel like a hundred    ";
let trim = trimString.trim();
console.log("trim() =>");
console.log(trim);
/*trim() =>
Make ten men feel like a hundred */