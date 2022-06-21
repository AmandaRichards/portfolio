// import './styles/app.css'
import css from './index.module.scss'
import { Portrait } from '../portrait';
import { Header } from '../header';
import Footer from '../Footer';
import {
  
  Link
} from "react-router-dom";
import BurgerMenu from '../../animations/burgerMenu';
import BodyBox from '../BodyBox';
import WorkButton from '../WorkButton';
// import Triangle  from './components/Triangles'

function App() {
  return (
   
    <div className={css.app}>
    <BurgerMenu />
  <div className={css.main}>
   <Header/>
      <Portrait />
      <WorkButton />
    
      <BodyBox />
       {/* <Footer/> */}
       </div>
    
   
    
 
   </div>
  );
}


export default App;
