let email = 'blah@gmail.com';
let lastIndexOf = email.lastIndexOf('h');
console.log("lastIndexOf 'h' :" + lastIndexOf);
//lastIndexOf 'h' :3

let slice = email.slice(0,5);
console.log('slice (0,5) : ' + slice + "\n slice = starting from 0 to the 5th index");
// slice (0,5) : blah@
//  slice = starting from 0 to the 5th index

let subStr = email.substring(0,5);
console.log("substring (0,5): " + subStr + "\n substring = starting from 0, plus the next 5 characters");
// substring (0,5): blah@
//  substring = starting from 0, plus the next 5 characters

let replace = email.replace('h', 'xz');
console.log("replace ('h', 'xz') :" + replace);
// replace ('h', 'xz') :blaxz@gmail.com

