
import './App.css';
import MaisBuscados from './components/maisBuscados/maisBuscados';
import MenuBar from './components/navbar/Menu';
import Pesquisa from './components/pesquisa/pesquisa';




function App() {
  return (
    <div className="App">
      <MenuBar />
      <header className="App-header">
      <Pesquisa/>
      </header>
      <MaisBuscados/>
    </div>
  );
}

export default App;
