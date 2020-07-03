# Snowpack + Preact + TypeScript starter

Modern web development starter.
- 📦 13.1 KB JS bundle size (5.61 KB gzipped)

## Includes
- **Snowpack**, for blazing fast dev environment
- **Preact**, smaller runtime while still having access to most of React ecosystem if you choose to
- **TypeScript**, never hurt anyone
- **Goober**, [a less than 1KB css-in-js solution](https://github.com/cristianbote/goober)
- **Jest**, for running your tests
- **Webpack**, for bundling production builds
- **ESLint**, for linting your codes

## Getting started
1. Install dependencies
    ```sh
    yarn install
    ```

2. Start developing (no SSR)
    ```sh
    yarn start
    ```

3. Generate production bundle using webpack
    ```sh
    yarn build
    ```

4. To test SSR (uses production build)
    ```sh
    yarn build # build the client bundle first, if not built yet
    yarn build:server
    node server/dist/main.js
    ```

## Current issues
- Extracted CSS from SSR are only available for first request
- Styles using `css` tags are not minified in client bundle
