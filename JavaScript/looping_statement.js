// let i=1;
// while(i<=50){
//     if(i%3==0 || i%5==0 || i%7==0){
//       i++;
//       continue;
//     }
//     console.log(i);
//     i++;
// }

let n=233456;
let sum=0;
while(n!=0){
    let last_digit=n%10;
    sum=sum+last_digit;
    remove_last_digit=parseInt(n/10);
}
console.log(sum);