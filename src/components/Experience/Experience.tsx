import React from "react";

import { IconBriefcase } from "@tabler/icons-react";

import SectionTitle from "../General/SectionTitle";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section id="Experience">
      <SectionTitle title="Experience" chapterNumber="2" icon={IconBriefcase} />
      <div className="section-content">
        <Timeline />
      </div>
    </section>
  );
}
