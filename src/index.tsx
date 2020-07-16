import { h, render } from 'preact';
import { setPragma } from 'goober';
import 'preact/devtools';
import App from './App.js';

// Setup goober to use preact jsx pragma
setPragma(h);

const container = document.getElementById('root') as HTMLElement;

render(<App name={'John Doe'} />, container);
