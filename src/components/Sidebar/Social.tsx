"use client";

import React from "react";

import type { SocialItem } from "@/types/SocialItem";

import { motion } from "framer-motion";

import { staggerContainer, staggerItem, whileTap } from "@/animations/variants";
import { socials } from "@/data/socials";

export default function Social() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="flex grow flex-row items-center justify-center gap-x-4 md:gap-x-8 lg:flex-col lg:gap-x-0 lg:gap-y-8"
    >
      {socials.map(({ icon: Icon, ...item }: SocialItem) => (
        <motion.a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
          variants={staggerItem}
          whileTap={whileTap}
          className="text-muted hover:text-text-primary hover:bg-secondary focus-visible:text-text-primary focus-visible:bg-secondary rounded-lg p-2 transition-colors duration-150 ease-out"
        >
          <Icon className="size-5" />
        </motion.a>
      ))}
    </motion.div>
  );
}
