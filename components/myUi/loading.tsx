"use client";
import React, { useEffect, useState } from "react";
import "@/style/myUi/load.scss";
import ReactDOM from "react-dom";
import { useGlobalContext } from "@/context";
interface LoadingProps {}
const Loading: React.FC<LoadingProps> = (props) => {
  const { loadingShow, loadingMessage, setLoadingShow } =
    useGlobalContext(); // 用于保存 portal 目标元素的状态

  const [portalElement, setPortalElement] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    // 组件挂载后设置 portal 元素为 body
    setPortalElement(document.body);
  }, []);

  useEffect(() => {
    let timer: any;
    if (loadingShow) {
      timer = setTimeout(() => {
        setLoadingShow(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [loadingShow]);

  if (!loadingShow || !portalElement) return null; // 在 portal 元素可用之前不渲染
  return ReactDOM.createPortal(
    <div>
      {" "}
      <div className=" fixed inset-0 bg-white bg-opacity-90 flex justify-center items-center  text-white text-3xl font-bold z-999 scale-150 ">
        <div className="loader text-black">
          {loadingMessage}
        </div>
      </div>
    </div>,
    portalElement,
  );
};
export default Loading;
