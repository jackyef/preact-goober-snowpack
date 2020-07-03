import Koa from 'koa';
import { h } from 'preact';
import renderToString from 'preact-render-to-string';
import App from '../src/App';

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = `
    <html>
    <head>
      <title>SSR - Snowpack preact</title>
    </head>
    <body>
      <div id="root">${renderToString(<App name="SSR" />)}</div>
    </body>
    </html>
  `
})

app.listen(8001, () => {
  console.log('Koa server listening on port 8001')
});
