//ES5
//1)
function Sum (a,b){
    return a + b
}

//2)
const Sum = function (a,b){
    return a + b
}

//ES6 ==> arrow function ==> anonym func
const Sum = (a,b) => {
    return a + b ;
}

// 1 instructions ==> we can remove the {return}
const Sum =  (a,b)=> a + b
// 1 parameter ==> we can remove the ()
const affichage = a => a 

//call the function
console.log(affichage('hello this is a ws of ES6'))


//call the function
Sum(2,3)