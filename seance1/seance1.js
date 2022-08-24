// liste // tableau !! 


// ajouter un element  // C //Create // ADD 
// acceder a un element //R //Read // 
// modifier un element  //U// Update
// supprimer un element //D // delete 
// trier un tableau [2,4,5,11]
 

function nom_de_la_fonction(param1,param2,param3){
    console.log(param1,param2,param3)
}
//nom_de_la_fonction(5,'aslema',[1,2,3])

function n_args(n,...args){
    console.log(n,args)
}

//n_args(5,8,12,'bonjour',function(){console.log('hello')})

let l = [5,2,11,4]

// [5,2;11,5,12]

//
function addToList(list,...args){
    for (let i=0;i<args.length;i++){
        list.push(args[i])
    }
}

function find(list,x){
    if(!list.length)
        return false
    for (let i=0;i<list.length;i++){
        if (list[i]==x)
            return true
    }
    return false
}

function deleteFromList(list,index){
    // ifasakh el element avec i = index mel liste 
    if (index >= list.length || !list.length  ){
        console.log("error cannot delete element")
        return
    }
       
    let newList = []
    for (let i =0;i<list.length;i++){
        if(i != index)
            newList.push(list[i])
    }
    list = newList;
    console.log(list)
}

function editT(list,index,newValue){
    // changer l'element avec l'indice i avec la nouvelle 
    // valeur newValue
}



/*
deleteFromList([1,2,3,4],2)// [1,2,4]
deleteFromList([],2)        // erreur
deleteFromList([11,24,16],1) // [11,16]
*/
/// ES 6 

// setTimeout 
function hello(){
    console.log("khdemet baad chwaya wa9t")
}
/*
setTimeout(hello,2000)
// setInterval
setInterval(function(){
    console.log("bech tab9a tet33awed kol 3 sec")
},3000)
*/
// callback
// its a function that gets called inside another function

// higher order methods

function add(x,y){
    return x+ y
}
function mult(x,y){
    return x*y;
}

function afficherResultat(x,y,callback){
    let result = callback(x,y)
    console.log(result)
}

afficherResultat(5,2,mult)




/*
function afficher(list){
    let affichage = ''
    for (let i=0;i<list.length;i++){
        affichage +=` ${list[i]} | `
    }
    console.log(affichage)
}
*/

// ES6 
function somme(x,y){
    return x+y;
}
let sum = (x,y) => x+y;

const  sayHello = (fisrtName,lastName) =>{
    console.log(`hello ${name} `)
}

// camel case convention
// higher order methods

let names = ['wassim','salma','mariem','joseph','sayed' ]


function deleteSayed(element){
    if(element !='sayed')
    {
        console.log(element);
    }
}

let people = [
                {name:'samir',age:21},
                {name:'mohsen',age:25},
                {name:'monsef',age:27}
            ]

let namess = people.map(p=>p.name )

console.log(namess)
console.log(people)

let person = {
    name:'samir',
    lastname:'ben ali',
    age : 27,
    email : 'samirbenali@gmail.com',
}
console.log(person)
console.log(person['name'])
console.log(person.profession)
person.profession = 'Web developer'
console.log(person)

console.log(Object.keys(person))
console.log(Object.values(person))



let users = [{email:'admin@gmail.com',password:'adminadmin'},
            {email:'user@gmail.com',password:'123'},
            {email:'user1@gmail.com',password:'1234'}] 

let email = 'user@gmail.com'
let password = '123'

let user = users.filter(u => u.email == email && u.password==password).map()

console.log(user)


