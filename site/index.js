const js = import("./node_modules/@coconut-killer/hello-wasm/hello_wasm.js");
js.then((js) => {
  js.greet("WebAssembly");
});
