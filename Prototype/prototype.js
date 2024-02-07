//window object doesn't have its own prototype but it has also prototypal linkage there are many protypes till the Object protype 
//Object prototype is at the top in the prototypal linkage
//console.log(window.__proto__.__proto__);

const obj = {
    name:'ranjeet',
    sayHi:function(){
        console.log(this);
    }
}
console.log(typeof obj);
console.log(obj.__proto__);