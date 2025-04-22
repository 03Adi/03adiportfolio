import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title   */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // TODO : to here  */}
        {/* // ?  Project  1 Ens Vision */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10 py-4 
          absolute md:grid grid-cols-12 w-full h-full content-center"
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href={"https://github.com/03Adi/Holographic-Code-Playground"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/img/holographicCodePlayground.png"} alt={"Holographic Code Playground Screenshot"} className={`w-full rounded h-full`} />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/img/holographicCodePlayground.png"} alt={"Holographic Code Playground Screenshot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://github.com/03Adi/Holographic-Code-Playground" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Holographic Code Playground
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left">
                  The <span className="text-AAsecondary">Holographic Code Playground</span> is an in-progress project that transforms JavaScript coding into a spatial, visual experience. Using <span className="text-AAsecondary">Next.js, React, and Three.js</span>, it renders data structures as interactive 3D holograms. Features include a <span className="text-AAsecondary">Monaco Editor</span> for real-time coding and a time-travel debugger, making it ideal for learning and visualizing complex code.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">Three.js</span>
                <span className="pr-4 z-10">Monaco Editor</span>
                <span className="pr-4 z-10">Web Development</span>
              </ul>
              <div className="z-10 flex flex-row space-x-5">
                <GithubIcon link="https://github.com/03Adi/Holographic-Code-Playground" />
                <a href="https://github.com/03Adi/Holographic-Code-Playground" target="_blank" rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 - YpredictAI */}

        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10 py-4 
          absolute md:grid grid-cols-12 w-full h-full content-center"
          >
            <div className="relative rounded w-full h-full col-span-7">
              <a href="https://03adi.github.io/age-calculator/" target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/img/age_calculator.png"} alt={"Age Calculator Screenshot"} className={`w-full rounded h-full`} />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/img/age_calculator.png"} alt={"Age Calculator Screenshot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://03adi.github.io/age-calculator/" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Age Calculator
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  I developed a <span className="text-AAsecondary">web application</span> that calculates a user's age based on their date of birth and a specified future date. Built with <span className="text-AAsecondary">React.js, HTML, CSS, and JavaScript</span>, it provides a user-friendly interface to display age in years, months, days, hours, minutes, and seconds, showcasing modern web development practices.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">HTML</span>
                <span className="pr-4 z-10">CSS</span>
                <span className="pr-4 z-10">JavaScript</span>
                <span className="pr-4 z-10">Web Development</span>
              </ul>
              <div className="z-10 flex flex-row space-x-5">
                <GithubIcon link="https://github.com/03Adi/age-calculator" />
                <a href="https://03adi.github.io/age-calculator/" target="_blank" rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 3 - personal-portfolio */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10 py-4 
          absolute md:grid grid-cols-12 w-full h-full content-center"
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href={"https://portfolio-aditya03.netlify.app/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/img/personalPortfolio.png"} alt={"Portfolio Screenshot"} className={`w-full rounded h-full`} />
            </div>
          </div>

          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/img/personalPortfolio.png"} alt={"Portfolio Screenshot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://portfolio-aditya03.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Personal Portfolio
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  I developed a <span className="text-AAsecondary">personal portfolio</span> to showcase my skills and projects as a Full Stack Developer. Built with <span className="text-AAsecondary">React.js, HTML, CSS, and JavaScript</span>, it features sections like Home, About, Resume, Projects, and Contact. This project highlights my ability to create responsive, user-friendly web applications with seamless front-end and back-end integration.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">HTML</span>
                <span className="pr-4 z-10">CSS</span>
                <span className="pr-4 z-10">JavaScript</span>
                <span className="pr-4 z-10">Web Development</span>
              </ul>
              <div className="z-10 flex flex-row space-x-5">
                <a href="https://github.com/03Adi/Personal-Portfolio" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project  4 */}
        {/* <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link href={"/typing"}>
                <div
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img src={"/typing.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/typing.png"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <Link href={"/typing"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Speed Typing
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  This project aim to help you to improve your <span className="text-AAsecondary"> typing </span> by
                  tracking your progress in <span className="text-AAsecondary"> each round</span> and give you a{" "}
                  <span className="text-AAsecondary"> score</span> based on your typing speed and accuracy through a
                  table of <span className="text-AAsecondary"> statistics</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Algorithms</span>
                <span className="pr-4 z-10">Framer Motion</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
                <span className="pr-4 z-10">TypeScript</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/hktitof/Typing" />
                <ExternalLink url={"typing"} router={router} />
              </div>
            </div>
          </div>
        </div> */}

        {/* // ?  Project 5 */}
        {/* <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Link href={"/userdatapuller"}>
                <div
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img src={"/hackme.jpg"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/hackme.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <Link href={"/userdatapuller"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    User Data puller
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  This project allows you to understand how easy it is to identify and track your browser based on how
                  it appears to websites. Such as your
                  <span className="text-AAsecondary"> location</span>,{" "}
                  <span className="text-AAsecondary">IP Address</span>,{" "}
                  <span className="text-AAsecondary">{","} software, Hardware</span> and some additional information
                  with the help of cookies.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Cookies</span>
                <span className="pr-4 z-10">Google APi</span>
                <span className="pr-4 z-10">Data collecting</span>
                <span className="pr-4 z-10">IP Address</span>
                <span className="pr-4 z-10">Location</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/hktitof/DataPuller" />
                <ExternalLink url={"/userdatapuller"} router={router} />
              </div>
            </div>
          </div>
        </div> */}

        {/* // ? Project 6 */}
        {/* <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a href="https://www.haircut.ma" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 ">
                <span className="text-AAsecondary text-xl">In initiation...</span>
              </div>

              <Img src={"/haircut.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/haircut.png"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>
            <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8">
              <div className="w-full"></div>
              <span className="text-AAsecondary sm:text-lg bg-AAprimary px-2 py-1 rounded">In initiation...</span>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://www.haircut.ma" target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Haircut Appointment
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  It&apos; a barber shop <span className="text-AAsecondary">appointment scheduling</span> & management
                  software it provides <span className="text-AAsecondary">online scheduling</span>, appointment
                  reminders, <span className="text-AAsecondary">payments</span>, marketing, and much more! Currently in
                  the <span className="text-AAsecondary">Initiation phase</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Appointment</span>
                <span className="pr-4 z-10">Management</span>
                <span className="pr-4 z-10">Scheduling</span>
                <span className="pr-4 z-10">Booking</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/hktitof/haircut" />
                <a href="https://www.haircut.ma" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div> */}

        {/* // ?  Project 7 */}
        {/* <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href="https://github.com/hktitof/CallCenter" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/CallCenter.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/CallCenter.png"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://github.com/hktitof/CallCenter" target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Call Center Management System
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  A <span className="text-AAsecondary">JavaFX call center management system</span> project it is used
                  for receiving or transmitting a large volume of enquiries between the agent and the customer,it
                  handles the communication between agents & clients it can be used for the both side client & agent
                  side to handle the messages and issues.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">JavaFX</span>
                <span className="pr-4 z-10">Java Concurrency</span>
                <span className="pr-4 z-10">MultiThreading</span>
                <span className="pr-4 z-10">MySQL</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/hktitof/CallCenter" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
