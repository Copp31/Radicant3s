import { useState, useEffect } from "react";
import "./App.css";
import HeaderBlock from "./components/Header/headerBlock.jsx";
import LangageSwitcherBlock from "./components/LangageSwitcher/langageSwitcherBlock.jsx"; 
import SoundBarBlock from "./components/SoundBar/soundBarBlock.jsx";
import MusicMenuBlock from "./components/MusicMenu/musicMenuBlock.jsx";
import info from "./assets/text/information.json"; 
import DetailedTextBlock from "./components/DetailedTextBlock/detailedTextBlock.jsx";
import TextBlock from "./components/TextBlock/textBlock.jsx";
import FooterBlock from "./components/Footer/footerBlock.jsx";
import YoutubePlayerBlock from "./components/YoutubePlayerBlock/youtubePlayerBlock.jsx";


function App() {

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || (navigator.language.startsWith("fr") ? "fr" : "en")
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const defaultBlockOne = info.musicMenu[language]?.blockOne[0] || "Default block";
  const [selectedBlockOne, setSelectedBlockOne] = useState(defaultBlockOne);
  const [selectedBlockTwo, setSelectedBlockTwo] = useState("FULL");
  const [selectedBlockOneIndex, setSelectedBlockOneIndex] = useState(0);

  console.log(selectedBlockOne, selectedBlockTwo, selectedBlockOneIndex)

  useEffect(() => {
    setSelectedBlockOne(info.musicMenu[language]?.blockOne[0] || "Default block");
    setSelectedBlockTwo("FULL");
    setSelectedBlockOneIndex(0);
  }, [language]);

  return (
    <div>
      <HeaderBlock role="banner" language={language} />
      
      {/* ✅ Language Switcher Below the Header */}
      <LangageSwitcherBlock language={language} setLanguage={setLanguage} />

      <main role="main" aria-label={language === "fr" ? "Contenu principal" : "Main content"}>
        <SoundBarBlock
          selectedBlockOne={selectedBlockOne}
          selectedBlockTwo={selectedBlockTwo}
          selectedBlockOneIndex={selectedBlockOneIndex}
          language={language}
        />

        <MusicMenuBlock
          selectedBlockOne={selectedBlockOne}
          selectedBlockTwo={selectedBlockTwo}
          setSelectedBlockOne={setSelectedBlockOne}
          setSelectedBlockTwo={setSelectedBlockTwo}
          setSelectedBlockOneIndex={setSelectedBlockOneIndex}
          language={language}
        />
      </main>

      <TextBlock language={language} />
      <DetailedTextBlock language={language} />
      <YoutubePlayerBlock videoId="9RgicNRgNIM" /> 
      <FooterBlock language={language} />
    </div>
  );
}

export default App;
