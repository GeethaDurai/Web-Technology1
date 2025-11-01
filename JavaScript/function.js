// function sum(a,b){
    // return a+b;

// }
// console.log(10,20)


// var add=function (a,b){
//     return a+b;

// }
// console.log(add(10,20));

// (function(a,b){
//     console.log(a+b);
// })(10,40);

// var s=a=>{
//     return a**3;
// }
// console.log(s(5))

function bank(){
    var accountno=12345;
    var name="geetha";
    var balance=600000;

    function deposit() {
        var amount=Number(prompt("Enter Amount"));
        return amount + balance;
         
    }
    return deposit;

}
console.log(bank());
