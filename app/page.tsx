"use client";

import Link from "next/link";
import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import CoverImg from "@/public/cover.jpg";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AaF } from "@/public/font";
import MyConnectButton from "@/components/myConnectButton";
import { useAccount, useAccountEffect } from "wagmi";
import headImg from "@/public/head.png";
import headImg2 from "@/public/head2.png";
const Home: NextPage = () => {
  const [rotate, setRotate] = useState(-30); // 初始旋转度数为 -30
  const [showOverlay, setShowOverlay] = useState(false); // 控制遮罩显示的状态
  const [dimensions, setDimensions] = useState(0);
  const [disappear, setDisappear] = useState(false);
  const imgRef = useRef<any>();
  useAccountEffect({
    onConnect(data) {
      setRotate(0);
      setShowOverlay(true); // 连接时显示遮罩
      setTimeout(() => setDisappear(true), 3000);
      if (imgRef.current) {
        console.log(imgRef.current.offsetWidth, 1);
        setDimensions(imgRef.current.offsetWidth);
      }
    },
    onDisconnect() {
      setRotate(-30);
      setShowOverlay(false); // 断开连接时隐藏遮罩
      setDimensions(0);
      setDisappear(false);
    },
  });

  return (
    <>
      <div className="w-screen h-screen flex justify-center relative ">
        <img
          ref={imgRef}
          src="/cover.jpg"
          alt={"cover"}
          className={`object-contain h-screen fixed left-1/2 -translate-x-1/2   `}
        ></img>
        <div
          className={`absolute h-screen   bg-[#2E2300] ${rotate == 0 ? "opacity-30" : "opacity-0"} `}
          style={{
            width: `${dimensions}px`,
            transition: "opacity 1s ease-in-out",
          }}
        ></div>{" "}
        {/*// 淡黄色遮罩层*/}
        {/*标志*/}
        <Image
          src={headImg}
          alt={"cover"}
          className={`object-contain size-[25rem] absolute ${rotate == 0 ? "top-1/3" : "top-10"} ${!disappear ? "opacity-100" : "opacity-0"} `}
          style={{
            transform: `rotate(${rotate}deg)`,
            transition:
              "transform  3s ease-in-out, top 3s ease-in-out,opacity 0.5s ease-in-out",
          }} // 应用动态样式
        ></Image>{" "}
        {/*标志2*/}
        <Image
          src={headImg2}
          alt={"cover"}
          className={`object-contain size-[25rem] absolute  ${!disappear ? "top-1/3" : "top-10"}  ${disappear ? "opacity-100" : "opacity-0"} `}
          style={{
            transition:
              "transform  3s ease-in-out, top 3s ease-in-out,opacity 1s ease-in-out",
          }} // 应用动态样式
        ></Image>
      </div>
    </>
  );
};

export default Home;
