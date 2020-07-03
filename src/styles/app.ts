import { css } from 'goober';

export const App = css`
  text-align: center;
`;

export const AppHeader = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppLink = css`
  color: #61dafb;
`;

export const AppLogo = css`
  height: 40vmin;
  pointer-events: none;
  margin-bottom: 1rem;
  animation: App-logo-spin infinite 1.6s ease-in-out alternate;

  @keyframes App-logo-spin {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }
`;

export const Content = css`
  width: 80%;
`;

export const Pre = css`
  background: #333333;
  border-radius: 2rem;
  border: 1px solid #282c34;
  padding: 2rem;
  display: block;
  width: 30vw;
  margin: 2rem auto;
  text-align: left;
  @media only screen and (max-width: 600px) {
    pre {
      padding: 1.25rem;
      width: auto;
    }
  }
`;
