/*
const Ryu = {
    name: 'SeokHo',
    address: 'Seoul',
    phoneNumber: '010-1234-5678',
    Codinglevel: 1,
    coding: function (){
        console.log("코딩을 하고 있다.");
    },
    levelUp: function(){
        this.Codinglevel++;
    },
    watchingTV: function () {
        this.Codinglevel--;
    }
}

const doingCoding = {
    codingLVUp: function (){
        Ryu.levelUp();
    }
}

Ryu.coding();
doingCoding.codingLVUp();
doingCoding.codingLVUp();
doingCoding.codingLVUp();
doingCoding.codingLVUp();

console.log(Ryu)





let myArr = new Array(1,2,3);
let myArr2 = new Array(4,5,6);



function person(name, age) {
    this.name = name;
    this.age = age;
    this.codingLevel = 0;
    this.sayHello = function () {
        //${써보기}
        console.log(`Hello, I'm ${this.name} nice to meet you.`);
    }
    this.myCodingLevel = function () {
        console.log("My coding level is " + this.codingLevel + " now, I'll do more!");
    }
}

person.prototype.doCoding = function () {
    this.codingLevel++
}

const person1 = new person("Ryu", 33)

person1.doCoding()
person1.doCoding()

person1.sayHello()
person1.myCodingLevel()


*/


class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.codingLevel=0;
    }

    study() {
        console.log(`공부를 했습니다. 코딩레벨이 ${this.codingLevel + 1}입니다. 코딩실력이 올라갔습니다!!`)
        this.codingLevel++
    }
}

const person1 = new Person("Ryu", 33, "남자");

console.log(person1);

person1.study();
person1.study();
person1.study();
person1.study();
person1.study();

console.log(person1);