const ages = [1,25,36,8,79,12,99]

//ForEach ==> when we have a treatment

// ES5
for( let i in ages){
   // console.log(ages[i]*2)
}

//ES6
const affichage = ages.forEach(el=> console.log(el*2))
//=> forEach() ==> fait un traitement 

//map
const affichage = ages.map(el=> el*2)
console.log(affichage)

//map create a copy of array ==> returns a new array 

// Filter ==> create a copy of array and return a new filtered array
//ES5
for(let i in ages){
    if(i%2==0){
        //console.log(ages[i])
    }
}

//Es6 
const paired = ages.map((age,index)=>{
    if(index%2 == 0){ (ages[index])
    }
})
console.log(paired)

//Filter 
const filtered = ages.filter((el,i)=> i%2 ==0 )
console.log(filtered)

// Sum of el ages reduce()
const Sum = ages.reduce((accum,val)=> accum + val)

console.log(Sum)

//sort ages (tri) sort()
const sorted = ages.sort()
//ouput [ 1, 12, 25, 36, 79, 8, 99 ] ==> tri selon le 1er chiffre
const sorted = ages.sort((a,b)=> a-b) //tri ascendant
const sorted = ages.sort((a,b)=> b-a) //tri descendant

// some ==> return boolean true/false
const agess = [1,25,36,8,79,12,120]


const verified = agess.some(age=> age<=100)
console.log(verified) //output true ==> if one el satisfy the condition ==> true

const verified = agess.every(age=> age<=100)
//output false ==> all the el satisfy the condition


//combined methods
const agess = [1,25,36,8,79,12,120]

const Sum = agess.map(el=> el+1)
.sort((a,b)=> a - b)
.reduce((acc,val)=> acc + val)
console.log(Sum)
//we cannot combine array methods with forEach ==> returns Undefined

//Exercice
const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

//Affichage de tous les companies avec leur nom
const AllCompName = companies.map(comp=> comp.name )

//affichage des comp dont leur Category est Retail
const RetailComp = companies.filter(comp=> comp.category == 'Retail')
  console.log(RetailComp)

//trier les comp selon la date de création
const sortedComp = companies.sort((comp1,comp2)=> comp1.start - comp2.start )
console.log(sortedComp)
