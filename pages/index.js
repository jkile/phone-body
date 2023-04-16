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
import Link from "next/link";
import { useRouter } from "next/router";

const submissions = [
  { artist: "dane burns", title: "yeet" },
  { artist: "jake kile", title: "yeet two" },
  { artist: "michael madrid", title: "yeet three" },
  { artist: "mark ruffalo", title: "yeet four" },
];
export default function Home() {
  const router = useRouter();
  const [ref, bounds] = useMeasure();
  const [blockScroll, allowScroll] = useScrollBlock();
  const [dive, setDive] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (dive) {
      blockScroll();
    }
  }, [dive]);

  const handleRoute = () => {
    setDive(true);
    router.push("/submissions");
    setDive(false);
  };
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
        <animated.div
          className={`absolute text-5xl left-0 top-0  leading-none hover:text-purple-500 underline hover:cursor-pointer z-20`}
          onClick={() => handleRoute()}
        >
          dive in
        </animated.div>
        <div className="w-grp-5"></div>
      </animated.div>
    </div>
  );
}
