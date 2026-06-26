"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue, useSpring } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  const rotate = useTransform(smoothProgress, [0, 1], [20, 0]);
  const scale = useTransform(smoothProgress, [0, 1], scaleDimensions());
  const translate = useTransform(smoothProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[48rem] md:h-[52rem] flex items-center justify-center relative p-2 md:p-10"
      ref={containerRef}
    >
      <div
        className="py-4 md:py-8 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center relative z-50"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative w-full flex justify-center">
      <motion.div
        style={{
          rotateX: rotate,
          scale,
          boxShadow:
            "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003, inset 0 1px 2px rgba(255, 255, 255, 0.15)",
        }}
        className="relative -mt-16 md:-mt-4 w-[94vw] max-w-[390px] md:max-w-none h-[680px] sm:h-[760px] md:w-[720px] md:h-[460px] lg:w-[860px] lg:h-[540px] xl:w-[1000px] xl:h-[600px] border-[12px] md:border-[16px] border-zinc-950 bg-black rounded-[40px] md:rounded-[48px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] ring-4 ring-zinc-800/80 flex-shrink-0"
      >
        {/* iPhone Dynamic Island (Mobile only) */}
        <div className="block md:hidden absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 border border-zinc-900/50 flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-zinc-900 rounded-full ml-auto mr-3 border border-zinc-800/50" />
        </div>

        {/* iPad Camera & Sensor Assembly (Desktop only) */}
        <div className="hidden md:flex absolute top-2.5 left-1/2 -translate-x-1/2 gap-2.5 items-center justify-center z-30">
          <div className="w-2 h-2 bg-[#080810] rounded-full border border-zinc-800/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.85)] flex items-center justify-center">
            <div className="w-[3px] h-[3px] bg-[#1a4a6e] rounded-full opacity-60" />
          </div>
          <div className="w-1 h-1 bg-[#040406] rounded-full border border-zinc-900/60" />
        </div>

        {/* iPhone Side Buttons (Mobile only) */}
        {/* Silent/Ring switch */}
        <div className="absolute top-20 -left-[14px] w-[3px] h-6 bg-zinc-800 rounded-l md:hidden" />
        {/* Volume Up */}
        <div className="absolute top-32 -left-[14px] w-[3px] h-12 bg-zinc-800 rounded-l border-y border-zinc-900 md:hidden" />
        {/* Volume Down */}
        <div className="absolute top-48 -left-[14px] w-[3px] h-12 bg-zinc-800 rounded-l border-y border-zinc-900 md:hidden" />
        {/* Power Button */}
        <div className="absolute top-40 -right-[14px] w-[3px] h-20 bg-zinc-800 rounded-r border-y border-zinc-900 md:hidden" />

        {/* iPad Physical Buttons (Desktop only - Landscape top edge) */}
        {/* Power Button */}
        <div className="hidden md:block absolute top-[-18px] left-16 w-16 h-[3px] bg-zinc-700 rounded-t border-x border-zinc-900" />
        {/* Volume Up */}
        <div className="hidden md:block absolute top-[-18px] right-28 w-8 h-[3px] bg-zinc-700 rounded-t border-x border-zinc-900" />
        {/* Volume Down */}
        <div className="hidden md:block absolute top-[-18px] right-16 w-8 h-[3px] bg-zinc-700 rounded-t border-x border-zinc-900" />

        {/* Screen Content Wrapper */}
        <div className="h-full w-full overflow-y-auto scrollbar-none rounded-[28px] md:rounded-[32px] bg-bg-primary pt-10 pb-4 px-3 sm:px-4 md:pt-8 md:pb-8 md:px-8 relative">
          {/* Glass reflection overlay */}
          <div className="absolute inset-0 pointer-events-none rounded-[28px] md:rounded-[32px] bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.025] z-20" />
          {children}
        </div>

        {/* Home Indicator Line */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/20 rounded-full z-30 pointer-events-none" />
      </motion.div>
    </div>
  );
};
