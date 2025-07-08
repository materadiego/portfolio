import Image from "next/image";
import styles from "./Hero.module.scss";
import { LayoutContainer } from "../../shared/LayoutContainer";
import { SiLinkedin } from "react-icons/si";
import { FaPlus } from "react-icons/fa6";
import { HeroTextEn, HeroTextEs } from "../../../utils/HeroTexts";
import { Button } from "../../shared/Button";

type HeroProps = {
  setView: (view: "hero" | "content") => void;
  english: boolean;
  toggleLanguage: () => void;
};

const Hero = ({ setView, english, toggleLanguage }: HeroProps) => {
  const texts = english ? HeroTextEn : HeroTextEs;

  return (
    <div className={styles.Hero}>
      <LayoutContainer>
        <div className={styles.content}>
          <h1 className={styles.title}>{texts.title}</h1>
          <p className={styles.description}>{texts.description1}</p>
          <p className={styles.description}>{texts.description2}</p>
          <Button
            margin="4lvw 0 0"
            color={"transparentPink"}
            font={"big"}
            action={() => setView("content")}
          >
            <FaPlus
              className={`${styles.buttonIcon} ${styles.buttonIcon__more}`}
            />{" "}
            {texts.button1}
          </Button>
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
        </div>
      </LayoutContainer>
      <div className={styles.heroBgContainer}>
        <div className={styles.heroBg}>
          <div className={styles.heroBgOverlay}></div>
          <Image
            src="/images/hero-bg.JPG"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            className={styles.heroImage}
          />
          <div className={styles.profileContainer}>
            <h2 className={styles.profileContainerTitle}>Diego Matera</h2>
            <p className={styles.profileContainerText}>
              Frontend Developer | Process Automation{" "}
            </p>
            <p className={styles.profileContainerText}>
              Prompt Engineering | Photo & Video Editor
            </p>
            <Button
              color={"transparentWhite"}
              font={"small"}
              margin="2lvw 0 0"
              action={() => setView("content")}
            >
              <SiLinkedin
                className={`${styles.buttonIcon} ${styles.buttonIcon__linkedin}`}
              />{" "}
              {texts.button2}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
