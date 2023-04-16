import useMeasure from "react-use-measure";
import Paper from "@/components/Paper";
import { useState, useEffect } from "react";
import {
  useSpring,
  animated,
  useTransition,
  useScroll,
  config,
} from "@react-spring/web";
import useScrollBlock from "./hooks/useScrollBlock";

const submissions = [
  { artist: "dane burns", title: "yeet" },
  { artist: "jake kile", title: "yeet two" },
  { artist: "michael madrid", title: "yeet three" },
  { artist: "mark ruffalo", title: "yeet four" },
];
export default function Home() {
  const [ref, bounds] = useMeasure();
  const [blockScroll, allowScroll] = useScrollBlock();
  const [dive, setDive] = useState(false);

  const { scrollYProgress } = useScroll();

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
    <div className="font-mono text-2xl md:text-4xl row px-gr-8 ">
      <section className="min-h-screen w-full">
        <div className="w-grp-5">
          <div className="">phone</div>
          <div className="">body</div>
        </div>
        <animated.div
          className={`absolute right-0 w-full h-full -z-10`}
          style={{
            top: scrollYProgress.to(
              (scrollP) => `${scrollP * bounds.height * 2}px`
            ),
          }}
          ref={ref}
        >
          <Paper dive={dive} />
        </animated.div>
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
                  className=" hover:underline hover:cursor-pointer"
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
