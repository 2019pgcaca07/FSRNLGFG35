//1
function grandparent(){
    var a =5;
    function parent(){
        var b=6;
        function child(){
            var c=7;
            console.log(a+b+c);
        }
        child();
    }
    parent();
}
grandparent();

//2
// function grandparent(){
//     var a=5;
//     parent();
// }
// function parent(){
//     var b=6;
//     child();
// }
// function child(){
//     var c =7;
//     console.log(a+b+c);
// }
// grandparent();

//3
// function grandparent(){
//     var a =5;
//     function parent(){
//         var b=6;
//         function child(){
//             var c=7;
//             return a+b+c;
//         }
//         return child;
//     }
//     return parent;
// }
// let parent = grandparent();
// let child = parent();
// let ans = child();
// console.log(ans);