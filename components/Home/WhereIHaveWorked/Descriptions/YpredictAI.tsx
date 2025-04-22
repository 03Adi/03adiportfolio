import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function YpredictAI() {
  const tasks = [
    {
      text: "Completed a 1-month internship at Oasis Infobyte as a Software Developer Intern, where I worked on developing software solutions based on real-world scenarios. During this internship, I gained hands-on experience in Advance Java, Core Java, OOPS, HTML, CSS, React, and JavaScript.",
      keywords: ["1-month internship", "Advance Java", "React", "JavaScript"],
    },
    {
      text: "I contributed to designing and implementing interactive user interfaces, enhancing backend functionality, and ensuring seamless integration between frontend and backend components.",
      keywords: ["backend", "frontend",],
    },
    {
      text: "This experience strengthened my problem-solving skills and provided valuable exposure to full-stack development.",
      keywords: ["full-stack development"],
    },
    // {
    //   text: "Focused on SEO and tracking metrics with Google Analytics, resulting in a successful private sale that sold out within 24 hours. Made the project publicly accessible on GitHub.",
    //   keywords: ["SEO", "Google Analytics", "private sale", "GitHub", "public access"],
    // },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Java Developer Trainee <span className="text-AAsecondary">@ Oasis Infobyte</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Oct - Nov 2023</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://oasisinfobyte.com/", "_blank")}
          >
            oasisinfobyte.com
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
