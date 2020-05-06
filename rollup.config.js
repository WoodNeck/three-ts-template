const buildHelper = require("./config/build-helper");
// const babel = require("rollup-plugin-babel");
const liveServer = require("rollup-plugin-live-server");
const glslify = require("rollup-plugin-glslify");

export default buildHelper([
  {
    name: "App",
    input: "./src/App.ts",
    output: `./web/dist/app.js`,
    format: "umd",
    resolve: true,
    plugins: [
			glslify(),
      liveServer({
        port: 8001,
        host: "0.0.0.0",
        root: "web",
        file: "index.html",
        open: true,
        wait: 500
      }),
    ]
  }
]);
