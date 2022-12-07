const a = 3;
a = "hello"
console.log(a)
// TypeError: Assignment to constant variable.
// we cannot change the value of variable once declared as constant

let a = 3;
a = "hello"
console.log(a)
//output hello

//same for the var

const found = true
if(found){
    let a = 3;
   // console.log(a)
}

console.log(a)
//ReferenceError: a is not defined
//==> when we declare with let ==> scope of the variable is function/block scope
 