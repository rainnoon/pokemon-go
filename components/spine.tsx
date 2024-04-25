import React, { useEffect, useRef } from "react";
import { Application, Assets, Container } from "pixi.js";
import { Spine } from "@pixi/spine-pixi";

interface SpineTestProps {
  index: number;
  isActive: boolean;
  handleClick: () => void;
  handleDeactivateOther: () => boolean;
}
const SpineTest: React.FC<SpineTestProps> = (props) => {
  const {
    index,
    isActive,
    handleClick,
    handleDeactivateOther,
  } = props;
  const gameRef = useRef<any>(undefined);
  const pixiApp = useRef<any>(undefined);
  const pet1Ref = useRef<any>(undefined);
  useEffect(() => {
    // 获取根元素的字体大小
    //note 分辨率适配
    const fontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    );
    console.log(fontSize, "font");
    const radioWidth = {
      15: 10,
      18: 10,
      16: 10,
      20: 10,
      26: 10,
    };

    // 计算基于 'rem' 的画布尺寸
    const canvasWidth =
      fontSize *
      radioWidth[fontSize as keyof typeof radioWidth]; // 假设你想要的宽度是 37.5rem
    const canvasHeight =
      fontSize *
      radioWidth[fontSize as keyof typeof radioWidth]; // 同样，高度也是 37.5rem
    const petSize = fontSize * 8; // 同样，高度也是 37.5rem

    // 确保 PIXI 应用程序只初始化一次
    const pixiInit = async () => {
      if (!pixiApp.current) {
        const app = new Application();
        //todo 转rem
        await app.init({
          width: canvasWidth, // 或者根据实际需要设置
          height: canvasHeight,
          backgroundColor: 0xffc000, // 需要十六进制格式

          // resizeTo: window,
        });
        pixiApp.current = app;

        if (gameRef.current) {
          //note 防止生成两个画布
          while (gameRef.current.firstChild) {
            gameRef.current.removeChild(
              gameRef.current.firstChild,
            );
          }
          gameRef.current.appendChild(
            pixiApp.current.canvas,
          );
        }

        // 加载资源
        try {
          const res = await Assets.load([
            {
              alias: "pet1",
              src: "/pet/sp1/1.atlas",
            },
            {
              alias: "pet1S",
              src: "/pet/sp1/1.json",
            },
            {
              alias: "pet2",
              src: "/pet/sp2/2.atlas",
            },
            {
              alias: "pet2S",
              src: "/pet/sp2/2.json",
            },
            {
              alias: "pet3",
              src: "/pet/sp3/3.atlas",
            },
            {
              alias: "pet3S",
              src: "/pet/sp3/3.json",
            },
            {
              alias: "pet4",
              src: "/pet/sp4/4.atlas",
            },
            {
              alias: "pet4S",
              src: "/pet/sp4/4.json",
            },
          ]);

          console.log("Loaded Resources:", res);

          const pet1 = Spine.from({
            skeleton: `pet${index || 1}S`,
            atlas: `pet${index || 1}`,
          });

          pet1.state.setAnimation(0, "stand", true);

          // Containers for each pet
          const container1 = new Container();

          container1.addChild(pet1);

          //分辨率适配
          const radioScale = {
            15: 1.0,
            18: 1.2,
            16: 1.2,
            20: 1.2,
            26: 1.4,
          };

          pet1.scale.set(
            radioScale[fontSize as keyof typeof radioScale],
          );
          container1.position.set(
            canvasWidth / 2,
            canvasHeight / 1.2,
          ); // 左上角
          // container1.scale(1.2);

          pixiApp.current.stage.addChild(container1);

          pet1Ref.current = pet1;
          //监听
          app.ticker.add(() => {});
          // pet1.state.
        } catch (e) {
          console.error(
            "Failed to load spine animation:",
            e,
          );
        }
      }
    };
    pixiInit();

    // 组件卸载时清理资源
    return () => {
      if (pixiApp.current) {
        pixiApp.current.destroy(true);
        pixiApp.current = null;
      }
    };
  }, []);
  useEffect(() => {
    if (!pet1Ref.current) return;
    console.log("触发切换");
    //note 原生不行，所以用的这个
    if (isActive) {
      pet1Ref.current.state.data.setMix(
        "walk",
        "stand",
        0.2,
      );
      pet1Ref.current.state.setAnimation(0, "walk", true);
    } else if (handleDeactivateOther()) {
      pet1Ref.current.state.setAnimation(0, "stand", true);
    }
  }, [isActive]);
  // const handleCanvasClick = () => {
  //   if (pet1Ref.current) {
  //     pet1Ref.current.state.data.setMix(
  //       "walk",
  //       "stand",
  //       0.2,
  //     );
  //     pet1Ref.current.state.setAnimation(0, "walk", true);
  //     // pet1Ref.current.state.addAnimation(0, "stand", true);
  //   }
  // };
  return (
    <div
      ref={gameRef}
      style={{ pointerEvents: "all" }}
      onClick={handleClick}
    />
  );
};
export default SpineTest;
