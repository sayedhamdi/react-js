
import react, {Component} from "react"
import catimg from './cat.jpeg'
import TodoList from "./Todo" 
// stateful components 
//stateless components

// functional programming 
// procedural programming 
// oop (object oriented programming )


// Stateful component (Class)
// stateless component  (function)

// ingredients for class component :
// constructor() 
// super()
// render()

// life cycle methods : 
  // componentDidMount()
  // componentDidUpdate()
  // componentWillUpdate()

//Order of execution :
// 1 - constructor 
// 2 - render
// 3- componentDidMount

//if update happens to the state or prop change
  // componentDidUpdate
  // render


class Counter extends Component {
    constructor(){
      super();
      this.state = {
        counter : 0
      }
      this.add = this.add.bind(this)
      this.minus = this.minus.bind(this)
      this.reset = this.reset.bind(this)
      console.log("constructor")
    }
    add(){
      this.setState({counter: this.state.counter+1})
    }
    minus(){
      this.setState({counter: this.state.counter-1})
    }
    reset(){
      console.log("nzel al reset")
      this.setState({counter: 0})
    } 
    componentDidMount(){
      console.log(" component lse9 fel browser");

    }
    componentDidUpdate(){
      console.log(" component 3mal update (state wala props tbadlet)")

    }
    componentWillUnmount(){
      console.log("component tna7a mel ui")
    }
    render(){
      console.log("render")
      return(
      <div>
        <input type="text" />
        <Number1 value={this.state.counter}/> 
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
        <button onClick={this.reset}>reset</button>
      </div>
      )
      
    }
} 
function Number({value}){
  //conditional rendering 
  let color = value == 10 ? 'green' : 'orange'
  return (
    <div style={{color:color,fontSize:'40px'}}>{value}</div>
  )
}
function Number1({value}){
  if(value==0){
   return <div style={{color:'red',fontSize:'40px'}}>{value}</div>

  }
  return (
    <div style={{color:'orange',fontSize:'40px'}}>{value}</div>
  )
}

export default class App extends Component{
  constructor(){
    super();
    this.state= {
      toggle : true
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle(){
    this.setState({toggle : !this.state.toggle})
  }
  render(){
    console.log(this.state.toggle)
    return (
      <div>
        <TodoList />
      </div>
    )
  }
  
}
function Card(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <p>
      {props.description}
      </p>
      <img src={props.url} alt="img"/>
    </div>
  )
}