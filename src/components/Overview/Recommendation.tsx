import React from "react";

import Image from "next/image";

import { recommendations } from "@/data/recommendations";
import { RecommendationItem } from "@/types/RecommendationItem";

import Badge from "../General/Badge";
import Divider from "../General/Divider";
import SubSectionTitle from "../General/SubSectionTitle";

export default function Recommendation() {
  return (
    <div>
      <SubSectionTitle title="Recommendations" />
      <ul className="flex justify-center">
        {recommendations.map((item: RecommendationItem) => (
          <li
            key={`${item.name} - ${item.companyName}`}
            className="flex max-w-120 flex-col items-center gap-y-2"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <div className="flex items-center gap-x-2">
                <Image
                  src={item.companyLogo}
                  width={20}
                  height={20}
                  alt={`${item.companyName} Logo`}
                  className="size-5 object-contain"
                />
                <h4 className="heading-item">{item.companyName}</h4>
              </div>
              <Divider mode="vertical" />
              <div className="flex items-center gap-x-2">
                <h4 className="heading-item">{item.name}</h4>
                <Badge label={item.position} />
              </div>
            </div>
            <p>{item.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
