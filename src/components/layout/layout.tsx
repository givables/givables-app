import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Navbar />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>
  )
}