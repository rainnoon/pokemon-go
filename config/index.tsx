import { createConfig, http } from "wagmi";
import { Chain, mainnet, sepolia } from "wagmi/chains";
import { myTest, okxNet } from "@/config/chain";

export const config = createConfig({
  chains: [
    sepolia,
    // myTest
  ],

  transports: {
    [mainnet.id]: http("https://eth.llamarpc.com"),
    [sepolia.id]: http("https://rpc-sepolia.rockx.com"), //note 用来usebalance查余额的
    [okxNet.id]: http("https://exchainrpc.okex.org"),
    [myTest.id]: http("http://127.0.0.1:8545"),
  },
});
