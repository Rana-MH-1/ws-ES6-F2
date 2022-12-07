/*--------------------- Spreading Operator -------------------- */
// copy an el
// copy an array
const copiedAges = [...agess]
//console.log(copiedAges)

//add an el 
//ES5
//agess.push(5)
//console.log(agess)
//ES6
const newArray = [...agess, 5]
//console.log(newArray)

//same for the object
const Person={
    name:'Nour',
    age:25,
    Adresse : "Bizerte"
}

//copy the obj
const copiedPerson = {...Person}
//console.log(copiedPerson)
//add a key
//ES5
Person.gender = 'female'
//console.log(Person)

const addedGender = {...Person, gender:'female'}
console.log(addedGender)

/* --------------- Destructuring Operator ------------------ */
const Person={
    name:'Nour',
    age:25,
    Adresse : {country:'Tunisia',
        city:'Bizerte'
    }
    
}

/*console.log("hi I am" + ' '+ Person.name + ' ' + "I am " +' '+ Person.age + " " +"years old and I am from" + ' '+ Person.Adresse) */
const {name, age,Adresse} = Person

//Template Literals AltGr 7
/*console.log(`hi I am ${Person.name} , I am ${Person.age} years old and I am from ${Person.Adresse}`) */
/*console.log(`hi I am ${name} , I am ${age} years old and I am from ${Adresse.city}`) */

const array = [1,5,87,22]
// array[0]
const [el1,el2,...rest] = array
console.log(...rest)

//=> destructuring operator ==> accéder lil les el dy tab / keys of obj  et t7ot.hom f variable qui sont accessible directement ==> simplification