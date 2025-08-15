import React from "react";

import { highlights } from "@/data/highlights";
import { HighlightItem } from "@/types/HighlightItem";

export default function Highlight() {
  return (
    <ul className="flex flex-col gap-y-4 sm:flex-row sm:justify-around sm:gap-y-0">
      {highlights.map((item: HighlightItem) => (
        <li key={item.title} className="flex flex-col items-center text-center">
          <h3 className="heading-highlight">{item.title}</h3>
          <p className="secondary-text">{item.subtitle}</p>
        </li>
      ))}
    </ul>
  );
}
