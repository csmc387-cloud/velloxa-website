'use client';
import { type JSX, useEffect, useState, useRef } from 'react';
import { motion, MotionProps } from 'framer-motion';

type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(children);
  const text = children;

  // Use a ref to prevent onScrambleComplete changes from re-triggering the useEffect
  const onCompleteRef = useRef(onScrambleComplete);
  useEffect(() => {
    onCompleteRef.current = onScrambleComplete;
  }, [onScrambleComplete]);

  useEffect(() => {
    if (!trigger) return;

    let isAnimatingNow = true;
    const steps = duration / speed;
    let step = 0;

    const interval = setInterval(() => {
      if (!isAnimatingNow) return;
      let scrambled = '';
      const progress = step / steps;

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          scrambled += ' ';
          continue;
        }

        if (progress * text.length > i) {
          scrambled += text[i];
        } else {
          scrambled +=
            characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);
      step++;

      if (step > steps) {
        clearInterval(interval);
        setDisplayText(text);
        onCompleteRef.current?.();
      }
    }, speed * 1000);

    return () => {
      isAnimatingNow = false;
      clearInterval(interval);
    };
  }, [trigger, text, duration, speed, characterSet]);

  const classNameStr = `relative inline-block whitespace-nowrap ${className || ''}`;

  const content = (
    <>
      {/* Invisible original text to reserve layout dimensions and prevent page/title shaking */}
      <span className="invisible select-none pointer-events-none" aria-hidden="true">
        {children}
      </span>
      {/* Absolute overlay displaying the scrambling text */}
      <span className="absolute inset-0">
        {displayText}
      </span>
    </>
  );

  if (Component === 'span') {
    return (
      <motion.span className={classNameStr} {...props}>
        {content}
      </motion.span>
    );
  }

  if (Component === 'div') {
    return (
      <motion.div className={classNameStr} {...props}>
        {content}
      </motion.div>
    );
  }

  return (
    <motion.p className={classNameStr} {...props}>
      {content}
    </motion.p>
  );
}
