import { h, render } from 'preact';
import { setPragma } from 'goober';
import 'preact/devtools';
import App from './App.js';
import { mainGlobalStyles } from './styles/main';

// Setup goober to use preact jsx pragma
setPragma(h);

const container = document.getElementById('root') as HTMLElement;
const gooberContext = this || {};
mainGlobalStyles(gooberContext);
render(<App name={"John Doe"} gooberContext={gooberContext} />, container);