// Props
function Profile (props){
    let { name ,age} = props
    age = age + 5
    return(
    <div>
        Profile de : {name} 3omrou {age}
    </div>)
}


// best practice
const Profile1 =  ({name,age})=>{
    return(
    <div>
        Profile de : {name} 3omrou {age}
    </div>)
}

function Profile2 (props){
    
    return(
    <div>
        Profile de : {props.name} 3omrou {props.age}
    </div>)
}

export default Profile