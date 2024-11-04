import {ReactQueryProvider} from "./QueryClientProvider";
import {RoutingProvider} from "./RoutingProvider";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();
export function AppProvider() {
  return (
    <QueryClientProvider client={queryClient} >
      <RoutingProvider />
    </QueryClientProvider>
  );
}
