import { PageSection } from "../../components/PageSection";

import { AboutPortrait } from "./AboutPortrait";

export const About = () => {
  return (
    <PageSection darkMode>
      <h2>About Me</h2>
      <p>
        I'm a full-stack software developer, urban hiker, and voracious reader.
        I work as the Founding Engineer for{" "}
        <a href="https://beepboop.us/" target="_blank" rel="noreferrer">
          Beepboop
        </a>
        , one of New York's{" "}
        <a
          href="https://www.edutech.coffee/post/101-top-edtech-startups-companies-new-york"
          target="_blank"
          rel="noreferrer"
        >
          top edTech startups
        </a>
        , and I live in Brooklyn with my wife and our two dogs.
      </p>
      <AboutPortrait />
    </PageSection>
  );
};
