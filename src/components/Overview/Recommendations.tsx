import React from "react";

import Image from "next/image";

import { IconTallymark1 } from "@tabler/icons-react";

import { recommendations } from "@/data/recommendations";
import { RecommendationItem } from "@/types/recommendationItem";

import SubSectionTitle from "../General/SubSectionTitle";

export default function Recommendation() {
  return (
    <div className="flex flex-col gap-y-4">
      <SubSectionTitle title="Endorsements" subtitle="Colleagues and Mentors" />
      <ul className="flex flex-col gap-y-4">
        {recommendations.map((item: RecommendationItem) => (
          <li key={item.name} className="flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-1">
              <div className="flex items-center">
                <h4 className="heading-item">{item.name}</h4>
                <IconTallymark1 className="text-accent" />
                <p className="supporting-text pt-0.5">{item.position}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <Image
                  src={item.companyLogo}
                  width={24}
                  height={24}
                  alt={`${item.companyName} Logo`}
                  className="size-5 object-contain md:size-6"
                />
                <p className="supporting-text">{item.companyName}</p>
              </div>
            </div>
            <p>
              <q>{item.message}</q>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
