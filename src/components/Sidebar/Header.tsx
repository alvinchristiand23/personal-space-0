import React from "react";

import Image from "next/image";

import ButtonLink from "@/components/General/ButtonLink";
import { NAME, USERNAME } from "@/constants";

export default function Header() {
  return (
    <header className="flex flex-row items-center gap-y-4 lg:flex-col">
      <Image
        src={"/images/alvinchristiand.webp"}
        width={96}
        height={96}
        alt="Portrait of Alvin Christian D"
        priority
        className="lg:border-accent hidden lg:flex lg:size-24 lg:rounded-2xl lg:border-2 lg:p-1"
      />
      <div className="flex w-full flex-col items-center justify-center text-center">
        <h2 className="heading-highlight">{NAME}</h2>
        <p className="secondary-text">{USERNAME}</p>
      </div>
      <ButtonLink label="My Resume" href="/docs/cv.pdf" className="hidden lg:flex" />
    </header>
  );
}
