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