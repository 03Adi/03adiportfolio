import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {
  const tasks = [
    {
      text: " Acquiring comprehensive experties through hands-on experience, I gained proficiency in real-world Java developement scenarios, shaping me into an adept professional.",
      keywords: ["hands-on experience", "professional"],
    },
    {
      text: "The project demonstrated proficiency in object-oriented programming, exception handling, multithreading, and database integration, showcasing a deep understanding of both fundamental and advanced Java concepts.",
      keywords: ["object-oriented programming", "fundamental and advanced Java concepts"],
    },
    {
      text: "This training provided hands-on experience in building dynamic web applications, working with databases, and implementing industry-standard best practices.",
      keywords: ["dynamic web applications", "industry-standard"],
    },
];


  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Full Stack Java Developer Trainee <span className="text-AAsecondary">@ Ducat India</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Feb - Sept 2023</span>
          <span className="font-mono text-xs text-AAsecondary hover:cursor-pointer" style={{ fontSize: "0.6rem" }}
           // set on click to open the website
           onClick={() => window.open("https://www.ducatindia.com/", "_blank")}
          >
            www.ducatindia.com
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
