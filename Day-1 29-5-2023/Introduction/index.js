
// function Sum(a,b){
//     return a+b;

// }
// console.log(Sum(10,20));
// let a = [10,20,30,40]
// let b={
//     a:10,
//     b:10
// }
// let c = [
//     {
//         a:10,
//         b:20
//     },
//     {
//         a:10,
//         b:20
//     }
// ]
// console.log(a);
// a.push(50);
// console.log(a);
var a = [1,2,3,4,5,6,7,8,9,10]
// for(let i =0 ; i<a.length ; i++){
//     a[i]%2==0?console.log(a[i]):null;

// }
// console.log("hello");
for (let i = 0; i < 10; i++) {
    prime(a)?console.log(a[i]):null;
     
}
function prime( a){
    for(let i = 2; i<a.length;i++){
        if(a[i]%i!=0){
            return false;
        }
    }
    return true;
}