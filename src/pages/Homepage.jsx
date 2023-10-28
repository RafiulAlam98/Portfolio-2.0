/* eslint-disable react/no-unknown-property */

import Blogs from "../component/ui/Blogs";
import Header from "../component/ui/Header";
import Projects from "../component/ui/Projects";
import Skills from "../component/ui/Skills";

export default function Homepage() {
  return (
    <>
      <Header />
      <Skills />
      <Projects />
      <Blogs />
    </>
  );
}
