import Image from "next/image";
import { Inter } from "next/font/google";
import Paper from "@/components/Paper";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="font-mono text-4xl row px-gr-8 ">
      <section className="min-h-screen w-full">
        <div className="w-grp-5">
          <div className="">phone</div>
          <div className="">body</div>
        </div>
        <div className="fixed right-0 top-0 w-1/2 h-full">
          <Paper />
        </div>
      </section>
      <section className="min-h-screen">
        <div className="w-grp-5" />
        <div className="text-lg">an exploration of stuff and things</div>
      </section>{" "}
      <section className="min-h-screen w-full">
        <div className="text-5xl leading-none hover:text-purple-500 underline hover:cursor-pointer">
          dive in
        </div>
      </section>
    </div>
  );
}
