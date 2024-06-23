import { Component } from "react";
class Estudiante extends Component{
    constructor(props){
        super(props);
        this.state = {
            apellido: props.apellido,
            nombre: props.nombre,
            age: props.age,
            hairColor: props.hairColor,
          };
    }
    aumentarEdad=()=>{
        this.setState({
            age:this.state.age + 1
        })
    }
    render = () => {
        return(
           <>
              <h3>{this.state.apellido} {this.state.nombre} </h3>
              <p> Age: {this.state.age} </p>
              <p> HairColor: {this.state.hairColor} </p>
              <button onClick={this.aumentarEdad}>Birthday button for {this.props.nombre} {this.props.apellido}</button>
           </>
        );
      }
}

export default Estudiante;