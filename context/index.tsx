"use client";
import React, {
  createContext,
  useContext,
  useState,
} from "react";

interface GlobalContextType {
  loadingShow: boolean;
  loadingMessage: string;
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
  return (
    <GlobalContext.Provider
      value={{
        setLoadingShow,
        setLoadingMessage,
        loadingShow,
        loadingMessage,
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
