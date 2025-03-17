import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";
import {
  SoundBarContainer,
  SoundBarTitle,
  Controls,
  Button,
  ProgressBar,
  TimeDisplay
} from "./soundBarStyled";
import { FaPlay, FaPause } from "react-icons/fa";
import audioFile from "../../assets/music/R4DIC4NTES.mp3"; 

const SoundBarBlock = ({ selectedTitle, selectedBlockOneIndex, selectedBlockTwoIndex, setSelectedBlockTwo, isUserSelecting }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // ✅ Priorise `selectedBlockOneIndex` sur `selectedBlockTwoIndex`
  const activeIndex = selectedBlockOneIndex !== null ? selectedBlockOneIndex : selectedBlockTwoIndex;
  
  useEffect(() => {
    if (audioRef.current && activeIndex !== null && !isUserSelecting) {
      const newTime = activeIndex * 60;  // ✅ Convert index to seconds
      if (newTime < duration) {
        audioRef.current.currentTime = newTime;
      }
    }
  }, [activeIndex, duration, isUserSelecting]);

  // ✅ Met à jour `selectedBlockTwo` uniquement si `selectedBlockOneIndex` est null
  useEffect(() => {
    const handleUpdate = () => {
      if (audioRef.current && !isUserSelecting && selectedBlockOneIndex === null) {
        const currentMinute = Math.floor(audioRef.current.currentTime / 60);
        setSelectedBlockTwo(currentMinute);
      }
    };

    audioRef.current?.addEventListener("timeupdate", handleUpdate);
    return () => audioRef.current?.removeEventListener("timeupdate", handleUpdate);
  }, [setSelectedBlockTwo, isUserSelecting, selectedBlockOneIndex]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => console.error("Playback failed:", error));
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;

    setCurrentTime(audioRef.current.currentTime);
    setProgress((audioRef.current.currentTime / duration) * 100);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (event) => {
    if (!audioRef.current) return;

    const newTime = (event.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(event.target.value);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <SoundBarContainer>
      <audio
        ref={audioRef}
        src={audioFile} 
        crossOrigin="anonymous"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      ></audio>

      <SoundBarTitle>{selectedTitle}</SoundBarTitle>
      <ProgressBar type="range" value={progress} onChange={handleSeek} />

      <TimeDisplay>
        {formatTime(currentTime)} / {formatTime(duration)}
      </TimeDisplay>

      <Controls>
        <Button onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </Button>
      </Controls>
    </SoundBarContainer>
  );
};

SoundBarBlock.propTypes = {
  selectedTitle: PropTypes.string.isRequired,
  selectedBlockOneIndex: PropTypes.number, 
  selectedBlockTwoIndex: PropTypes.number, 
  setSelectedBlockTwo: PropTypes.func.isRequired, 
  isUserSelecting: PropTypes.bool.isRequired, 
};

export default SoundBarBlock;

