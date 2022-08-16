let wasmExports = null;

const wasmMemory = new WebAssembly.Memory({initial: 256, maximum: 256});    

const wasmTable = new WebAssembly.Table({
    initial: 1,
    maximum: 1,
    element: 'anyfunc'
});

let asmLibraryArg = {
    __handle_stack_overflow: () => {},
    emscripten_resize_heap: () =>{},
    __lock: () => {},
    __unlock: ()=>{},
    memory: wasmMemory,
    table: wasmTable
};

const info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
};

async function loadWasm() {
    const respose = await fetch('a.out.wasm');
    const bytes = await respose.arrayBuffer();
    const wasmObject = await WebAssembly.instantiate(bytes, info);
    wasmExports = wasmObject.instance.exports;
}

loadWasm();

setTimeout(() => {
    console.log('wasmExports:', wasmExports);
}, 5000);