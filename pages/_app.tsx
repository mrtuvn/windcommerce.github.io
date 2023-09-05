import "#/styles/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";

// Using next/font instead of a manual setup, we get:
// - significantly easier setup
// - automatic best font practices
// - reduced layout shift
// - no network requests from the browser
const primaryFont = Inter({
  subsets: ["latin"],
  variable: "--primary-font",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`main  flex h-full min-h-[100svh] flex-col bg-[#333] ${primaryFont.variable} font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}
