import "@/styles/globals.css";
import { Space_Mono } from "next/font/google";
const mono = Space_Mono({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-mono",
});
import { useTransition, animated } from "@react-spring/web";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const router = useRouter();

  const transition = useTransition(router.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reset: true,
  });
  return (
    <main className={`${mono.variable} font-sans`}>
      {transition((style, item, t, i) => {
        return (
          item && (
            <animated.div style={style}>
              <Component {...pageProps} />
            </animated.div>
          )
        );
      })}
    </main>
  );
}
