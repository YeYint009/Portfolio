"use client";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import SocialLink from './SocialLink';

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const socialLinks = [
  { url: "/", src: "/github.png", alt: "GitHub" },
  { url: "/", src: "/instagram.png", alt: "Instagram" },
  { url: "/", src: "/facebook.png", alt: "Facebook" },
  { url: "/", src: "/linkedin.png", alt: "LinkedIn" },
]

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 text-xl">
      {/* Links  */}
      <div className="hidden md:flex gap-4 w-1/3">
        {
          links.map((link) => (
            <NavLink link={link} key={link.title}/>
          ))
        }
      </div>
      {/* logo */}
      <div className=" md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className=" bg-black rounded-md flex justify-center items-center p-1"
        >
          <span className=" text-white font-semibold mr-1">YYH</span>
          <span className=" font-semibold bg-white text-black w-12 h-8 rounded flex justify-center items-center">
            .Dev
          </span>
        </Link>
      </div>
        {/* Social  */}
        <div className="hidden md:flex xl:px-36 gap-4 w-1/3">
          {
            socialLinks.map((socialLink) => (
              <SocialLink socialLink={socialLink} key={socialLink.alt}/>
            ))
          }
        </div>
      {/* menuButton */}
      <div className=" ">
        <button className="w-10 h-8 flex flex-col justify-between items-center z-50 relative" onClick={openHandler}>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
      </div>
      {open && (
        <div className=" absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-4 font-bold text-2xl">
          {links.map((link) => (
            <Link href={link.url} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
