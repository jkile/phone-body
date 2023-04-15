import Image from "next/image";
import { Inter } from "next/font/google";
import Paper from "@/components/Paper";
import { useState, useEffect } from "react";
import { useSpring, animated, useTransition } from "@react-spring/web";
import useScrollBlock from "./hooks/useScrollBlock";

const inter = Inter({ subsets: ["latin"] });
const submissions = [
  { artist: "dane burns", title: "yeet" },
  { artist: "jake kile", title: "yeet two" },
  { artist: "michael madrid", title: "yeet three" },
  { artist: "mark ruffalo", title: "yeet four" },
];
export default function Home() {
  const [blockScroll, allowScroll] = useScrollBlock();
  const [dive, setDive] = useState(false);
  const fade = useTransition(dive, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const reverseFade = useTransition(!dive, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    if (dive) {
      blockScroll();
    }
  }, [dive]);

  return (
    <div className="font-mono text-4xl row px-gr-8 ">
      <section className="min-h-screen w-full">
        <div className="w-grp-5">
          <div className="">phone</div>
          <div className="">body</div>
        </div>
        <div className={`fixed right-0 top-0 w-full h-full`}>
          <Paper dive={dive} />
        </div>
      </section>
      <section className="min-h-screen">
        <div className="w-grp-5" />
        <div className="text-lg">an exploration of stuff and things</div>
      </section>{" "}
      <animated.div className="relative min-h-screen w-full row px-gr-8">
        {reverseFade(
          (style, item) =>
            item && (
              <animated.div
                className={`absolute text-5xl left-0 top-0  leading-none hover:text-purple-500 underline hover:cursor-pointer z-20`}
                onClick={() => {
                  setDive(!dive);
                }}
                style={style}
              >
                dive in
              </animated.div>
            )
        )}
        <div className="w-grp-5"></div>
        {fade(
          (style, item) =>
            item && (
              <animated.div
                className=" w-grp-4 text-lg py-gr-10 flex flex-col"
                style={style}
              >
                {submissions.map((submission) => (
                  <animated.div className="hover:underline hover:cursor-pointer">
                    <div className="whitespace-nowrap ">
                      {" "}
                      {submission.title}
                    </div>
                    <div className="whitespace-nowrap text-base">
                      {" "}
                      {submission.artist}
                    </div>{" "}
                  </animated.div>
                ))}
                <div
                  className="pt-gr-10 hover:underline hover:cursor-pointer"
                  onClick={() => {
                    setDive(false);
                    allowScroll();
                  }}
                >
                  {"<- go back"}
                </div>
              </animated.div>
            )
        )}
      </animated.div>
    </div>
  );
}
