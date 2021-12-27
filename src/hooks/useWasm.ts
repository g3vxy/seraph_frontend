import { useCallback, useState } from "react";

type WasmInstance = typeof import("../wasm/seraph_wasm.js");

function useWasm() {
  const [error, setError] = useState<Error | undefined>(undefined);
  const [wasmInstance, setWasmInstance] = useState<WasmInstance | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);
  const initialize = useCallback(async () => {
    try {
      setLoading(true);
      setError(undefined);
      const wasm = await import("../wasm/seraph_wasm.js");
      await wasm.default();
      setWasmInstance(wasm);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    error,
    loading,
    initialize,
    wasmInstance
  };
}

export default useWasm;
