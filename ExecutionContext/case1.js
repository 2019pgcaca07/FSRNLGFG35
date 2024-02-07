function grandParent(){
    var a =5;
    function parent(){
        var b =6;
        function child(){
            var c = 7;
            console.log(a+b+c);
        }
        child()
    }
    parent();
}
grandParent();