"use client";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useGlobalContext } from "@/context";
import Spine from "@/components/spine";

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
      <Spine index={1}></Spine> <Spine index={2}></Spine>{" "}
      <Spine index={3}></Spine> <Spine index={4}></Spine>
    </div>
  );
};
export default Test;
