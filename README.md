# babes

<h4>A simple Node micro-service for easily transpiling JavaScript with Babel.</h4>

## Motivation

In 2018, many projects are going up that need to provide users the ability to write code
in the browser, but it isn't easy to get this kind of system set up client-side. babes
aims to provide an easy to use API for compiling future/alternative JavaSript syntaxes with
Babel directly from your client-side application.

## Usage

Install the module with: `npm install babes` or `yarn add babes`.

### With Default Configuration

```javascript
import MODULE_NAME from 'babes';

const babelify = MODULE_NAME('// some javascript in a string');

babelify.then(code => {
  // now you have transpiled code
});

babelify.catch(error => {
  // handle transpilation errors
});
```

### With Custom Configuration

```javascript
import MODULE_NAME from 'babes'

const babelConfig = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-env'
  ],
  plugins: [
    '@babel/plugin-proposal-pipeline-operator'
    '@babel/plugin-proposal-optional-chaining'
  ],
}

const babelify = MODULE_NAME('// some javascript in a string', babelConfig)

babelify.then(code => {
  // now you have transpiled code
})

babelify.catch(error => {
  // handle transpilation errors
})
```

## Notes

This API does not support presets or plugins that are not provided by the official
Babel organization. This means that you can use any `@babel/<preset or plugin name>`
but not any 3rd party extensions.
