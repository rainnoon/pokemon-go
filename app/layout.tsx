"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "@rainbow-me/rainbowkit/styles.css";
import {
  Chain,
  ConnectButton,
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";

import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { config } from "@/config";
import Loading from "@/components/myUi/loading";
import { GlobalContextProvider } from "@/context";
import MyConnectButton from "@/components/myConnectButton";
import React from "react";

const queryClient = new QueryClient();
const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider
              modalSize="compact"
              theme={darkTheme({
                accentColor: "#ffc000",
                accentColorForeground: "white",
                borderRadius: "medium",
                fontStack: "system",
                overlayBlur: "small",
              })}
            >
              <GlobalContextProvider>
                <Loading></Loading>
                <MyConnectButton></MyConnectButton>
                {/*<ConnectButton></ConnectButton>*/}
                {children}
              </GlobalContextProvider>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
