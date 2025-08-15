"use client";

import React from "react";

import { IconProgressDown } from "@tabler/icons-react";
import { motion } from "framer-motion";

import {
  hoverTransition,
  rotate180DegreeAnimation,
  scaleXAnimation,
  whileTap,
} from "@/animations/variants";
import { cn } from "@/libs/cn";

interface Props {
  label: string;
  href: string;
  className?: string;
}

export default function ButtonLink({ label, href, className }: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial="initial"
      whileHover="hover"
      whileFocus="hover"
      whileTap={whileTap}
      className={cn(
        "hover:border-accent border-border relative flex min-h-12 cursor-pointer items-center justify-center gap-x-1 overflow-hidden rounded-xl border-2 px-4 transition-colors duration-150 ease-out",
        className,
      )}
    >
      <motion.span
        variants={scaleXAnimation}
        transition={hoverTransition}
        className="bg-accent/40 absolute inset-2 origin-left rounded-lg"
      />
      <span className="secondary-text relative">{label}</span>
      <motion.div
        variants={rotate180DegreeAnimation}
        transition={hoverTransition}
        className="relative"
      >
        <IconProgressDown className="size-5" />
      </motion.div>
    </motion.a>
  );
}
