import React from "react";

export default function Sidebar() {
  return (
    <aside>
      <div className="scrollbar-none border-border flex w-full shrink-0 flex-col border-y-2 py-2 lg:w-18 lg:overflow-y-auto lg:border-x-2 lg:border-y-0 lg:py-4"></div>
      <div className="scrollbar-none flex grow flex-col gap-y-1 overflow-y-auto px-4 py-2 lg:gap-y-0 lg:py-4"></div>
    </aside>
  );
}
