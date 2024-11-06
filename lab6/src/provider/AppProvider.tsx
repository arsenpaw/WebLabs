// AppProvider.tsx
import React from 'react';
import { RoutingProvider } from './RoutingProvider';
import {ReactQueryProvider} from "./QueryClientProvider";

export function AppProvider() {
  return (
    <ReactQueryProvider>
      <RoutingProvider />
    </ReactQueryProvider>
  );
}
