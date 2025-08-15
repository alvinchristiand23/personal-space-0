"use client";

import React from "react";

import { IconTallymark1 } from "@tabler/icons-react";
import { motion } from "framer-motion";

import { hoverTransition, layoutTransition, scaleXAnimation } from "@/animations/variants";
import { navigations } from "@/data/navigations";
import { useSectionScroll } from "@/hooks/useSectionScroll";
import { cn } from "@/libs/cn";
import { NavigationItem } from "@/types/NavigationItem";

export default function Navigation() {
  const { activeSectionId, scrollToSection } = useSectionScroll();

  return (
    <nav className="flex flex-row justify-around lg:flex-col lg:justify-start lg:gap-y-4">
      {navigations.map(({ number: NumberIcon, ...item }: NavigationItem) => (
        <motion.button
          key={item.name}
          type="button"
          onClick={() => scrollToSection(item.name)}
          initial="initial"
          whileHover="hover"
          whileFocus="hover"
          className={cn(
            "flex cursor-pointer items-center justify-between rounded-lg lg:rounded-xl lg:px-4 lg:py-2",
            activeSectionId === item.name ? "text-text-primary" : "text-muted",
          )}
        >
          <div className="hidden lg:flex lg:items-center">
            {activeSectionId === item.name ? (
              <motion.div layoutId="activeNavNumber" transition={layoutTransition}>
                <NumberIcon className="size-5" />
              </motion.div>
            ) : null}
          </div>
          <div className="flex w-24 items-center justify-center">
            <motion.h3
              initial={{ fontWeight: "normal" }}
              animate={{
                fontWeight: activeSectionId === item.name ? "bold" : "normal",
              }}
              className="heading-item relative leading-loose"
            >
              {item.name}
              <motion.div
                variants={scaleXAnimation}
                transition={hoverTransition}
                className="bg-accent/40 pointer-events-none absolute bottom-1 h-1 w-full origin-left rounded-full"
              />
            </motion.h3>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-end">
            {activeSectionId === item.name ? (
              <motion.div layoutId="activeNavIndicator" transition={layoutTransition}>
                <IconTallymark1 strokeWidth={3} className="text-accent" />
              </motion.div>
            ) : null}
          </div>
        </motion.button>
      ))}
    </nav>
  );
}
