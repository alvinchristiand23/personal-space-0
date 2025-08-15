import { TablerIcon } from "@tabler/icons-react";

import { cn } from "@/libs/cn";

import Divider from "./Divider";

interface Props {
  title: string;
  chapterNumber: string;
  icon?: TablerIcon;
  className?: string;
}

export default function SectionTitle({ title, chapterNumber, icon: Icon, className }: Props) {
  return (
    <div className={cn("bg-primary sticky top-4 z-10 py-4", className)}>
      <div className="border-border flex items-center justify-between border-b-2 px-4 pb-4">
        <div className="flex items-center gap-x-4">
          <p className="secondary-text">Chapter {chapterNumber}</p>
          <Divider mode="vertical" />
          <h2 className="heading-section">{title}</h2>
        </div>
        {Icon ? <Icon className="size-5" /> : null}
      </div>
    </div>
  );
}
