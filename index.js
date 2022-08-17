const config = {
    env: {
        memoryBase: 0,
        tableBase: 0,
        memory: new WebAssembly.Memory({
            initial: 256,
        }),
        table: new WebAssembly.Table({
            initial: 0,
            element: 'anyfunc',
        }),
    }
  }

WebAssembly.instantiateStreaming(fetch('./wasi.wasm'), config)
.then((results) => {
    console.log('results:', results)
  // Do something with the results!
});
