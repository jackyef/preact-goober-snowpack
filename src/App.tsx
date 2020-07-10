import { h, createContext } from 'preact';
import logo from './logo.png';
import * as classes from './styles/app';

// Required to get SSR to work
const GooberContext = createContext({});

const App: preact.FunctionComponent<{ name: string; gooberContext: any }> = ({
  name = '',
  gooberContext = {},
}) => {
  console.log('Welcome,', name);
  console.log('GooberContext', gooberContext);

  return (
    <GooberContext.Provider value={gooberContext}>
      <div className={classes.App(gooberContext)}>
        <header className={classes.AppHeader(gooberContext)}>
          <img src={logo} className={classes.AppLogo(gooberContext)} alt="logo" />
          <p>
            Edit <code>src/App.jsx</code> and save to reload.
          </p>
          <p>Welcome to Snowpack + Preact + TypeScript starter!</p>
          <div className={classes.Content(gooberContext)}>
            <pre className={classes.Pre(gooberContext)}>
              <code>$ yarn install</code>
              <br />
              <code>$ yarn start</code>
            </pre>
          </div>
        </header>
      </div>
    </GooberContext.Provider>
  );
};

export default App;
