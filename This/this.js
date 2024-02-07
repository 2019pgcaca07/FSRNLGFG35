/*
1.this keyword: this keyword refers to the object being created.
2.inside the method,this keyword refers to the object by which method is invoked.
*/

//person is an object having two property name and sayHiObject
const person={
    name:"ranjeet",
    sayHiObject:function(){
          console.log(this);
          function say(){
            console.log(this);
          }
          say();
    }
}

//calling the method sayHiObject as it is the property of person object so we can call it using person.sayHiObject();
person.sayHiObject();


