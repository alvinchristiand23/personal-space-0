"use client";

import { useState } from "react";

import Image from "next/image";

import { IconArrowBadgeRight, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

import { experiences } from "@/data/experiences";
import { cn } from "@/libs/cn";

import Badge from "../General/Badge";
import Divider from "../General/Divider";

export default function Timeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <ul className="flex flex-col">
      {experiences.map((item, index) => (
        <li key={item.companyName} className="flex flex-col gap-y-2">
          <div className="flex flex-col items-start gap-y-2">
            <div className="flex w-full grow flex-wrap items-center justify-between gap-y-1">
              <div className="flex flex-col flex-wrap gap-y-1">
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  <Image
                    src={item.companyLogo}
                    width={20}
                    height={20}
                    alt={item.companyName}
                    className="object-contain"
                  />
                  <h3 className="heading-highlight">{item.companyName}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <p>{item.position}</p>
                  <Badge label={item.employmentType} />
                </div>
              </div>
              <p className="secondary-text">
                {item.startDate} - {item.endDate}
              </p>
            </div>
            <button
              onClick={() => toggle(index)}
              className={cn(
                "secondary-text border-border hover:border-accent flex w-fit cursor-pointer items-center gap-x-1 rounded-lg border-2 px-2 py-1 font-semibold whitespace-nowrap focus:outline-none",
                openIndex === index ? "border-accent" : "",
              )}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: openIndex === index ? 90 : 0 }}
              >
                <IconArrowRight className="size-4" strokeWidth={3} />
              </motion.div>
              <motion.div
                initial={{ fontWeight: "medium" }}
                animate={{ fontWeight: openIndex === index ? "bold" : "" }}
              >
                {openIndex === index ? "Hide Key Contributions" : "Show Key Contributions"}
              </motion.div>
            </button>
          </div>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="ml-2 flex flex-col gap-y-1">
                  {item.jobDescription.map((desc) => (
                    <li key={desc} className="flex gap-x-2">
                      <div>
                        <IconArrowBadgeRight className="mt-1.5 size-5" />
                      </div>
                      <p>{desc}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
          <Divider className="my-4" />
        </li>
      ))}
    </ul>
  );
}
