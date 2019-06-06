module.exports = ({ config }) => {
  const rules = config.module.rules;

  // Use installed babel-loader (which is meant to work with @babel/core@7).
  rules[0].use[0].loader = require.resolve("babel-loader");

  // Use @babel/preset-react for JSX and env (instead of staged presets).
  rules[0].use[0].options.presets = [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env")
  ];

  // Use @babel/plugin-proposal-class-properties for class arrow functions.
  rules[0].use[0].options.plugins = [
    require.resolve("@babel/plugin-proposal-class-properties"),
    require.resolve("@babel/plugin-syntax-dynamic-import")
  ];

  rules.push({
    test: /\.stories\.jsx?$/,
    enforce: "pre"
  });

  return config;
};
