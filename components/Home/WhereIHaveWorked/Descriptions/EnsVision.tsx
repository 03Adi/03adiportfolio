import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "As a Software Developer at OWY Technosys specializing in Shopify plugin development. My work involvesleveraging PHP, React, and SQL to create efficient and scalable solutions tailored to e-commerce platforms.",
      keywords: ["Shopify plugin", "PHP", "React", "SQL"],
    },
    {
      text: "I focus on building robust plugins that enhance functionality and user experience. With a commitment to quality and innovation, I strive to deliver impactful results.",
      keywords: ["quality", "innovation"],
    },
    {
      text: "With a strong commitment to quality and innovation, I continuously strive to push the boundaries of what’s possible within the Shopify environment.",
      keywords: ["Shopify environment"],
    },
    // {
    //   text: "Collaborated closely with the team in regular meetings, interacted with smart contracts, and gained expertise in Ethereum Name Service (ENS).",
    //   keywords: ["smart contracts", "ENS", "team collaboration"],
    // },
];  


  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Software Engineer <span className="text-AAsecondary">@ OWY Technosys</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Oct 2024 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.owytechnosys.com", "_blank")}
          >
            owytechnosys.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
