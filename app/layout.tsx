import React from "react";
import "../styles/globals.css";
import Footer from "./Footer";
import Header from "./Header";
import ReactQueryWrapper from "./ReactQueryWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <ReactQueryWrapper>
          {/* @ts-ignore */}
          <Header />
          <main className="relative z-10 mt-[-15em]">{children}</main>
          <Footer />
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
