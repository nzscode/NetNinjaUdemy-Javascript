/*const getTodos1 = (callback) => {
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
// console.log(request, request.readyState);

if(request.readyState === 4 && request.status === 200){
    const data = JSON.parse(request.responseText);
    callback(undefined, data);
}else if(request.readyState === 4){
    callback('could not fetch data', undefined);
}
});
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.open('GET', 'todos.json')
request.send();
};

console.log(1);
console.log(2);

getTodos1((err, data) => {
console.log('callback fired');
if(err){
    console.log(err);
} else{
    console.log(data);
}
});

console.log(3);
console.log(4);*/

// ----------------------------------------------------------------------------------
//Callback HELL
/*//GEtting data from each json data file, then waiting for it to be displayed in the browser, before we get the data for the next one.
// so as the first file is being shown in the browser, we want to be getting the data from the next json file.

const getTodos2 = (resource, callback) => {
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
// console.log(request, request.readyState);

if(request.readyState === 4 && request.status === 200){
    const data = JSON.parse(request.responseText);
    callback(undefined, data);
}else if(request.readyState === 4){
    callback('could not fetch data', undefined);
}
});
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.open('GET', resource)
request.send();
};

console.log(1);
console.log(2);

getTodos2('Todos/English_Grade8.json',( err, data) => {
console.log(data);
    getTodos2('Todos/French_Grade8.json', (err, data) => {
    console.log(data);
        getTodos2('Todos/Math_Grade8.json', (err, data) => {
        console.log(data);
        });
    });
});

console.log(3);
console.log(4);*/

// ----------------------------------------------------------------------------------
//Using promises
//GEtting data from each json data file, then waiting for it to be displayed in the browser, before we get the data for the next one.
// so as the first file is being shown in the browser, we want to be getting the data from the next json file.

/*const getTodos = (resource, callback) => {

    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);

        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            resolve(data);
        }else if(request.readyState === 4){
            reject('error getting resource');
        }
        });
        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.open('GET', resource)
        request.send();
        });
    
};

getTodos('Todos/English_Grade8.json').then( data =>{
    console.log("promise resolved", data);
}).catch(err => {
    console.log("promise rejected", err);
});*/

//promise example
/*const getSomething = () => {
    return new Promise((resolve, reject)=> {
        //fetch some data
        //if data is success then...
        // resolve('some data');

        //if there is an error...
        reject('some error');
    });
};

getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});*/

// ----------------------------------------------------------------------------------
//Chaining promises together 

/*const getTodos = (resource, callback) => {

    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);

        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            resolve(data);
        }else if(request.readyState === 4){
            reject('error getting resource');
        }
        });
        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.open('GET', resource)
        request.send();
        });
    
};

getTodos('Todos/English_Grade8.json').then( data =>{
    console.log("promise resolved", data);
    return getTodos('Todos/French_Grade8.json');
}).then((data) => {
    console.log('promise 2 resolved: ', data)
    return getTodos('Todos/Math_Grade8.json');
}).then((data) => {
    console.log('promise 3 resolved: ', data);
}).catch(err => {
    console.log("promise rejected", err);
});
*/
//--------------------------------------------------------------------------------------------------------------
/*Fetch API*/

//Calling the Fetch Function
//promise is only rejected if network error
//does not show the data.
/*fetch('Todos/French_Grade8.json').then((response)=>{
    console.log('resolved', response);
}).catch((err)=>{
    console.log('rejected', err);
});


//In order to get the data from the json
fetch('Todos/French_Grade8.json').then((response)=>{
    console.log('resolved', response);
    return response.json();
}).then ((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log('rejected', err);
});*/

//Async & await
//Allows chaining of promises together.
/*const getTodos = async () => {
    const responseEnglish =  await fetch('Todos/English_Grade8.json'); 
    const data = await responseEnglish.json();

    return data;
};

console.log(1);
console.log(2);
getTodos() 
    .then(data=>console.log('resloved', data));
console.log(3);
console.log(4);
*/

//Throwing & Catching Errors
const getTodos = async () => {
    const response =  await fetch('Todo s/English_Grade8.json'); 
    if (response.status !== 200){
        throw new Error('No good, error');
    }
    const data = await response.json();

    return data;
};

getTodos() 
    .then(data=>console.log('resloved: ', data))
    .catch(err => console.log('error', err.message));
    
