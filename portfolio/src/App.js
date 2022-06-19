import './styles/app.css'
import { Portrait } from './components/portrait';
import { Header } from './components/header';
import Footer from './components/Footer';
import {
  
  Link
} from "react-router-dom";
import BurgerMenu from './animations/burgerMenu';
import Triangle  from './components/Triangles'

function App() {
  return (
   
    <div className="app">
    <BurgerMenu />
  
   <Header/>
      <Portrait />
      <Triangle />
       <Footer/>
      {/* <div className='conatiner'> */}
      {/* <div className='triangle-topright'>
        <h1 className='title'>Projects</h1> */}
      {/* </div>
    </div> */}
   
    {/* </div> */}
 
   </div>
  );
}


export default App;
