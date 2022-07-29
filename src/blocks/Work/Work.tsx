import { PageSection } from "../../components/PageSection";

import { WorkPortrait } from "./WorkPortrait";

export const Work = () => {
  return (
    <PageSection portrait={<WorkPortrait />}>
      <h2>My Work</h2>
      <p>
        I love writing software because the process combines all the best parts
        of helping a friend, solving a puzzle, and writing a novel: I get to
        create solutions to real-world problems that people face, engage my
        creative thinking and problem-solving skills, and craft an experience
        and message that uniquely guide the end-user through the application.
      </p>
      <p>
        As a full-stack web application engineer, I get to do all of that while
        working with cutting-edge web technology that's always evolving -- the
        continuous process of learning new things and applying that knowledge
        keeps me engaged, motivated, and having fun with my work!
      </p>
      <p>
        I'm currently the Founding Engineer at{" "}
        <a href="https://beepboop.us/" target="_blank" rel="noreferrer">
          Beepboop
        </a>
        , an edTech startup based in New York City. Before I became a software
        developer, I was (at various points) a web development contractor for a
        marketing and PR firm, a freelance web developer, a computer science
        teacher, and a gym owner and manager.
      </p>
      <p>
        Want to learn more? Check out my{" "}
        <a
          href="https://www.linkedin.com/in/ogdendavis/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/ogdendavis"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        profiles.
      </p>
    </PageSection>
  );
};
