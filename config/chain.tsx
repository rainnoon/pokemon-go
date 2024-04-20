import { defineChain } from "viem";
import { Chain } from "wagmi/chains";

export const myTest = {
  id: 1337,
  name: "myTest",

  nativeCurrency: {
    name: "TE",
    symbol: "TE",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] },
  },
} as const satisfies Chain;

export const okxNet = defineChain({
  id: 66,
  name: "Okt",
  nativeCurrency: {
    name: "OKT",
    symbol: "OKT",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://exchainrpc.okex.org"] },
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://etherscan.io",
    },
  },
});
