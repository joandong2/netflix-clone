import React from "react";
import "../styles/globals.css";
import Sidebar from "./Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <Sidebar />
        <main className="ml-[120px] mt-[40px] gh">{children}</main>
        {/* @ts-ignore */}
      </body>
    </html>
  );
}
