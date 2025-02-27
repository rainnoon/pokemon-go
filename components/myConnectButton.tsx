import React, { useEffect, useRef, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface MyConnectButtonProps {}
const MyConnectButton: React.FC<MyConnectButtonProps> = (
  props,
) => {
  const {} = props;
  const [showChain, setShowChain] = useState(false);
  const connectButtonRef = useRef<any>(null); // 创建 ref
  useEffect(() => {
    // 处理点击事件
    function handleClickOutside(event: any) {
      console.log(
        connectButtonRef.current.contains(event.target),
      );
      if (
        connectButtonRef.current &&
        !connectButtonRef.current.contains(event.target)
      ) {
        console.log("点击外部");
        setShowChain(false); // 如果点击在 ConnectButton 外面，设置 showChain 为 false
      }
    }

    // 添加事件监听器
    document.addEventListener(
      "mousedown",
      handleClickOutside,
    );

    // 清理函数
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, []);
  return (
    <div
      className="    z-20 flex fixed"
      ref={connectButtonRef}
    >
      <div className="absolute bottom-24">
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready =
              mounted && authenticationStatus !== "loading";
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === "authenticated");

            return (
              <div
                {...(!ready && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        onClick={openConnectModal}
                        type="button"
                        className={`fixed left-1/2 -translate-x-1/2 bottom-24 lg:text-[3rem] whitespace-nowrap  text-[2rem]   text-white bg-[#ffc000] px-14 py-4 rounded-full shadow-2xl shadow-[rgba(191,144,0,0.5)]  `}
                      >
                        Play Now
                      </button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <button
                        onClick={openChainModal}
                        type="button"
                      >
                        Wrong network
                      </button>
                    );
                  }

                  return (
                    <div
                      style={{ display: "flex", gap: 12 }}
                      className="fixed    top-[1rem] text-white w-screen flex justify-center  "
                    >
                      {showChain && (
                        <button
                          onClick={openChainModal}
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                          type="button"
                          className={`mr-[4rem] text-3xl text-white bg-[#ffc000] px-4 py-3 rounded-full shadow-2xl shadow-[rgba(191,144,0,0.1)]  `}
                        >
                          {chain.hasIcon && (
                            <div
                              style={{
                                background:
                                  chain.iconBackground,
                                width: 12,
                                height: 12,
                                borderRadius: 999,
                                overflow: "hidden",
                                marginRight: 4,
                              }}
                            >
                              {chain.iconUrl && (
                                <img
                                  alt={
                                    chain.name ??
                                    "Chain icon"
                                  }
                                  src={chain.iconUrl}
                                  style={{
                                    width: 12,
                                    height: 12,
                                  }}
                                />
                              )}
                            </div>
                          )}
                          {chain.name}
                        </button>
                      )}

                      <button
                        type="button"
                        className={`text-3xl text-white bg-[#ffc000] px-4 py-1 rounded-full shadow-2xl shadow-[rgba(191,144,0,0.5)]  `}
                      >
                        {/*{account.displayName}*/}
                        <span
                          onClick={() => setShowChain(true)}
                        >{`<`}</span>
                        <span onClick={openAccountModal}>
                          {account.displayBalance
                            ? `  ${account.displayBalance}`
                            : ""}
                        </span>
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>
    </div>
  );
};
export default MyConnectButton;
