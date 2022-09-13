
// To create a component 
// Rule number 1 : 
  // Dima majuscule 
// Rule number 2 : 
// a component retuns only and only one element

// import a component
// props 
// children


import './app.css';
import Profile from './Profile'
// styling 

const style =  {
  color:'red',
  fontSize:'20px',
  border:'2px solid green'
}
function App() {
  return (

    <div style={style} >
      hello
    </div>
  );
}

function Border(props){
  console.log("props of Border : ")
  console.log(props)
  return (
  <div style={{border:'1px solid black'}}>
    {props.children}
  </div>)
}

function Navbar(){
  return (
    <div className="navbar">
      navbar
    </div>
  ) 
}

function MesTitres(){
  return (
    <div>
      <h1>titre 1</h1>
      <h2>titre 1</h2>
    </div>
  )
}
function AvatarIcon(){
  return <img src="" alt="avatar" /> 
}

export default App;
