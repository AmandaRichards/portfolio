import './styles/app.css'
import { Portrait } from './components/portrait';
import { Header } from './components/header';

function App() {
  return (
    <div className="app">
   <Header/>
      <Portrait />
    </div>
  );
}

export default App;
