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
        <main className="ml-[120px] mt-[40px] relative">
          {children}
          <Sidebar />
        </main>

        {/* @ts-ignore */}
      </body>
    </html>
  );
}
