import { motion, type Variants } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale";


const buildVariants = (direction: Direction, distance: number): Variants => {
  const offset = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    scale: { x: 0, y: 0 },
  }[direction];

  return {
    hidden: {
      opacity: 0,
      ...offset,
      scale: direction === "scale" ? 0.8 : 1,
      filter: "blur(14px)",
    },
    visible: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  direction = "up",
  distance = 120,
  once = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof typeof motion;
  direction?: Direction;
  distance?: number;
  once?: boolean;
}) {
  const Comp = motion[Tag] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-15% 0px -15% 0px" }}
      custom={delay}
      variants={buildVariants(direction, distance)}
    >
      {children}
    </Comp>
  );
}
