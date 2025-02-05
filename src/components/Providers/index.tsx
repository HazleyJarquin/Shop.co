"use client";

import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/reactQueryClient";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
