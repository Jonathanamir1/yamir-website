"use client"; // Required to use usePathname()
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current route
  const isNotFoundPage = pathname === "/not-found"; // Check if it's the 404 page

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>YAmir Website</title>
      </head>
      <body className=' h-screen'>
        {/*{!isNotFoundPage && <Navbar />}  Hide Navbar on 404 page */}
        {children}
        {/*{!isNotFoundPage && <Footer />}  Hide Footer on 404 page */}
      </body>
    </html>
  );
}