import './styles/app.css'
import { Portrait } from './components/portrait';
import { Header } from './components/header';
import Footer from './components/Footer';
import {
  
  Link
} from "react-router-dom";
import BurgerMenu from './animations/burgerMenu';
import BodyBox from './components/BodyBox';
import WorkButton from './components/WorkButton';
// import Triangle  from './components/Triangles'

function App() {
  return (
   
    <div className="app">
    <BurgerMenu />
  <div className='main'>
   <Header/>
      <Portrait />
      <WorkButton />
      {/* <Triangle /> */}
      {/* <img src='../../AR.png' alt="logo" className='logo'/> */}
      <BodyBox />
       {/* <Footer/> */}
       </div>
    
   
    
 
   </div>
  );
}


export default App;
