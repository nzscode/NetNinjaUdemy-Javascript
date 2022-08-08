const firstName = "Lila";
const lastName = "Blob";
const followers = 15;

//concatenation way
let concatWay = 'My friend ' + firstName + " " + lastName + ' has ' + followers + ' followers!';
console.log('Using Concatenation: ' + concatWay);
// Using Concatenation: My friend Lila Blob has 15 followers!

//template string way
let templateWay = `My friend ${firstName} ${lastName} has ${followers} followers!`;
console.log('Using Template String : ' + templateWay);
//Using Template String : My friend Lila Blob has 15 followers!

//HTML template
let html = `
<h2> My friend's name is ${firstName} ${lastName}.</h2>
<p> She has ${followers} followers!</p>
`;
console.log('AN HTML template string : ' + html);
// AN HTML template string : 
// <h2> My friend's name is Lila Blob.</h2>
// <p> She has 15 followers!</p>