import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";
import { PlayerContainer } from "./youtubePlayerStyled";

const YoutubePlayerBlock = ({ videoId }) => {
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  const opts = {
    height: isLandscape ? "100vh" : "390", // 🔥 Plein écran en mode paysage
    width: isLandscape ? "100vw" : "640",
    playerVars: {
      autoplay: 0,
      rel: 0,
      showinfo: 0,
      modestbranding: 1,
      fs: 1, // ✅ Autorise le mode plein écran
    },
  };

  return (
    <PlayerContainer isLandscape={isLandscape}>
      <YouTube videoId={videoId} opts={opts} />
    </PlayerContainer>
  );
};

YoutubePlayerBlock.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default YoutubePlayerBlock;
