"use client";

import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import { hoverTransition, outlineAnimation, upAnimation } from "@/animations/variants";
import { techStacks } from "@/data/techStacks";
import { TechStackItem } from "@/types/TechStackItem";

import Badge from "../General/Badge";
import SubSectionTitle from "../General/SubSectionTitle";

export default function TechStack() {
  return (
    <div>
      <SubSectionTitle title="Tech Stack" />
      <ul className="scrollbar-none flex max-h-80 flex-wrap justify-center gap-4 overflow-y-scroll">
        {techStacks.map((item: TechStackItem) => {
          return (
            <motion.li
              key={item.name}
              initial="initial"
              whileHover="hover"
              className={"flex w-36 cursor-pointer flex-col items-center gap-y-2 p-2"}
            >
              <motion.div
                variants={upAnimation}
                transition={hoverTransition}
                className="flex items-center gap-x-2"
              >
                <Image
                  src={item.logo}
                  width={20}
                  height={20}
                  alt={`${item.name} Logo`}
                  className="size-5 object-contain"
                ></Image>
                <h4 className="heading-item">{item.name}</h4>
              </motion.div>
              <div className="flex gap-x-2">
                {item.tags.map((tag) => (
                  <motion.div
                    key={tag}
                    variants={outlineAnimation}
                    custom={item.color}
                    transition={hoverTransition}
                    className="rounded-lg"
                  >
                    <Badge label={tag} />
                  </motion.div>
                ))}
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
