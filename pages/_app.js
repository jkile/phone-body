import "@/styles/globals.css";
import { Space_Mono } from "next/font/google";
const mono = Space_Mono({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-mono",
});
export default function App({ Component, pageProps }) {
  return (
    <main className={`${mono.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
