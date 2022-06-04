import './styles/app.css'
import { Portrait } from './components/portrait';
import { Header } from './components/header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
   <Header/>
      <Portrait />
      <div className='conatiner'>
      <div className='triangle-topright'>
        <h1 className='title'>Projects</h1>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
