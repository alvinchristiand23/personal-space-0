import React from "react";

import { cn } from "@/libs/cn";

interface Props {
  title: string;
  className?: string;
}

export default function SubSectionTitle({ title, className }: Props) {
  return <h3 className={cn("heading-subsection mb-4 text-center", className)}>{title}</h3>;
}
