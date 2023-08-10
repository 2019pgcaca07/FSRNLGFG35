var s = null;
console,console.log(s);
console.log(5/2);

var s = "ranjeet";
console.log(s);
s = 'cyril';
console.log(s);
var fname = `ranjeet ${s}
kumar`;
console.log(fname);

//Javascript objects
// Summary
// 1.An object is a collection of key-value pairs.
// 2.Use the dot notation ( .) or array-like notation ([]) to access a property of an object.
// 3.The delete operator removes a property from an object.
// 4.The in operator check if a property exists in an object.

var person = {
     firstName:"Rammppa",
     'last Name':"Kumar",
     age:25,
     mobNo:7890348494,
     address:{
        village:"Myorpur",
        post:"Myorpur",
        district:"Sonbhadra",
        pinCode:231209,
        city:"Varanasi",
        state:"Uttar Pradesh"
      },
      intrest:["chess","treking","coding"],
      isEmployee:true,
      fullName: function(){
        return this.firstName + " " + this['last Name'];
      },
      greet: function(timeOfDay){
        if(timeOfDay === "morning"){
          return `good ${timeOfDay} ${this.firstName}`;
        }else if(timeOfDay === "afternoon"){
          return `good ${timeOfDay} ${this.firstName}`
        }else{
          return `good ${timeOfDay} ${this.firstName +" "+ this['last Name']} `
        }
      }             
};
//accessing property of an object using dot notation
console.log(person.firstName);
//the key with space seprated access them using Array like notation otherwise it will give error unexpected string
console.log(person['last Name']);
console.log(person.address);
console.log(person.fullName());
console.log(person.greet("evening"));

//find a particular key in object using in
console.log('firstName' in person);  //return true if exist otherwise false

//printing all key and values of object
for(let key in person){
  //console.log(key);
  //but if you want to print values you have to write objectName[key] not objeectName.key,it will return undefined
  console.log(key+":" + person[key]);
}


//delete property of an object
delete person.age;
console.log(person.age); //return undefined as age is deleted
