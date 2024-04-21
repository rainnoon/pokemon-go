"use client";
import React, {
  createContext,
  useContext,
  useState,
} from "react";
import { useAccount, useReadContract } from "wagmi";
import { allType, contracts } from "@/contracts/contracts";

interface GlobalContextType {
  loadingShow: boolean;
  loadingMessage: string;
  monster: any;
  viewContract: allType["ZenMonViewer"];
  controllerContract: allType["ZenMonController"];
  //note 值得学习的类型转换  本来想typeof contract的，发现不太行
  setLoadingShow: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  setLoadingMessage: React.Dispatch<
    React.SetStateAction<string>
  >;
}

const GlobalContext = createContext<
  GlobalContextType | undefined
>(undefined);

export const GlobalContextProvider = ({
  children,
}: any) => {
  const [loadingShow, setLoadingShow] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  //获取monster数据
  const { chainId, address } = useAccount();
  let contract =
    contracts[chainId as keyof typeof contracts]
      ?.ZenMonViewer;
  let controllerContract =
    contracts[chainId as keyof typeof contracts]
      ?.ZenMonController;

  let abi = contract?.abi;

  const { data: monster } = useReadContract({
    abi,
    address: contract?.address,
    functionName: "getMonster",
    args: [address!],
  });
  return (
    <GlobalContext.Provider
      value={{
        setLoadingShow,
        setLoadingMessage,
        loadingShow,
        loadingMessage,
        monster,
        viewContract: contract,
        controllerContract,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (context == undefined)
    throw new Error("全局共享未定义");
  return context;
};
