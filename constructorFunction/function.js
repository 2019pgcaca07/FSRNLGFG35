//Constructor function,using this function or classes we can create objects,you can say constructor fun and classes are
//blueprint for objects.
//Every constructor func and classes have its own prototype,any property which is common to every object you can create it
//here so it save the memory.
function ConstFunction(name,age){
    this.name=name;
    this.age=age;
}
//here in the prototype of cons function creating an function sayHi
ConstFunction.prototype.sayHi=function sayHi(){
    console.log(`Hii ${this.name}`);
}

let person1 = new ConstFunction('ranjeet',25);
console.log(person1);
person1.sayHi();
console.log(Object.prototype);
console.log(ConstFunction.prototype);
console.log(person1.__proto__ === ConstFunction.prototype);
person1.__proto__.sayHello=function sayHello(){
    console.log("hello");
}
person1.sayHello();
console.log(person1);
let person2 = new ConstFunction("raj",23);
console.log(person2);

