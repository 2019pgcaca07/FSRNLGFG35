
var named = "ranjeet";
console.log(named);

sayHii();

function sayHii(){
    var x=9;
    console.log("hii" + x);
}
//everything in js happens in execution context .
//Execution context has two phase -> 1.creational phase/memory cretaion 2.executional phase
//1.creational phase:when js program starts running ,js engine maintains a call stack/program stack/exection context stack
//an global exection context is pushed into call stack.
//Global execution context:And as we know that execution context have two phases
//a.creational phase of GEC:in this first all the variables and function get registerd in memory,variables are registered with
//undefined value,and functions are full copied to that memory.
//b.executional phase of GEC:now again code starts from line 1 and this time executing that means variables assigned with t
//their actual value and executing the program but if any  function is invoked /called then their is a FUNCTIOANL Execution
//context is by js engine and pushed it into call statck.
//Again FEC have also two phases:a.cretaional phase b.executional phase
//here also happening same first registered all local varibales with undefined value and functions  of function
//into memory then in executional phase it will executed after FEC is completed its execution it will remove from the call stack
//and when GEC gets completed it will removed from call stack. 