import { h, Fragment } from 'preact';
import logo from './logo.png';
import * as classes from './styles/app';
import { GlobalStyles } from './styles/main';

const App: preact.FunctionComponent<{ name: string }> = ({ name = '' }) => {
  console.log('Welcome,', name);

  return (
    <Fragment>
      <GlobalStyles />
      <div className={classes.App()}>
        <header className={classes.AppHeader()}>
          <img src={logo} className={classes.AppLogo()} alt="logo" />
          <p>
            Edit <code>src/App.jsx</code> and save to reload.
          </p>
          <p>Welcome to Snowpack + Preact + TypeScript starter!</p>
          <div className={classes.Content()}>
            <pre className={classes.Pre()}>
              <code>$ yarn install</code>
              <br />
              <code>$ yarn start</code>
            </pre>
          </div>
        </header>
      </div>
    </Fragment>
  );
};

export default App;
