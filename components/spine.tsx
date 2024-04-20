import React, { useEffect, useRef } from "react";
import { Application, Assets, Container } from "pixi.js";
import { Spine } from "@pixi/spine-pixi";

interface SpineTestProps {
  index: number;
}
const SpineTest: React.FC<SpineTestProps> = (props) => {
  const { index } = props;
  const gameRef = useRef<any>(undefined);
  const pixiApp = useRef<any>(undefined);
  const pet1Ref = useRef<any>(undefined);
  useEffect(() => {
    // 获取根元素的字体大小
    const fontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    );

    // 计算基于 'rem' 的画布尺寸
    const canvasWidth = fontSize * 25; // 假设你想要的宽度是 37.5rem
    const canvasHeight = fontSize * 20; // 同样，高度也是 37.5rem
    const petSize = fontSize * 8; // 同样，高度也是 37.5rem

    // 确保 PIXI 应用程序只初始化一次
    const pixiInit = async () => {
      if (!pixiApp.current) {
        const app = new Application();

        await app.init({
          width: 140, // 或者根据实际需要设置
          height: 140,
          backgroundColor: 0x1099bb, // 需要十六进制格式
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
          // container2.addChild(pet2);
          // container3.addChild(pet3);
          // container4.addChild(pet4);
          //
          // const gridPadding = 100; // 设置一个边距
          // const baseX = gridPadding;
          // const baseY = gridPadding;
          // const midX = canvasWidth / 2;
          // const midY = canvasHeight / 2;

          container1.position.set(70, 120); // 左上角
          // container2.position.set(midX, baseY); // 右上角
          // container3.position.set(baseX, midY); // 左下角
          // container4.position.set(midX, midY); // 右下角
          //
          // // Add containers to the stage
          pixiApp.current.stage.addChild(container1);
          // pixiApp.current.stage.addChild(container2);
          // pixiApp.current.stage.addChild(container3);
          // pixiApp.current.stage.addChild(container4);
          //
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
    if (index == 1) {
      //平滑过渡
      pet1Ref.current.state.data.setMix(
        "hurt",
        "stand",
        0.2,
      );
      pet1Ref.current.state.setAnimation(0, "hurt");
      pet1Ref.current.state.addAnimation(0, "stand", true);
    }
    // if (index == 2)
    //   pet1Ref.current.state.data.setMix(
    //     "skill",
    //     "holdon",
    //     0.2,
    //   );
    // pet1Ref.current.state.setAnimation(0, "skill");
    // pet1Ref.current.state.addAnimation(0, "holdon", true);
    // if (index == 0)
    //   pet1Ref.current.state.setAnimation(0, "holdon", true);
  }, [index]);
  return <div ref={gameRef} />;
};
export default SpineTest;
