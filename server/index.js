const micro = require("micro");
const post = require("micro-post");
const babel = require("@babel/core");

const DEFAULT_CONFIG = {
  babelrc: false,
  presets: [
    ["@babel/preset-stage-0", { decoratorsLegacy: true }],
    "@babel/preset-env"
  ]
};

const options = {
  response: "Something 'sploded.",
  contentType: "application/json",
  errorCode: 404
};

const handleErr = (err, res) => {
  return micro.send(res, 400, { error: err });
};

const handleSuccess = (result, res) => {
  return micro.send(res, 200, { code: result.code });
};

const server = post(options, async (req, res) => {
  const body = await micro.json(req);
  const config = body.config || DEFAULT_CONFIG;

  const transpiledCode = babel.transform(body.code, config, (err, result) => {
    return err ? handleErr(err, res) : handleSuccess(result, res);
  });
});

module.exports = server;
