import React, { useState } from "react";
import About from "../../components/About/About";
import Back from "../../components/Back/Back";
import Comment from "../../components/Comment/Comment";
import Contact from "../../components/Contacts/Contact";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import Navbar from "../../components/Navbar/Navbar";
import Sidenav from "../../components/Sidebar/Sidenav";
import Skill from "../../components/Skill/Skill";
import Work from "../../components/Work/Work";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidenav
        isOpen={isOpen}
        toggle={toggle}
      />
      <Navbar toggle={toggle} />
      <Main />
      <About />
      <Skill />
      <Work />
      <Contact />
      <Comment />
      <Footer />
      <Back />
    </div>
  );
}
