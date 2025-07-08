import Image from "next/image";
import { LayoutContainer } from "../../shared/LayoutContainer";
import styles from "./Content.module.scss";
import { useState } from "react";
import { BiCheckCircle, BiLeftArrowAlt } from "react-icons/bi";
import { Technologies } from "../../../utils/Technologies";
import { ContentTextEn, ContentTextEs } from "../../../utils/ContentTexts";
import { getSectionById } from "../../../utils/Knowledge";
import { getCertificationsById } from "../../../utils/Certifications";
import { getProjectsByProfileLabel } from "../../../utils/Projects";
import { Button } from "../../shared/Button";

type ContentProps = {
  setView: (view: "hero" | "content") => void;
  english: boolean;
  toggleLanguage: () => void;
};

const Content = ({ setView, english, toggleLanguage }: ContentProps) => {
  const texts = english ? ContentTextEn : ContentTextEs;

  // Render content
  const [renderContent, setRenderContent] = useState("frontend");
  const technologies = Technologies.filter((technology) =>
    technology.profileLabel.includes(renderContent)
  );
  const skills = getSectionById(renderContent, english)!;
  const certifications = getCertificationsById(renderContent, english) as {
    name: string;
    tags: string[];
  }[];
  const projects = getProjectsByProfileLabel(renderContent, english);
  console.log("tech stack: ", technologies);
  console.log("skills: ", skills);
  console.log("certifications: ", certifications);
  return (
    <div className={styles.Content}>
      <div className={styles.contentOverlay}></div>
      <div className={styles.contentBg}>
        <div className={styles.contentBg__gradientContainer}>
          <Image src="/images/bg-png1.png" alt="bg" fill />
        </div>
      </div>
      <LayoutContainer>
        <div className={styles.container}>
          <div className={styles.languageButtonContainer}>
            <Button
              margin="0"
              color={"transparentWhite"}
              font={"xsmall"}
              action={() => toggleLanguage()}
            >
              {english ? "Español" : "English"}
            </Button>
          </div>
          <Button
            margin="0"
            color={"transparentWhite"}
            font={"xsmall"}
            action={() => setView("hero")}
          >
            <BiLeftArrowAlt className={styles.buttonIcon} /> {texts.backbutton}
          </Button>
          <div className={styles.contentMenu}>
            {texts.labels.map((label) => (
              <p
                key={label.id}
                onClick={() => setRenderContent(label.id)}
                className={`${styles.contentMenuButton} ${
                  renderContent == label.id
                    ? styles.contentMenuButton__active
                    : styles.contentMenuButton__inactive
                }`}
              >
                {label.name}
              </p>
            ))}
          </div>
          <div className={styles.description}>
            <h4 className={styles.descriptionTitle}>Main Skills</h4>

            <p className={styles.descriptionText}>{skills.description}</p>
            <h4 className={styles.descriptionTitle}>Main Technologies</h4>
            {technologies.map((technology) => (
              <p key={technology.id} className={styles.descriptionText}>
                {technology.name}
              </p>
            ))}
            <h4 className={styles.descriptionTitle}>Certifications</h4>
            <div className={styles.certificationsContainer}>
              {certifications.map((certification) => (
                <p
                  key={certification.name}
                  className={`${styles.descriptionText} ${styles.certificationText}`}
                >
                  <BiCheckCircle className={styles.checkIcon} />{" "}
                  {certification.name}
                </p>
              ))}
            </div>

            {projects.length > 0 && (
              <h4 className={styles.descriptionTitle}>Projects</h4>
            )}
            {projects.length > 0 && (
              <div className={styles.projectsContainer}>
                {projects.map((project) => (
                  <div key={project.name} className={styles.projectBox}>
                    <div className={styles.projectImageContainer}>
                      <Image
                        src={`/images/${project.image}`}
                        alt={project.name}
                        fill
                        className={styles.projectImage}
                      />
                    </div>
                    <p className={styles.projectTitle}>{project.name}</p>
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                    <div className={styles.projectButtonContainer}>
                      <Button
                        margin="0"
                        color={"transparentPink"}
                        font={"big"}
                        action={() => window.open(project.link, "_blank")}
                      >
                        Project View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};

export { Content };
