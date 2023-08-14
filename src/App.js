import logo from './logo.svg';
import './App.css';
import Menu from './componentes/layout/Menu';
import Content from './componentes/layout/Content';
import About from './views/exemplos/About';
import Home from './views/exemplos/Home';
function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Menu></Menu>
      <Content/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
