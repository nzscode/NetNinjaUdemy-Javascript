let email = "banpna.flimzy_grub4290@gmail.com";
let extraString="Jely with an L";

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





