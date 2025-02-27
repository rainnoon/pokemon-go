"use client";
import React, { useEffect, useState } from "react";
import gif1 from "@/public/pet/gif/1.gif";
import gif2 from "@/public/pet/gif/2.gif";
import gif3 from "@/public/pet/gif/3.gif";
import gif4 from "@/public/pet/gif/4.gif";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Spine from "@/components/spine";
import {
  useAccount,
  useClient,
  useConnectorClient,
  useContractWrite,
  usePublicClient,
  useWaitForTransactionReceipt,
  useWalletClient,
  useWriteContract,
} from "wagmi";

import { contracts } from "@/contracts/contracts";
import { useGlobalContext } from "@/context";
import { router } from "next/client";
import { useTranslations } from "next-intl";

interface ChooseModalProps {
  className?: string;
  style?: any;
}
const ChooseModal: React.FC<ChooseModalProps> = (props) => {
  const { className, style } = props;
  const router = useRouter();

  const { chainId } = useAccount();
  const [name, setName] = useState("");

  //如果注册了就跳转
  const { monster, refetchMonster } = useGlobalContext();
  useEffect(() => {
    if (monster?.id) router.push("/raise");
  }, [monster]);

  //不能给abi和contract赋值类型，这样就没有提示了
  let contract =
    contracts[chainId as keyof typeof contracts]
      ?.ZenMonController;

  let abi = contract?.abi;

  //note 这个类型转换非常牛逼
  // abi = contracts[chainId]?.ZenMonViewer;

  const walletClient = useWalletClient();

  const {
    writeContract,
    data: hash,
    isPending,
  } = useWriteContract();
  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  });
  useEffect(() => {
    if (isConfirmed) {
      refetchMonster.current({
        cancelRefetch: true,
        throwOnError: false,
      });
      router.push("/raise");
    }
  }, [isConfirmed]);
  console.log(isConfirming, isPending, "确认");
  const handleClick = () => {
    if (walletClient) {
      console.log(contract.address);
    }
    writeContract({
      abi,
      address: contract.address,
      functionName: "createMonster",
      args: [name, activeIndex],
    });
    // router.push("/raise");
  };
  useEffect(() => {}, []);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSetActive = (index: number) => {
    setActiveIndex(index); // 设置当前激活的组件
  };

  const t = useTranslations('chooseModal');

  return (
    <>
      <div
        className={`fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 flex justify-center ${className}`}
        style={style}
      >
        <div className="h-[30rem] w-[25rem]  bg-[#ffc000] rounded-[4rem]  shadow-2xl shadow-[rgba(191,144,0,0.1)]"></div>
        <span className="absolute top-3 text-white text-[2rem] ">
          {t('title')}
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`fixed  focus:border-[#08A3E5] focus:border-[0.5rem] w-[15rem] left-1/2 -translate-x-1/2 bottom-7 text-[1.5rem]  px-0 text-center flex justify-center placeholder-[#ffc000] text-[#ffc000] bg-white   py-4 rounded-full shadow-2xl shadow-[rgba(191,144,0,0.5)]  `}
          placeholder={t('namePlaceholder')}
        ></input>
      </div>
      <button
        disabled={!name.length || activeIndex <= 0}
        type="button"
        className={`fixed cursor-pointer z-20 left-1/2 -translate-x-1/2  bottom-2 text-[2rem] text-white bg-[#ffc000] px-14 py-2 rounded-[5rem] shadow-2xl shadow-[rgba(191,144,0,0.5)]  `}
        onClick={handleClick}
      >
        {isConfirming || isPending ? t('enterButton.waiting') : t('enterButton.default')}
        {/*note fixed嵌套有问题，如果想相对于body，就脱离嵌套*/}
      </button>{" "}
    </>
  );
};
export default ChooseModal;
