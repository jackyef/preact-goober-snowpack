import { h } from 'preact';
import logo from './logo.png';
import './App.css';

const App: preact.FunctionComponent<{ name: string }> = ({ name = '' }) => {
  console.log('Welcome,', name);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>Welcome to Snowpack + Preact + TypeScript starter!</p>
        <div className="content">
          <pre>
            <code>$ yarn install</code>
            <br />
            <code>$ yarn start</code>
          </pre>
        </div>
      </header>
    </div>
  );
};

export default App;
