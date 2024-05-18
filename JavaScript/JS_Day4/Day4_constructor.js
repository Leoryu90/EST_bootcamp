function NewFactory(name, age){
    this.name = name;
    this.age = age;
    this.sayYourName = function(){
        console.log(`제 이름은 ${this.name}입니다. 반갑습니다..`);
    }
}

let robot1 = new NewFactory('우루루까꿍', 13);

console.log(robot1);