import logo from './logo.svg';
import './App.css';
import AcceptButton from './components/AcceptButton/AcceptButton';
import CancelButton from './components/CancelButton/CancelButton';

function App() {

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AcceptButton title="Aceptar"/>
        <CancelButton title="Cancelar"/>
      </header>
    </div>
  );
}

export default App;
