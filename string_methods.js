let email = "banpna.flimzy_grub4290@gmail.com";
let extraString="Jely with an L";
let extraStringwithSpaces="              Jely         with an L      ";
let nums = 154652368;

//charAt()	Returns the character at a specified index (position)
let charAt = email.charAt(3);
console.log(charAt);
//p

//concat() 	Returns two or more joined strings
let concat = email.concat(extraString);
console.log(concat);
//banpna.flimzy_grub4290@gmail.comJely with an L

//endsWith()	Returns if a string ends with a specified value
let endsWith = email.endsWith(".com");
console.log(endsWith);
//true

//includes()	Returns if a string contains a specified value (value, start at)
let includes = email.includes("pna", 2);
console.log('("pna", 2)' + includes);
//("pna", 2)true
console.log('("pna", 5)' + includes);
//("pna", 5)true

//indexOf()	Returns the index (position) of the first occurrence of a value in a string
let indexOf = email.indexOf(".");
console.log(indexOf);
//6

//lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
let lastIndexOf = email.lastIndexOf(".");
console.log(lastIndexOf);
//28

//length	Returns the length of a string
let length= email.length;
console.log(length);
//32

//match()	Searches a string for a value, or a regular expression, and returns the matches
let match = email.match("lim");
console.log(match);
// [
//     'lim',
//     index: 8,
//     input: 'banpna.flimzy_grub4290@gmail.com',
//     groups: undefined
//   ]

//repeat()	Returns a new string with a number of copies of a string
let repeat = email.repeat(3);
console.log(repeat);
//banpna.flimzy_grub4290@gmail.combanpna.flimzy_grub4290@gmail.combanpna.flimzy_grub4290@gmail.com

//replace()	Searches a string for a value, or a regular expression, and returns a string where the values are replaced
let replace = email.replace("grub", "NNN-nnn-NNN");
console.log(replace);
//banpna.flimzy_NNN-nnn-NNN4290@gmail.com

//search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
let search = email.search("mzy");
console.log(search);
//10

//slice()	Extracts a part of a string and returns a new string
let slice = email.slice(0,5);
console.log(slice);
//banpn

    //A negative number selects from the end of the string.
    let sliceNeg = email.slice(0,-5);
    console.log(sliceNeg);
    //banpna.flimzy_grub4290@gmai

//split()	Splits a string into an array of substrings
let split = email.split("@");
console.log(split[0]);
//banpna.flimzy_grub4290

    //with limit parameter   Items after the limit are excluded.
    let splitLimit = extraString.split("", 7);
    console.log(splitLimit);
    /*
    [
    'J', 'e', 'l',
    'y', ' ', 'w',
    'i'
    ]
    */
   
//startsWith()	Checks whether a string begins with specified characters
//starting at position 0
let startsWith = email.startsWith("gmail");
console.log(startsWith);
//false
    
    //starting at position 22
    let startsWithPosition = email.startsWith("gmail", 23);
    console.log(startsWithPosition);
    //true

//substr()	Extracts a number of characters from a string, from a start index (position)
let substr = email.substr(5);
console.log(substr);
//a.flimzy_grub4290@gmail.com

    //starting at index 1 and 4 more characters, (length)
    let substrPosition = email.substr(1,4);
    console.log(substrPosition);

    //using engative start position
    let substrPositionNeg = email.substr(-4,4);
    console.log("substrPositionNeg: " + substrPositionNeg);
    //.com    because it started from the end, and returned the 4 characters.

//substring()	Extracts characters from a string, between two specified indices (positions)
//start at index 1, and return upto (excluding) index 4)
let substring = email.substring(1,4);
console.log(substring);
//anp

//toUpperCase()	Returns a string converted to uppercase letters
let toUpperCase = email.toUpperCase();
console.log(toUpperCase);
//BANPNA.FLIMZY_GRUB4290@GMAIL.COM

//toLowerCase()	Returns a string converted to lowercase letters
let toLowerCase = email.toLowerCase();
console.log(toLowerCase);
//banpna.flimzy_grub4290@gmail.com

//toString()	Returns a string or a string object as a string
let toString = nums.toString();
console.log(toString + 1);
//1546523681  it added a "1" to the end as opposed to addition 1 to make  154652369

//trim()	Returns a string with removed whitespaces from start and end ONLY
let trim = extraStringwithSpaces.trim();
console.log(trim);
//Jely         with an L




