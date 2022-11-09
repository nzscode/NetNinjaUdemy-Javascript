//STORE DATA IN LOCALSTORAGE
    // localStorage.setItem('keyName', 'value');
/*localStorage.setItem('userName', 'Ariel');
localStorage.setItem('userAge', '79');

//GET DATA FROM LOCALSTORAGE
    // let variable = localStorage.getItem('keyName');
    // console.log(variable);
let userName = localStorage.getItem('userName');
let userAge = localStorage.getItem('userAge');
console.log(userName, userAge);*/

//UPDATING DATA
//use the same setItem to set the key/values
/*localStorage.setItem('userName', 'Ursula');
userName = localStorage.getItem('userName');

//OR

localStorage.userAge = '40';
userAge = localStorage.getItem('userAge');

console.log(userName, userAge);*/

//DELETING FROM LOCALSTORAGE
    //removing a single item
/*localStorage.removeItem('userName');
userName = localStorage.getItem('userName');
console.log(userName);*/

//Removing all items from localStorage
/*localStorage.clear();*/

//STRINGIFYING & PARSING DATA
const todos = [
    {text: 'The Runner', author:"Priscilla Marathon"},
    {text: 'My Spy', author: "Oculus Incommunicado"},
    {text: 'Bread and Butter', author: "Yeaste Dohboawll"}
];

//1. TURNING OBJECTS INTO JSON STRING
let stringo = JSON.stringify(todos);

//2. STORING THE JSON STRING IN LOCAL STORAGE
localStorage.setItem('todos', stringo);

//OR

localStorage.setItem('todoos', JSON.stringify(todos));

//3.RETIREIVING THE DATA AND CONVERTING IT BACK INTO AN ARRAY SO IT CAN BE USED
const stored = localStorage.getItem('todos');
const parsedJSONStored = JSON.parse(stored);
console.log(parsedJSONStored[0]);
console.log(parsedJSONStored[0].text);
console.log(parsedJSONStored[0].author);


//CHeck Weather App ********>