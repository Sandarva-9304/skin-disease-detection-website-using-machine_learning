"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import CrossIcon from "../ui/CrossIcon";
import MenuIcon from "../ui/MenuIcon";
import { VscArrowCircleLeft } from "react-icons/vsc";
import { SlClose } from "react-icons/sl";
import { RiCloseLargeFill } from "react-icons/ri";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 }, // Slide up and invisible
    visible: { y: "0%", opacity: 1 }, // Slide down and visible
    exit: { y: "-100%", opacity: 0 }, // Slide up and invisible on exit
  };
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
      <div className="w-full mx-auto flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center gap-2 font-semibold text-lg"
          prefetch={false}
        >
          <CrossIcon className="h-6 w-6 text-green-400" />
          Derma Diagnosis
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link
            href="#imageupload"
            className="text-sm font-medium hover:underline underline-offset-4 hover:text-green-400"
            prefetch={false}
          >
            Upload
          </Link>
          <Link
            href="#commondiseases"
            className="text-sm font-medium hover:underline underline-offset-4 hover:text-green-400"
            prefetch={false}
          >
            Common Diseases
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4 hover:text-green-400"
            prefetch={false}
          >
            Contact Us
          </Link>
        </nav>
        <Button
          variant="secondary"
          size="sm"
          className="md:hidden py-3"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <RiCloseLargeFill className="w-5 h-5" />
          ) : (
            <MenuIcon className="w-5 h-5" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="absolute top-14 right-0 w-[50%] bg-background text-foreground shadow-md flex flex-col gap-4 py-4 md:hidden rounded-xl border-b-2 pb-2 border-foreground z-10"
            initial="hidden" // Initial animation state
            animate="visible" // Toggle animation
            exit="exit" // Animation on exit
            variants={menuVariants} // Framer Motion variants
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Link
              href="#imageupload"
              className="text-sm font-medium border-b-2 pb-2 border-foreground px-2 hover:text-green-400"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
              prefetch={false}
            >
              Upload
            </Link>
            <Link
              href="#commondiseases"
              className="text-sm font-medium border-b-2 pb-2 border-foreground px-2 hover:text-green-400"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
              prefetch={false}
            >
              Common Diseases
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium px-2 hover:text-green-400"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
              prefetch={false}
            >
              Contact Us
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
