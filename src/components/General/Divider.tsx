import React from "react";

import { cn } from "@/libs/cn";

interface Props {
  mode?: "horizontal" | "vertical";
  className?: string;
}

export default function Divider({ mode = "horizontal", className }: Props) {
  return (
    <div
      className={cn(
        "bg-border",
        className,
        mode === "horizontal" ? "h-0.5 self-stretch" : "w-0.5 self-stretch",
      )}
    ></div>
  );
}
