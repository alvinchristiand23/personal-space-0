import React from "react";

import { IconNote } from "@tabler/icons-react";

import SectionTitle from "../General/SectionTitle";
import Description from "./Description";
import Highlight from "./Highlight";
import Recommendation from "./Recommendation";
import TechStack from "./TechStack";

export default function Overview() {
  return (
    <section id="Overview">
      <SectionTitle title="Overview" chapterNumber="1" icon={IconNote} />
      <div className="section-content">
        <Highlight />
        <Description />
        <TechStack />
        <Recommendation />
      </div>
    </section>
  );
}
