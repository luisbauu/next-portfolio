import React from "react";
import Image from "next/image";
import profile from "@/public/profilepic.png";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const HomeSection = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center align-middle"
      id="home"
    >
      <Image
        priority={true}
        src={profile}
        alt="profile"
        placeholder="blur"
        width={200}
        height={200}
        className="self-center rounded-full"
      />
      <div className="pb-4 pt-8 sm:pt-10 text-3xl">
        hi, I&apos;m Luis <span className="wave ml-1">👋</span>
      </div>
      <div className="text-justify text-lg tracking-tight mb-7">
        I am a graduate from{" "}
        <span className="text-[#031090]">the Ateneo de Manila University</span>{" "}
        and I majored in Computer Science, Digital Game Design, and Development.
        I am currently a Software Engineer for{" "}
        <Link className="text-[#dd543d]" href={"https://thinkingmachin.es/"}>
          Thinking Machines
        </Link>
        !
      </div>
      <div className="flex flex-row gap-5">
        <Link
          href="https://github.com/luisbauu"
          className="hover:text-secondary"
          target="_blank"
        >
          <Github strokeWidth={1} size={40} />
        </Link>
        <Link
          href="https://twitter.com/luisdotdev"
          className="hover:text-secondary"
          target="_blank"
        >
          <Twitter strokeWidth={1} size={40} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jose-luis-bautista/"
          className="hover:text-secondary"
          target="_blank"
        >
          <Linkedin strokeWidth={1} size={40} />
        </Link>
      </div>
    </section>
  );
};
