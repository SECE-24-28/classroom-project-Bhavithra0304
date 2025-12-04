
// console.log(a)
// const a=10;
// console.log(a)


// //Named function
// function fun1(){
// document.writeln("")
//     console.log("Named Function")
// }
// fun1() 

// // Function Expression
//  var fun2=function(){
//     document.writeln("Function Expression")
//     console.log("Function Expression")
// }
// fun2()


// // Arrow Function
// var fun3=()=>{
//  document.writeln("Arrow Function")
//     console.log("Arrow Function")
// }
// fun3()

// // Callback and Immediately Invoked Function Expreesion
// (()=>{
//     document.writeln("Callback and Immediately Invoked Function Expreesion")
//     console.log("Callback and Immediately Invoked Function Expreesion")
// })()

const addNumber=(a,b)=>{
    console.log(a,b)
    let num1=a || 10
    let num2=b || 10
    console.log(a+b)
}
addNumber(9,2)
addNumber(2,4)
addNumber()