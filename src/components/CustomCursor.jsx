import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor({ cursorState }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports hover
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsPointerDevice(false);
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isPointerDevice || !isVisible) return null;

  const isPlay = cursorState?.type === 'PLAY';
  const isView = cursorState?.type === 'VIEW';
  const isClose = cursorState?.type === 'CLOSE';

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      {isPlay ? (
        <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs tracking-widest font-mono-code shadow-2xl transition-all duration-200">
          PLAY
        </div>
      ) : isView ? (
        <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center font-bold text-[10px] tracking-widest font-mono-code shadow-2xl transition-all duration-200">
          VIEW ↗
        </div>
      ) : isClose ? (
        <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs tracking-widest font-mono-code transition-all duration-200">
          ESC
        </div>
      ) : (
        <div className="relative flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-white" />
          <div className="absolute w-7 h-7 rounded-full border border-white/40 animate-ping opacity-25" />
        </div>
      )}
    </motion.div>
  );
}
