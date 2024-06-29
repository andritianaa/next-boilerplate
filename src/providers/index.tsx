"use client";

import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/plate-ui/tooltip";
import AuthProvider from "@/providers/auth-provider";
import { Toaster } from "@/components/ui/sonner";

import { ThemeProvider } from "./theme-provider";

const queryClient = new QueryClient();

export type ProvidersProps = PropsWithChildren;

export const Providers = (props: ProvidersProps) => {
  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider
          disableHoverableContent
          delayDuration={500}
          skipDelayDuration={0}
        >
          <QueryClientProvider client={queryClient}>
            <Toaster />
            {props.children}
          </QueryClientProvider>
        </TooltipProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};
