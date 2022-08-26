let ages = [23,27,12,34,11]
let agesPlusOne = []
let mineur = []
ages.forEach(callback)

function callback(element,index,array){
    if(element < 18)
        mineur.push(element)
    agesPlusOne.push(element+1)
}
/*
console.log(agesPlusOne);
console.log(mineur);
*/
function callbackMap(element,index,array){
    if( element < 18 )
        return element
}


function callbackFilter(element,index,array){
    return element <= 12  
}

console.log("filtred list")
console.log(ages.filter(callbackFilter))

let user = {
    name:'user',
    lastname:'user',
    age:27,
    email : 'user@user.com'
} 
let user1 = {
    name:'user1',
    lastname:'user1',
    age:90,
    email : 'user@user.com'
} 
//spread operator
let newUser = {
    ...user,
    age : 18,
}

console.log(user)
console.log(newUser)

let t = [1,2,3,4,11,38,27,'salem']

let tCopy = [4,...t]
console.log(tCopy)
console.log(t)

// object & array destructuring
//let a = t[0]
//let b = t[1]
//let c = t[2]
let [a,b,c,...rest] = t

let {Name,lastname,age }  = user 

console.log(Name,lastname,age);
let o ={
    a : [1,2,3]
}

let salles = [
    {name:'A',numChairs:12},
    {name:'B',numChairs:17},
    {name:'C',numChairs:20}
]
console.log(salles.reduce((sommeFinal,element)=>sommeFinal+element.numChairs,0));


