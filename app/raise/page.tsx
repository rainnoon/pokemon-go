"use client";
import React, { useEffect, useRef, useState } from "react";
import { useAccountEffect } from "wagmi";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gif1 from "@/public/pet/gif/1.gif";
import headImg2 from "@/public/head2.png";

interface RaiseProps {}
const Raise: React.FC<RaiseProps> = (props) => {
  const {} = props;
  const imgRef = useRef<any>();
  const [dimensions, setDimensions] = useState(0);
  const [showMoney, setShowMoney] = useState(false);
  useEffect(() => {
    if (imgRef.current) {
      console.log(imgRef.current.offsetWidth, 1);
      setDimensions(imgRef.current.offsetWidth);
    }
  }, []);

  const router = useRouter();
  useAccountEffect({
    onDisconnect() {
      router.push("/");
    },
  });
  return (
    <div>
      {" "}
      <div className="w-screen h-screen flex justify-center relative ">
        <img
          ref={imgRef}
          src="/cover.jpg"
          alt={"cover"}
          className={`object-contain h-screen fixed left-1/2 -translate-x-1/2   `}
        ></img>
        <div
          className={`absolute h-screen   bg-[#2E2300]    opacity-30    `}
          style={{
            width: `${dimensions}px`,
          }}
        ></div>
        <div className="fixed  text-white text-3xl flex flex-col justify-center items-center top-[6rem]  h-[22rem] w-[25rem]  bg-[#ffc000] rounded-[4rem]  shadow-2xl shadow-[rgba(191,144,0,0.1)]">
          {" "}
          <span
            className={`
               absolute ${showMoney ? "left-4 rotate-180" : "right-4"}   cursor-pointer z-40 
            `}
            onClick={() => setShowMoney(!showMoney)}
          >{`>`}</span>
          {!showMoney ? (
            <div className="fixed  flex flex-col justify-center items-center">
              <Image
                src={gif1}
                alt={"1"}
                className="size-[8rem] cursor-pointer"
              ></Image>
              <span>二狗</span>
              <span>现在心情很好！</span>
              <span>能量：100</span>
              <span>心情：97</span>
            </div>
          ) : (
            <div className="fixed  flex flex-col justify-center items-center">
              <span className="fixed top-[10rem] text-[5rem]">
                存款
              </span>
              <div className="text-[3rem] mt-7">
                <span>$0.2</span> <span>ETH</span>
              </div>{" "}
              <div className="text-[3rem] mt-10">
                <span>$3.21</span> <span>TEA</span>
              </div>
            </div>
          )}
        </div>
        <Image
          src={headImg2}
          alt={"cover"}
          className={`object-contain size-[15rem] fixed    top-0 z-10  `}
          style={{
            transition:
              "transform  3s ease-in-out, top 3s ease-in-out,opacity 1s ease-in-out",
          }} // 应用动态样式
        ></Image>
        <div className="fixed   text-white   flex  justify-between   px-2   flex-wrap -bottom-[10rem]  h-[28rem] w-[35rem]  bg-[#ffc000] rounded-[4rem]  shadow-2xl shadow-[rgba(191,144,0,0.1)]"></div>
      </div>
      <div className="fixed bottom-0 px-4 left-1/2 -translate-x-1/2  h-[20rem] w-[35rem] flex   justify-between flex-wrap">
        <button
          type="button"
          className={`cursor-pointer h-[7rem]  flex flex-col items-center justify-center    text-[2rem] text-[#ffc000] bg-white px-14 py-16 rounded-2xl shadow-2xl shadow-[rgba(191,144,0,0.5)]  `}
        >
          <span className="mb-4">小汉堡🍔</span>
          <span>能量+1</span>
        </button>{" "}
        <button
          type="button"
          className={`cursor-pointer h-[7rem]  flex flex-col items-center justify-center    text-[2rem] text-[#ffc000] bg-white px-14 py-16 rounded-2xl shadow-2xl shadow-[rgba(191,144,0,0.5)]  `}
        >
          <span className="mb-4">小汉堡🍔</span>
          <span>能量+1</span>
        </button>{" "}
        <button
          type="button"
          className={`cursor-pointer h-[7rem]  flex flex-col items-center justify-center    text-[2rem] text-[#ffc000] bg-white px-14 py-16 rounded-2xl shadow-2xl shadow-[rgba(191,144,0,0.5)]  `}
        >
          <span className="mb-4">小汉堡🍔</span>
          <span>能量+1</span>
        </button>{" "}
        <button
          type="button"
          className={`cursor-pointer h-[7rem]  flex flex-col items-center justify-center    text-[2rem] text-[#ffc000] bg-white px-14 py-16 rounded-2xl shadow-2xl shadow-[rgba(191,144,0,0.5)]  `}
        >
          <span className="mb-4">小汉堡🍔</span>
          <span>能量+1</span>
        </button>{" "}
      </div>
    </div>
  );
};
export default Raise;
