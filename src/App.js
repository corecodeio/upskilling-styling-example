import logo from './assets/img/logo.svg';
import './App.css';
import AcceptButton from './components/AcceptButton/AcceptButton';
import CancelButton from './components/CancelButton/CancelButton';
import { useState } from 'react';
import Layout from './components/Layout/Layout';

function App() {

  /*
  const [styleFlag, setStyleFlag] = useState(false);

  const changeFlag = () => {
    setStyleFlag((prevState) => !prevState);
  }
  */

/*
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={changeFlag}>Change Accept Button Style</button>
        <AcceptButton changeColor={styleFlag} title="Aceptar"/>
        <CancelButton title="Cancelar"/>
      </header>
    </div>
*/

  return (
      <Layout>
        <div>
          <h1>This is the body!</h1>
          <h2>Other component</h2>
        </div>
      </Layout>
  );
}

export default App;
