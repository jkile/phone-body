import Paper from "@/components/Paper";
import { useState, useEffect } from "react";
import { useSpring, animated, useTransition } from "@react-spring/web";
import Link from "next/link";

const submissions = [
  { artist: "dane burns", title: "yeet" },
  { artist: "jake kile", title: "yeet two" },
  { artist: "michael madrid", title: "yeet three" },
  { artist: "mark ruffalo", title: "yeet four" },
];
export default function Submissions() {
  return (
    <div className="font-mono text-4xl row px-gr-8 ">
      <div className={`fixed right-0 top-0 w-full h-full`}>
        <Paper dive={true} />
      </div>
      <animated.div className="relative min-h-screen w-full row px-gr-8">
        <div className="w-grp-5"></div>
        <animated.div className=" w-grp-4 text-lg py-gr-10 flex flex-col">
          {submissions.map((submission) => (
            <animated.div
              key={submission.artist}
              className="hover:underline hover:cursor-pointer"
            >
              <div className="whitespace-nowrap "> {submission.title}</div>
              <div className="whitespace-nowrap text-base">
                {" "}
                {submission.artist}
              </div>{" "}
            </animated.div>
          ))}
          <Link href={"/"}>
            <div className=" hover:underline hover:cursor-pointer">
              {"<- home"}
            </div>
          </Link>
        </animated.div>
      </animated.div>
    </div>
  );
}
