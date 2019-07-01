// 'use strict'
console.log("Welcome to developer tools!!");

// 6 values considered false in JS NULL,Empty String,False,Nan,undefined,0

// ------------------------------------Clas /constructor til ES5-----------------------------
// function Person(name,age)
// {
//     this.name = name;
//     this.age = age;

//     // this.sayName = function()
//     // {
//     //     console.log(this.name);
//     // }
//     // this.sayAge = function()
//     // {
//     //     console.log(this.age);
//     // }
// }
// Person.prototype.sayName = function()
// {
//     console.log(this.name);
// }
// Person.prototype.sayAge = function()
// {
//     console.log(this.age);
// }


// --------------------------------- ES6----------------------------------------
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log(this.name);
    }
    sayAge() {
        console.log(this.age);
    }
}
var p1 = new Person("omkar", 22);
var p2 = new Person("new User", 45);

// console.log(p1.sayName()+p1.sayAge());
// console.log(p2.sayName()+p2.sayAge());
// console.log(p1.hasOwnProperty("sayName"));
// console.log(p2.hasOwnProperty("sayName"));

// console.log("extensible "+Object.isExtensible(p1));
// Object.preventExtensions(p1);
// console.log("extensible "+Object.isExtensible(p1));
// p1.newSkill = "sdcsdc";

// Object.seal(p1);
// console.log("sealed "+Object.isSealed(p1));
// delete p1.age;

Object.freeze(p1);
// console.log("frozen "+Object.isFrozen(p1));
// p1.teachSkill = "java,js"; //index.js:62 Uncaught TypeError: Cannot add property teachSkill, object is not extensible
// delete p1.age; // Uncaught TypeError: Cannot delete property 'age' of #<Person> at index.js:63
// p1.age=31; // Uncaught TypeError: Cannot assign to read only property 'age' of object '#<Person>'


var aadharPattern1 = new RegExp("\\d{4}-\\d{4}-\\d{4}");
var aadharPattern2 = /\d{4}-\d{4}-\d{4}/;

// console.log("First reg var "+aadharPattern1.test("1234-5678-2345"));
// console.log("Second reg var "+aadharPattern2.test("1234-5678-2345"));

var person1 = {
    name: "omkar"
};
var person2 = {
    name: "omkar",
    'home-addr': 'Pune'
};
var person3 = {
    name: "omkar",
    'home-addr': 'Pune',
    1: "one",
    100: "hundred"
};
console.log(person1.name);
console.log(person2['home-addr']);
console.log(person3["1"]);
console.log(person3[100]);