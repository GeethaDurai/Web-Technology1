let StudentOne = {
    sname:"Geetha",
    age: 21,
    course:"JFS",
    message:function(gender){
        return `Hii ${this.sname},you joined for the course ${this.course} gender: ${gender}`
    },
};

console.log(StudentOne);
// console.log(StudentOne.message);
console.log(StudentOne.message("female"));


let StudentTwo = {
    sname:"Sowmi",
    age: 20,
    course:"PFS",
    message:function(){
        return `Hii ${this.sname},you joined for the course ${this.course} gender: ${gender}`
    },
};

console.log(StudentTwo);
console.log(StudentTwo.message)
console.log(StudentOne.message.call(StudentTwo, "female"));
console.log(StudentOne.message.apply(StudentTwo,["female"]));

