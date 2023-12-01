import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} className="w-36 h-auto" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex mt-8 gap-2">
            {socialMedia.map((icon) => (
              <div
                key={icon.src}
                className="flex justify-center items-center bg-white rounded-full w-12 h-12"
              >
                <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-2xl font-bold">{section.title}</h4>
              <ul>
                {section.links.map((linkItem) => (
                  <li key={linkItem.name} className="text-white-400 py-1">
                    <a href={linkItem.link}>{linkItem.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="flex flex-1 justify-center text-white text-center pt-10">
        Made with ❤️ by{" "}
        <span className="font-bold px-1">
          <a target={'_blank'} href="https://www.linkedin.com/in/lovely-k-sharma/">
            {" "}
            Lovely Sharma
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
