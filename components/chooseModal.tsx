"use client";
import React from "react";
import gif1 from "@/public/pet/gif/1.gif";
import gif2 from "@/public/pet/gif/2.gif";
import gif3 from "@/public/pet/gif/3.gif";
import gif4 from "@/public/pet/gif/4.gif";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface ChooseModalProps {}
const ChooseModal: React.FC<ChooseModalProps> = (props) => {
  const {} = props;
  const router = useRouter();
  const handleClick = () => {
    router.push("/raise");
  };

  return (
    <>
      <div className="fixed z-20 top-1/2 -translate-y-1/3 flex justify-center">
        <div className="h-[30rem] w-[25rem]  bg-[#ffc000] rounded-[4rem]  shadow-2xl shadow-[rgba(191,144,0,0.1)]"></div>
        <span className="absolute top-3 text-white text-[2rem] ">
          选择你的宝可梦
        </span>
        <div className="flex h-[20rem] w-[25rem] absolute  top-14   flex-wrap justify-between px-10  ">
          {/*todo 点击后切换到win动画*/}
          <Image
            src={gif1}
            alt={"1"}
            className="size-[8rem] cursor-pointer"
          ></Image>
          <Image
            src={gif2}
            alt={"1"}
            className="size-[8rem] cursor-pointer"
          ></Image>
          <Image
            src={gif3}
            alt={"1"}
            className="size-[8rem] cursor-pointer"
          ></Image>
          <Image
            src={gif4}
            alt={"1"}
            className="size-[8rem] cursor-pointer"
          ></Image>
        </div>

        <input
          className={`fixed  focus:border-[#08A3E5] focus:border-[0.5rem] w-[15rem] left-1/2 -translate-x-1/2 bottom-12 text-[1.5rem]  px-0 text-center flex justify-center placeholder-[#ffc000] text-[#ffc000] bg-white px-14 py-4 rounded-full shadow-2xl shadow-[rgba(191,144,0,0.5)]  `}
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
