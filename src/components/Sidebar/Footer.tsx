import React from "react";

import { IconCopyright } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer>
      <div className="text-center leading-loose">
        <div className="flex items-center gap-x-1">
          <small>Copyright</small>
          <IconCopyright className="text-text-secondary size-5" />
          <small>2025</small>
        </div>
        <small>All rights reserved</small>
      </div>
    </footer>
  );
}
