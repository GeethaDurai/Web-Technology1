// var a=10;
// var b=20;

// function outer(){
//     var m=1;
//     var n=2;
//     var o=3;

//     function inner(){
//      var x=4;
//      var y=5;

//      return m+x+y;
//     }
//     return inner();
// }
// console.log(outer())

//example 2
console.log("start")
function GrandParent(){
    var a=10;
    var b=20;

    function parent(){
        var c=30;
        var d=40;
        
        function child(){
            var e=50;
            var f=60;
            
            return a+c+e;
        }
        return child();
    }
    return parent();
}
console.log(GrandParent());
console.log("end")