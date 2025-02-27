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
import ChooseModal from "@/components/chooseModal";
import { router } from "next/client";
import { useGlobalContext } from "@/context";
import { useTranslations } from "next-intl";

const Home: NextPage = () => {
  const t = useTranslations("app");
  const [rotate, setRotate] = useState(-30);
  const [showOverlay, setShowOverlay] = useState(false);
  const [dimensions, setDimensions] = useState(0);
  const [disappear, setDisappear] = useState(false);

  const imgRef = useRef<any>();
  useAccountEffect({
    onConnect(data) {
      setRotate(0);
      setShowOverlay(true);
      setTimeout(() => setDisappear(true), 3000);
      if (imgRef.current) {
        console.log(imgRef.current.offsetWidth, 1);
        setDimensions(imgRef.current.offsetWidth);
      }
    },
    onDisconnect() {
      setRotate(-30);
      setShowOverlay(false);
      setDimensions(0);
      setDisappear(false);
    },
  });

  return (
    <>
      <div className="w-screen h-screen flex justify-center relative overflow-hidden">
        <img
          ref={imgRef}
          src="/cover.jpg"
          alt="cover"
          className="w-screen object-contain"
        />
        <div
          className={`absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-1000 ${
            showOverlay ? "opacity-50" : "opacity-0"
          }`}
        ></div>
        <Image
          src={headImg}
          alt={"cover"}
          className={`object-contain size-[25rem] left-4 sm:left-auto top-20 sm:top-auto   absolute ${rotate == 0 ? "top-1/3" : "top-10"} ${!disappear ? "opacity-100" : "opacity-0"} `}
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
              "transform  3s ease-in-out, top 2.5s ease-in-out,opacity 1s ease-in-out",
          }} // 应用动态样式
        ></Image>
      </div>
      {!rotate && (
        <ChooseModal
          className={`${!disappear ? "opacity-0" : "animate-show-up"} `}
        ></ChooseModal>
      )}
    </>
  );
};

export default Home;
