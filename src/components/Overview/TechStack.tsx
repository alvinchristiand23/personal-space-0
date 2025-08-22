"use client";

import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import { hoverTransition } from "@/animations/variants";
import { techStack } from "@/data/techStack";
import { TechStackItem } from "@/types/techStackItem";

import SubSectionTitle from "../General/SubSectionTitle";

export default function TechStack() {
  return (
    <div className="flex flex-col gap-y-4">
      <SubSectionTitle title="Tech Stack" subtitle="Technologies and Tools" />
      <ul className="flex flex-wrap gap-8 py-2">
        {techStack.map((item: TechStackItem) => (
          <motion.li
            key={item.name}
            initial="initial"
            whileHover="hover"
            variants={{
              initial: {
                boxShadow: `inset 0 0 2px ${item.color}20, inset 0 0 4px ${item.color}20`,
              },
              hover: {
                boxShadow: `inset 0 0 4px ${item.color}40, inset 0 0 8px ${item.color}40`,
              },
            }}
            transition={hoverTransition}
            className={"relative cursor-pointer rounded-2xl p-4"}
          >
            <motion.div
              variants={{
                initial: { x: 0, y: 0, rotate: 0, scale: 1 },
                hover: { x: 24, y: -24, rotate: 24, scale: 1.1 },
              }}
              transition={hoverTransition}
              className="relative"
            >
              <Image
                src={item.logo}
                width={24}
                height={24}
                alt={`${item.name} Logo`}
                className="size-5 object-contain md:size-6"
              ></Image>
            </motion.div>
            <motion.div
              variants={{
                initial: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={hoverTransition}
            >
              <p
                style={{ color: `${item.color}` }}
                className="supporting-text absolute top-0 left-0 flex h-full w-full items-center justify-center"
              >
                {item.level}
              </p>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
