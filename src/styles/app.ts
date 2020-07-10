import { css } from 'goober';

let contextSpecificCss: typeof css;

export const App = (ctx: any): string => {
  contextSpecificCss = css.bind(ctx);

  return contextSpecificCss`
  text-align: center;
`;
};

export const AppHeader = (ctx: any): string => {
  contextSpecificCss = css.bind(ctx);
  return contextSpecificCss`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;
};

export const AppLink = (ctx: any): string => {
  contextSpecificCss = css.bind(ctx);
  return contextSpecificCss`
    color: #61dafb;
  `;
};

export const AppLogo = (ctx: any): string => {
  contextSpecificCss = css.bind(ctx);
  return contextSpecificCss`
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
};

export const Content = (ctx: any): string => {
  contextSpecificCss = css.bind(ctx);
  return contextSpecificCss`
    width: 80%;
  `;
};
export const Pre = (ctx: any): string => {
  contextSpecificCss = css.bind(ctx);
  return contextSpecificCss`
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
};
