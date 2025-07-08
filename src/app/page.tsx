"use client";
import { useEffect, useState } from "react";
import { Content } from "./components/Home/Content";
import { Hero } from "./components/Home/Hero";
import { Navbar } from "./components/shared/Navbar";

// ⬅️ Declarar fuera del componente
type View = "hero" | "content";

export default function Home() {
  const [view, setView] = useState<View>("hero");
  const [english, setEnglish] = useState(true);
  const toggleLanguage = () => {
    setEnglish(!english);
  };
  const renderView = (view: View): React.ReactNode => {
    console.log(view);
    switch (view) {
      case "content":
        return (
          <Content
            setView={setView}
            english={english}
            toggleLanguage={toggleLanguage}
          />
        );
      case "hero":
        return (
          <Hero
            setView={setView}
            english={english}
            toggleLanguage={toggleLanguage}
          />
        );
      default:
        return (
          <Hero
            setView={setView}
            english={english}
            toggleLanguage={toggleLanguage}
          />
        );
    }
  };

  useEffect(() => {
    renderView(view);
  }, [view]);
  return (
    <div>
      <Navbar />
      {renderView(view)}
    </div>
  );
}
