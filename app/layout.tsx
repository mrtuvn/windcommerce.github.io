import { Metadata } from "next";
import Header from "#/ui/Header";
import Footer from "#/ui/Footer";
import Main from "#/components/commons/Main";

export const metadata: Metadata = {
  title: {
    default: "Next.js App Router",
    template: "%s | Next.js App Router",
  },
  description:
    "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body>
        <Header />

        <Main />
        {children}
        <Footer />
      </body>
    </html>
  );
}
