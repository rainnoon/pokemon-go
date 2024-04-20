"use client";

import Link from "next/link";
import type { NextPage } from "next";
import React from "react";
import CoverImg from "@/public/cover.jpg";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AaF } from "@/public/font";
const Home: NextPage = () => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center relative">
        <Image
          src={CoverImg}
          alt={"cover"}
          className="object-contain h-screen"
        ></Image>
        <div className="absolute bottom-24">
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
              const ready =
                mounted &&
                authenticationStatus !== "loading";
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === "authenticated");

              return (
                <div
                  {...(!ready && {
                    "aria-hidden": true,
                    style: {
                      opacity: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <button
                          onClick={openConnectModal}
                          type="button"
                          className={`text-2xl font-aa `}
                        >
                          进入宝可梦世界
                        </button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <button
                          onClick={openChainModal}
                          type="button"
                        >
                          Wrong network
                        </button>
                      );
                    }

                    return (
                      <div
                        style={{ display: "flex", gap: 12 }}
                      >
                        <button
                          onClick={openChainModal}
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                          type="button"
                        >
                          {chain.hasIcon && (
                            <div
                              style={{
                                background:
                                  chain.iconBackground,
                                width: 12,
                                height: 12,
                                borderRadius: 999,
                                overflow: "hidden",
                                marginRight: 4,
                              }}
                            >
                              {chain.iconUrl && (
                                <img
                                  alt={
                                    chain.name ??
                                    "Chain icon"
                                  }
                                  src={chain.iconUrl}
                                  style={{
                                    width: 12,
                                    height: 12,
                                  }}
                                />
                              )}
                            </div>
                          )}
                          {chain.name}
                        </button>

                        <button
                          onClick={openAccountModal}
                          type="button"
                        >
                          {account.displayName}
                          {account.displayBalance
                            ? ` (${account.displayBalance})`
                            : ""}
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
      </div>
    </>
  );
};

export default Home;
