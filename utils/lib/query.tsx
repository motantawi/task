"use client";

import { FC, ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ReactQueryProviderProps = {
  children: ReactNode;
};

const ReactQueryProvider: FC<ReactQueryProviderProps> = ({ children }) => {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            retry: 2,
          },
        },
      })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
