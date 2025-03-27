import "./globals.css";
import LayoutWrapper from "../components/LayoutWrapper";
import { Suspense } from "react";
import Loading from "../components/Loading";
import Head from "next/head";

export const metadata = {
  title: "Pokémon Search",
  description: "Search and explore Pokémon using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </Head>
    <body className="bg-gray-300 min-h-screen ">
      <LayoutWrapper>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </LayoutWrapper>
    </body>
  </html>
  );
}
