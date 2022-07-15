import { PageSection } from "../../components/PageSection";

export const Contact = () => {
  return (
    <PageSection>
      <h2>Contact</h2>
      <p>
        If you're a non-creepy stranger on the internet who wants to get in
        touch with me, then your best shot is email:{" "}
        <a href="mailto:lucas@ogdendavis.com?subject=Hi, I'm a stranger from the internet">
          lucas@ogdendavis.com
        </a>
      </p>
    </PageSection>
  );
};
