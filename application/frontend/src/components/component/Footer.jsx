import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-primary text-primary-foreground">
      <p className="text-xs">
        &copy; 2024 Derma Diagnosis. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <div className="relative">
          <p className="text-xs hover:underline underline-offset-4 peer cursor-pointer">
            Terms of Service
          </p>
          <div className="absolute -left-8 -top-36 mt-2 w-[200px] p-2 rounded bg-background text-muted-foreground font-semibold text-md shadow-lg opacity-0 peer-hover:opacity-100 transition-opacity">
            Terms of Service define the rules users agree to follow while using
            the website.
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="relative">
          <p className="text-xs hover:underline underline-offset-4 peer cursor-pointer">
            Privacy Policy
          </p>
          <div className="absolute -left-8 -top-36 mt-2 w-[200px] p-2 rounded bg-background text-muted-foreground font-semibold text-md shadow-lg opacity-0 peer-hover:opacity-100 transition-opacity">
            Privacy Policy explains how user data is collected, used, and
            protected.
          </div>
        </div>
        <Link
          href="#contact"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact Us
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
