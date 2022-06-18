import { PageSection } from "../../components/PageSection";

export const Work = () => {
  return (
    <PageSection>
      <h2>My Work</h2>
      <p>
        I love solving problems. This paragraph should be about what I'm
        excited/passionate about in software development!
      </p>
      <p>
        I'm currently the Founding Engineer at{" "}
        <a href="https://beepboop.us/" target="_blank" rel="noreferrer">
          Beepboop
        </a>
        , an edTech startup based in New York City. In this role, I:
      </p>
      <ul>
        <li>Design, architect, and prototype new features (and apps!)</li>
        <li>Implement features quickly and iteratively in an agile workflow</li>
        <li>
          Work in both front-end (React) and back-end (Node.js/GCP) environments
        </li>
        <li>Refactor legacy code, manage tech debt, and maintain packages</li>
      </ul>
      <p>
        Before I worked at Beepboop, I was (at various points) a web development
        contractor for a marketing and PR firm, a freelance web developer, a
        computer science teacher, and a gym owner and manager. If you want the
        full rundown, you can check out my{" "}
        <a href="http://TODO:upload_resume" target="_blank" rel="noreferrer">
          resume
        </a>
        .
      </p>
    </PageSection>
  );
};
