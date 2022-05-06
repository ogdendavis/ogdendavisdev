import React from "react";

import { About } from "./blocks/About";
import { Contact } from "./blocks/Contact";
import { Intro } from "./blocks/Intro";
import { Play } from "./blocks/Play";
import { Work } from "./blocks/Work";

import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <Intro />
      <About />
      <Work />
      <Play />
      <Contact />
    </Layout>
  );
}

export default App;
