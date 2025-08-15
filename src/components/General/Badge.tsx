import React from "react";

interface Props {
  label: string;
}

export default function Badge({ label }: Props) {
  return (
    <span className="bg-secondary secondary-text flex items-center rounded-lg px-4 py-1">
      {label}
    </span>
  );
}
