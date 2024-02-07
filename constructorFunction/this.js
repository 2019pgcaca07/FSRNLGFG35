function sayHi(){
    console.log(this);
    function sayHello(){
        console.log(this);
    }
    sayHello();
}
sayHi();
