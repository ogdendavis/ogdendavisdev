import React from 'react';

import { About } from './blocks/About';
import { Contact } from "./blocks/Contact";
import { Intro } from './blocks/Intro';
import { Play } from './blocks/Play';
import { Work } from './blocks/Work';

function App() {
  return (
    <div>
      <Intro />
      <About />
      <Work />
      <Play />
      <Contact />
    </div>
  );
}

export default App;
