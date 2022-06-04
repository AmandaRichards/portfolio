import './styles/app.css'
import { Portrait } from './components/portrait';
import { Header } from './components/header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function App() {
  return (
   
    <div className="app">
    <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/hackathons">Hackathons</Link>
            </li>
          </ul>
        </nav>
   <Header/>
      <Portrait />
      <div className='conatiner'>
      <div className='triangle-topright'>
        <h1 className='title'>Projects</h1>
      </div>
    </div>
    <Footer
      
    />
    </div>
 
   
  );
}


export default App;
