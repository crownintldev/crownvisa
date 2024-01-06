//@ts-nocheck
"use client"
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";

const QueryProvider=({ children }:{chidren:ReactNode}) =>{
    const queryClient = new QueryClient();
    return (
      <>
        {/* Provide the client to our App */}
        <QueryClientProvider client={queryClient}>
         {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </>
    );
}

export default QueryProvider;