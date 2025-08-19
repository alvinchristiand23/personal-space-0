import React from "react";

import SectionTitle from "../General/SectionTitle";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section id="Experience">
      <SectionTitle title="Experience" sectionNumber="2" />
      <div className="section-content">
        <Timeline />
      </div>
    </section>
  );
}
