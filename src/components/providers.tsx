"use client";

import ReduxProvider from "@/redux/redux-provider";
import { DirectionProvider } from "@radix-ui/react-direction";
import SidebarProvider from "@/components/ui/sidebar";
import { Toaster } from "./ui/toaster";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <DirectionProvider dir="rtl">
        <SidebarProvider dir="rtl">{children}</SidebarProvider>
        <Toaster />
      </DirectionProvider>
    </ReduxProvider>
  );
};

export default Providers;
