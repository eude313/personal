import React from "react";
import About from "../../components/About/About";
import Main from "../../components/Main/Main";
import Navbar from "../../components/Navbar/Navbar";
export default function Home() {
  return (
    <>
      <div>
        <Navbar />

        <Main />
        <About />
      </div>
    </>
  );
}
