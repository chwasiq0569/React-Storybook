import React from "react";
import { useEffect } from "react";

const useDocumentHook = (count) => {
  useEffect(() => {
    document.title = count;
  }, [count]);
};

export default useDocumentHook;
