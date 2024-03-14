
import './App.css';
import MaisBuscados from './components/maisBuscados/maisBuscados';
import MenuBar from './components/navbar/Menu';
import { Titulo } from './components/navbat/styles/textos';




function App() {
  return (
    <div className="App">
      <MenuBar />
      <header className="App-header">
        <MaisBuscados/>
      </header>
    </div>
  );
}

export default App;
