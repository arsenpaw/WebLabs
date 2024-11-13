// AppProvider.tsx
import React from 'react';
import { RoutingProvider } from './RoutingProvider';
import {ReactQueryProvider} from "./QueryClientProvider";
import {FilterProvider} from "../context/FindContext";

export function AppProvider() {
  return (
    <ReactQueryProvider>
            <RoutingProvider />
    </ReactQueryProvider>
  );
}
