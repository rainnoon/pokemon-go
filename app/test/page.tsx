"use client";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useGlobalContext } from "@/context";

interface TestProps {}
const Test: React.FC<TestProps> = (props) => {
  const {} = props;
  const { loadingShow, loadingMessage, setLoadingShow } =
    useGlobalContext();
  return (
    <div>
      <ConnectButton></ConnectButton>
      <button onClick={() => setLoadingShow(true)}>
        1111
      </button>
    </div>
  );
};
export default Test;
