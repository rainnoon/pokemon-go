"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  useAccount,
  useAccountEffect,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gif1 from "@/public/pet/gif/1.gif";
import gif2 from "@/public/pet/gif/2.gif";
import gif3 from "@/public/pet/gif/3.gif";
import gif4 from "@/public/pet/gif/4.gif";
import headImg2 from "@/public/head2.png";
import { contracts } from "@/contracts/contracts";
import { useGlobalContext } from "@/context";
import { formatEther, formatUnits } from "viem";
import { daysFromNow } from "@/utils/timedate";
import { useTranslations } from "next-intl";

const gifs = [gif1, gif2, gif3, gif4];
interface RaiseProps {}
type ItemType = {
  fee: bigint;
  feeToken: string;
  feeTokenSymbol: string;
  id: number;
  itemBoost: number;
  itemType: number;
  lock: number;
  name: string;
};
const Raise: React.FC<RaiseProps> = (props) => {
  const {} = props;
  const imgRef = useRef<any>();
  const [dimensions, setDimensions] = useState(0);
  const [showMoney, setShowMoney] = useState(false);
  const {
    monster,
    viewContract,
    refetchMonster,
    controllerContract,
  } = useGlobalContext();
  const [vault, setVault] = useState<any>();
  const [items, setItems] = useState<readonly ItemType[]>();
  console.log("monster", monster);
  useEffect(() => {
    if (imgRef.current) {
      console.log(imgRef.current.offsetWidth, 1);
      setDimensions(imgRef.current.offsetWidth);
    }
  }, []);

  const { chainId, address } = useAccount();

  const { data: newItems, refetch } = useReadContract({
    address: viewContract?.address,
    abi: viewContract?.abi,
    functionName: "getItems",
  });
  const t = useTranslations("food");
  const tr = useTranslations("raise");
  const replaceName = [
    { name: t("hamburger"), icon: "🍔" },
    { name: t("sprite"), icon: "🥤" },
    { name: t("fries"), icon: "🍟" },
    { name: t("chicken"), icon: "🍗" },
  ];

  //交易
  const {
    writeContract,
    isPending,
    data: hash,
  } = useWriteContract();
  const {
    isLoading: isComfirming,
    isSuccess: isComfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  });
  if (isComfirmed) refetchMonster.current();
  console.log(isPending, isComfirming, "确认");
  const handleClick = (id: number, fee: bigint) => {
    if (isPending || isComfirming) return;

    writeContract({
      abi: controllerContract.abi,
      address: controllerContract.address,
      functionName: "purchaseBoost",
      args: [id],
      value: fee,
    });
  };

  //载入零食
  useEffect(() => {
    if (newItems) {
      const newArray = newItems.map((item) => {
        return {
          id: item.id,
          name: item.name,
          fee: BigInt(item.fee),
          feeToken: item.feeToken,
          feeTokenSymbol: item.feeTokenSymbol,
          lock: item.lock,
          itemType: item.itemType,
          itemBoost: item.itemBoost,
        };
      });
      setItems(newArray);
    }
  }, [newItems]);
  console.log(items, "newItems");

  //读取存款
  const ethusd = 3548;
  const apeusd = 1.96;
  const { data: newVaults, refetch: refetchVaults } =
    useReadContract({
      address: viewContract?.address,
      abi: viewContract?.abi,
      functionName: "getVaults",
      args: address && [address],
    });
  //重新获取存款
  useEffect(() => {
    refetchVaults();
  }, [showMoney]);

  useEffect(() => {
    if (newVaults) {
      const newArray = newVaults.map((item) => {
        return {
          id: item.id,
          token: item.token,
          amount: item.amount,
          expiry: item.expiry,
        };
      });
      setVault(
        newArray.sort((a, b) => a.expiry - b.expiry),
      );
    }
  }, [newVaults]);
  // console.log(
  //   "存款",
  //   vault &&
  //     Number(formatUnits(vault[1]?.amount, 18)) * ethusd,
  // );

  //副作用
  const router = useRouter();
  useEffect(() => {
    if (!address) router.push("/");
  }, [address]);
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
              {monster?.base && (
                <Image
                  src={gifs[(monster?.base ?? 1) - 1]}
                  //note 不是 src={`gifs[${(monster?.base ?? 1) - 1}]`}
                  //因为用的是变量而不是字符串
                  alt={"1"}
                  className="size-[8rem] cursor-pointer"
                ></Image>
              )}
              <span>{monster?.name}</span>
              <span>{tr("status.goodMood")}</span>
              <span>
                {tr("status.energyLevel", {
                  level: monster?.energy,
                })}
              </span>
              <span>
                {tr("mood")}：{monster?.mood}
              </span>
            </div>
          ) : (
            <div className="fixed  flex flex-col justify-center items-center pt-8">
              <span className="  text-[5rem]">
                {tr("deposit")}
              </span>
              <div className="h-[15rem] w-[20rem] overflow-y-auto mt-2 rounded-2xl">
                {vault.map((item: any) => {
                  return (
                    <div key={item.id}>
                      <div className="text-[1.5rem] mt-2 flex jus">
                        <span className="w-[9rem]">
                          $
                          {Number(
                            formatUnits(item.amount, 18),
                          ) *
                            Number(
                              item.token ==
                                "0x0000000000000000000000000000000000000000"
                                ? ethusd
                                : apeusd,
                            )}
                        </span>
                        <span className="mr-7">
                          {item.token ==
                          "0x0000000000000000000000000000000000000000"
                            ? tr("currencies.eth")
                            : tr("currencies.ape")}
                        </span>
                        <span className=" ">
                          {daysFromNow(item.expiry)}
                          {tr("day")}
                        </span>
                      </div>
                    </div>
                  );
                })}
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
        {!showMoney &&
          items?.map((items, index) => {
            return (
              <button
                key={items.id}
                type="button"
                className={`cursor-pointer h-[7rem] w-[14rem] flex flex-col items-center justify-center    text-2xl text-[#ffc000] bg-white px-2 py-16 rounded-2xl shadow-2xl shadow-[rgba(191,144,0,0.5)]  `}
                onClick={() =>
                  handleClick(
                    items.id,
                    items.feeTokenSymbol == "ETH"
                      ? items.fee
                      : BigInt(0),
                  )
                }
              >
                <span className="mb-4">
                  {replaceName[index].name}{" "}
                  {replaceName[index].icon}
                </span>
                <span>
                  {tr("energy")}+{items.itemBoost}
                </span>
              </button>
            );
          })}
        {showMoney && (
          <div className="text-4xl text-white w-full absolute left-1/2 -translate-x-1/2 bottom-24 flex items-center flex-col justify-center  ">
            <span className="mb-4">
              {tr("depositDays", { days: 1 })}
            </span>
            <button
              type="button"
              className={`text-[#ffc000] text-4xl   bg-white px-10 py-6 rounded-full shadow-2xl shadow-[rgba(191,144,0,0.5)]  `}
            >
              {tr("cannotWithdraw")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Raise;
