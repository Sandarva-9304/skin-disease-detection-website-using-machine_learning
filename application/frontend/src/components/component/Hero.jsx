import React, { useState, useEffect } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Image from "next/image";

function Hero() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const textVariant = {
    hidden: { y: "100%", opacity: 0 }, // Start position (off-screen below)
    visible: {
      y: "0%",
      opacity: 1,
      transition: { delay: 1, duration: 1, ease: "easeOut" },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 2, duration: 0.5 } },
  };

  const sliderVariant = {
    hidden: { opacity: 0 }, // Start off-screen to the right
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 2, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-16 bg-primary text-primary-foreground">
      <div className="w-full px-4 md:px-6">
        <div className="grid gap-6 max-width: 1000px grid-cols-1 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] min-[2000px]:grid-cols-[1fr_1200px]">
          {/* Hero Text */}
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                variants={textVariant}
              >
                Preliminary Dermatological Diagnosis
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                variants={textVariant}
              >
                AI-Assisted preliminary diagnosis for your patient&apos;s
                dermatological symptoms. Simply identify the symptoms and upload
                images for a quick assessment.
              </motion.p>
            </div>
            {/* Buttons */}
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              variants={buttonVariant}
            >
              <Link
                href="#imageupload"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-green-400 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Start Diagnosis
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sliderVariant}
          >
            <Slider
              {...settings}
              className="overflow-hidden rounded-xl aspect-video lg:aspect-square min-[2000px]:aspect-video"
            >
              <Image
                src="/img1.webp"
                width="550"
                height="550"
                alt="Image 1"
                className="object-cover aspect-video lg:aspect-square min-[2000px]:aspect-video"
              />

              <Image
                src="/img2.jpg"
                width="550"
                height="550"
                alt="Image 2"
                className="object-cover aspect-video lg:aspect-square min-[2000px]:aspect-video"
              />
              <Image
                src="/img3.jpg"
                width="550"
                height="550"
                alt="Image 3"
                className="object-cover aspect-video lg:aspect-square min-[2000px]:aspect-video"
              />
            </Slider>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
