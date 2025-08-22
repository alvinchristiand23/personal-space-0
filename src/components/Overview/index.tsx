import React from "react";

import SectionTitle from "../General/SectionTitle";
import Highlights from "./Highlights";
import Introduction from "./Introduction";
import Recommendations from "./Recommendations";
import TechStack from "./TechStack";

export default function Overview() {
  return (
    <section id="Overview">
      <SectionTitle title="Overview" sectionNumber="1" />
      <div className="section-content">
        <Highlights />
        <Introduction />
        <TechStack />
        <Recommendations />
      </div>
    </section>
  );
}
