import {Component} from 'react';
import Estudiante from '../Estudiante/Estudiante';

class App extends Component{
  render = () => {
    return(
       <>
          <Estudiante
           apellido="Doe,"
           nombre= "Jane"
           age= {45}
           hairColor="Black" 
           />
           <Estudiante
           apellido="Smith"
           nombre= "John"
           age= {88}
           hairColor="Brown" 
           />
           <Estudiante
           apellido="Fillmore"
           nombre= "Millard"
           age= {50}
           hairColor="Brown" 
           />
           <Estudiante
           apellido="Smith"
           nombre= "Maria"
           age= {62}
           hairColor="Brown" 
           />
       </>
    

    );
  }
}

 

export default App
