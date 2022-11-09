
//*-----------------------------------Factory Function------------------------------------------
/*
function Staff(name, subject, grade){
    this.name = name;
    this.subject = subject;
    this.grade = grade;
    // staff.push(this);
    this.inClass = function(){
        return `${this.name} is in class.`;
    };
}

Staff.prototype.login = function(){
    //~ r̶e̶t̶u̶r̶n̶ `̶{̶t̶h̶i̶s̶.̶n̶a̶m̶e̶}̶,̶ l̶o̶g̶g̶e̶d̶ i̶n̶`̶;̶
    console.log(`${this.name},logged in`);
    return this;
};

Staff.prototype.logout = function(){
    //~̶r̶e̶t̶u̶r̶n̶ (̶`̶$̶{̶t̶h̶i̶s̶.̶n̶a̶m̶e̶}̶ h̶a̶s̶ l̶o̶g̶g̶e̶d̶ o̶u̶t̶`̶)̶;̶
    console.log(`${this.name} has logged out`);
    return this;
};

function gradeManager(name, subject, grade, sectionColor){
    Staff.call(this, name, subject, grade);
    this.sectionColor = sectionColor;    
}


// let staff = [];


let staff1 = new Staff("Topher", "English", 5);
let staff2 = new Staff('Penny', "Math", 5);
let staff3 = new gradeManager("Lily", "French", 5, "Yellow-Orange");

console.log(staff1, staff1, staff3);
// console.log(staff);

gradeManager.prototype = Object.create(Staff.prototype);
gradeManager.prototype.deleteUser = function(){
    //delete user
    return "user deleted";
};
console.log(staff3.deleteUser);

*/

//&-----------------------------------Class------------------------------------------
/*
class Person {
    constructor(name, subject, grade){
    this.name = name;
    this.subject, grade = subject, grade;
};
    swim = function() {
        return `Swimming is fun for ${this.name}!`;
    };
};

Person.prototype.dive = function(){
    // return `${this.name} is a professional diver, are they not?`;
    console.log( `${this.name} is a professional diver, are they not?`);
    return this;
}

Person.prototype.fly = function(){
    // return `flying is fun for ${this.name}`;
    console.log( `flying is fun for ${this.name}`);
    return this;
}

class Admin extends Person {
    constructor(name, subject, grade){
    super(name, subject, grade);
    }
    wave(){
        console.log(`${this.name}, is waving to you`);
        return this;
    }
}

let person1 = new Person ("Jane", 92 );
console.log(person1);
person1.swim();
person1.dive().fly();

let person2 = new Admin('Tarzan', 101);
console.log(person2);
person2.swim();
person2.dive().fly();
person2.wave();
*/

function User(name){
    this.name = name;
};

User.prototype.sayHello = function(){
    console.log(`${this.name} Hello!`);
}



let user1 = new User ("ben");
console.log(user1);
user1.sayHello();