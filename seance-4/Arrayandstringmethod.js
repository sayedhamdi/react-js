const persons = [

    { name : "MONCEF" , age: 13} ,
    { name : "BAHIJA" , age: 23} ,
    { name : "ALA" , age: 18} ,
    
];

let newPersons =  persons.map((person)=>{
    if (person.age>= 18){
        person.status = 'majeur'
    }else{
        person.status = 'mineur'
    }
    return person
})
let samir = {
    name:"samir",
    age:32
}
let newSamir = {
    ...samir,
    status: (samir.age >= 18)?'majeur': 'mineur'
}
let newPersonsModerne = persons.map(person=>({...person, status: (person.age >= 18)?'majeur': 'mineur'})) 
console.log(newPersons)
console.log(newPersonsModerne)

// exercice 2 :

const str1 = 'ahmed&ferah-moez&saadi-fadhel&gadihi';


function split(str,car){
    let table = [];
    let vide  = ''
    for (let i =0;i<str.length;i++){
        if (str[i]!=car){
            vide+=str[i];
        }else{
            table.push(vide)
            vide=''
        }
    }
    table.push(vide)
    return table
}
let strResult = str1.split('-').map(nomprenom=>{
    let [firstname,lastname] =  nomprenom.split('&')
    return {
        firstname: firstname,
        lastname : lastname
    }
})
console.log(strResult)


const users = [
    { name : "sarah" , comment : "j'aime ce poste <3" },
    { name : "monya" , comment : "le poste est null :( " },
    { name : "carlos" , comment : "salut l'algérie" }
    ]
function ContainsEmoji({comment,name}){
    if (comment.includes('<3'))
        return {name,etat : 'heureux'}
    else if (comment.includes(':('))
        return {name,etat : 'triste'}
    else return {name,etat : 'neutre'}
}

const moodDetect = (liste)=>liste.map(ContainsEmoji)

console.log(moodDetect(users))


const etudiants = [
    { name : "sarah" , note : undefined },
    { name : "monya" , note : 7 },
    { name : "carlos" , note : 13 },
    { name : "fadhel" , note : 18 },
]

const FailedStudent = (liste)=>{
    let filtredList = liste.filter(etudiant => etudiant.note)
    console.log('lena')
    console.log(filtredList)
    let moyenneDeClasse= filtredList.reduce((total,etudiant)=>total+(etudiant.note/liste.length),0)
    return filtredList.sort((student1, student2) => student2.note - student1.note )
    .map(({name,note}) => ({name,note,mention : (note>=moyenneDeClasse)?'bien':'passable'}))
}

console.log(FailedStudent(etudiants))