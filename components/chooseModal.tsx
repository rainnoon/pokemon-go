"use client";
import React, { useState } from "react";
import gif1 from "@/public/pet/gif/1.gif";
import gif2 from "@/public/pet/gif/2.gif";
import gif3 from "@/public/pet/gif/3.gif";
import gif4 from "@/public/pet/gif/4.gif";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Spine from "@/components/spine";
interface ChooseModalProps {
  className?: string;
  style?: any;
}
const ChooseModal: React.FC<ChooseModalProps> = (props) => {
  const { className, style } = props;
  const router = useRouter();
  const handleClick = () => {
    router.push("/raise");
  };
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSetActive = (index: number) => {
    setActiveIndex(index); // 设置当前激活的组件
  };
  return (
    <>
      <div
        className={`fixed z-20 top-1/2 -translate-y-1/3 flex justify-center ${className}`}
        style={style}
      >
        <div className="h-[30rem] w-[25rem]  bg-[#ffc000] rounded-[4rem]  shadow-2xl shadow-[rgba(191,144,0,0.1)]"></div>
        <span className="absolute top-3 text-white text-[2rem] ">
          选择你的宝可梦
        </span>
        <div className="flex h-[20rem] w-[25rem] absolute  top-14   flex-wrap justify-between px-10  ">
          {/*  note gpt写的有点牛逼*/}
          {[1, 2, 3, 4].map((index) => (
            <Spine
              key={index}
              index={index}
              isActive={activeIndex === index}
              handleClick={() => {
                handleSetActive(index);
                console.log("触发切换2");
              }}
              handleDeactivateOther={() => {
                if (activeIndex !== index) {
                  // 如果不是当前点击的组件，设置为stand
                  return true; // 根据具体逻辑可能需要修改
                }
                return false;
              }}
            />
          ))}
        </div>

        <input
          className={`fixed  focus:border-[#08A3E5] focus:border-[0.5rem] w-[15rem] left-1/2 -translate-x-1/2 bottom-12 text-[1.5rem]  px-0 text-center flex justify-center placeholder-[#ffc000] text-[#ffc000] bg-white   py-4 rounded-full shadow-2xl shadow-[rgba(191,144,0,0.5)]  `}
          placeholder={"给他起个名字吧"}
        ></input>
      </div>
      <button
        type="button"
        className={`fixed cursor-pointer z-20 left-1/2 -translate-x-1/2  bottom-2 text-[2rem] text-white bg-[#ffc000] px-14 py-2 rounded-[5rem] shadow-2xl shadow-[rgba(191,144,0,0.5)]  `}
        onClick={handleClick}
      >
        进入
        {/*note fixed嵌套有问题，如果想相对于body，就脱离嵌套*/}
      </button>{" "}
    </>
  );
};
export default ChooseModal;
