import React from "react";

import { IconHash } from "@tabler/icons-react";

import { highlights } from "@/data/highlights";
import { HighlightItem } from "@/types/highlightItem";

export default function Highlight() {
  return (
    <ul className="flex flex-col gap-4 md:flex-row md:justify-around">
      {highlights.map((item: HighlightItem) => (
        <li key={item.title} className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <IconHash strokeWidth={2.5} className="text-accent size-5 md:size-6" />
          <div className="flex flex-col">
            <h3 className="heading-item">{item.title}</h3>
            <p className="supporting-text">{item.subtitle}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
