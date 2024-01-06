"use client";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./context";

export const useTitleContext = () => useContext(AppContext);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState(() => {
    if (typeof window !== 'undefined') {
      // Access localStorage only if window is defined (i.e., in the browser)
      const storedTitle = localStorage.getItem('title');
      return storedTitle || '';
    }
    return ''; // Default to an empty string if not in the browser
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Update localStorage only if window is defined
      localStorage.setItem('title', title);
    }
  }, [title]);
  return (
    <AppContext.Provider value={{ title, setTitle }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
