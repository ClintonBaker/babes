import babes from "./client"; // default import

const babelify = babes("() => { return { ...foo }}");

babelify
  .then(code => {
    console.log("Code compiled!: " + code.code);
  })
  .catch(error => {
    console.log("Oh no, compile error!:");
    console.log(error.error);
  });
