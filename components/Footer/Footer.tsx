import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";

const ClickableIcon = ({ href, Icon }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
      <Icon className="w-6 h-6 text-gray-400 hover:text-blue-500 fill-current" />
    </a>
  );
};

const IconsData = [
  { href: "https://github.com/03Adi", Icon: GithubIcon },
  { href: "https://www.linkedin.com/in/aditya033/", Icon: LinkedinIcon },
  { href: "https://www.instagram.com/adityaprakashpandey_03/", Icon: InstagramIcon },
];

export default function Footer({ githubUrl, hideSocialsInDesktop }) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col items-center space-y-8">

        {/* Social Icons */}
        <div className={`flex flex-row space-x-6 ${hideSocialsInDesktop ? "lg:hidden" : ""}`}>
          {IconsData.map((iconData, index) => (
            <ClickableIcon key={index} href={iconData.href} Icon={iconData.Icon} />
          ))}
        </div>

        {/* Developer Credit */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            Designed & Developed by <span className="font-semibold text-blue-400">Aditya Prakash Pandey</span> 💻
          </p>
          <p className="mt-2">
            Built with ❤️ using TypeScript and yarn
          </p>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Aditya Prakash Pandey. All rights reserved. 📜
        </p>
      </div>
    </footer>
  );
}