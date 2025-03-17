import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { SoundBarContainer, Controls, Button, TimeDisplay, Loader } from "./soundBarStyled";
import { FaPlay, FaPause } from "react-icons/fa";

const audioFiles = import.meta.glob("../../assets/music/*voix+son.mp3");

import audioFileWithDescription from "../../assets/music/TOTALvoix+son.mp3";
import audioFileOriginal from "../../assets/music/R4DIC4NTES.mp3";

const SoundBarBlock = ({ selectedBlockOne, selectedBlockOneIndex }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);
  const [currentAudioSrc, setCurrentAudioSrc] = useState(audioFileOriginal);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // ✅ Labels supportant les langues
  const originalLabels = ["Version originale", "Original version"];
  const audiodescriptionLabels = ["Version audiodescription", "Audio description version"];

  // ✅ Vérification multi-langue
  const isOriginalVersion = originalLabels.includes(selectedBlockOne);
  const isAudiodescriptionVersion = audiodescriptionLabels.includes(selectedBlockOne);

  const getAudioSource = async () => {
    setIsLoading(true);

    if (isOriginalVersion) {
      return audioFileOriginal;
    } else if (isAudiodescriptionVersion) {
      if (selectedBlockOneIndex === 0) {
        return audioFileWithDescription;
      }

      const fileKey = `../../assets/music/${String(selectedBlockOneIndex).padStart(2, "0")}voix+son.mp3`;
      if (audioFiles[fileKey]) {
        const module = await audioFiles[fileKey]();
        return module.default;
      }
    }

    return audioFileOriginal;
  };

  useEffect(() => {
    const updateAudio = async () => {
      if (!audioRef.current) return;

      setIsLoading(true);
      const newAudioSrc = await getAudioSource();

      if (newAudioSrc !== currentAudioSrc) {
        const wasPlaying = isPlaying;
        audioRef.current.pause();
        setCurrentAudioSrc(newAudioSrc);

        audioRef.current.src = newAudioSrc;
        audioRef.current.load();

        audioRef.current.onloadedmetadata = () => {
          setIsLoading(false);

          // ✅ Gestion correcte du `currentTime` uniquement pour "Version originale"
          if (isOriginalVersion) {
            const newTime = selectedBlockOneIndex <= 1 ? 0 : (selectedBlockOneIndex - 1) * 60;
            if (newTime >= 0 && newTime < audioRef.current.duration) {
              audioRef.current.currentTime = newTime;
            }
          }

          if (wasPlaying) {
            audioRef.current.play().catch((err) => console.warn("Lecture bloquée :", err));
          }
        };
      } else {
        setIsLoading(false);
      }
    };

    updateAudio();
  }, [selectedBlockOne, selectedBlockOneIndex]);

  useEffect(() => {
    if (audioRef.current && isOriginalVersion) {
      const newTime = selectedBlockOneIndex <= 1 ? 0 : (selectedBlockOneIndex - 1) * 60;
      if (newTime >= 0 && newTime < audioRef.current.duration) {
        audioRef.current.currentTime = newTime;
      }
    }
  }, [selectedBlockOneIndex]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => console.warn("Lecture bloquée : interaction utilisateur requise."));
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
    }
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
        src={currentAudioSrc}
        crossOrigin="anonymous"
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      <TimeDisplay>
        {formatTime(currentTime)} / {duration > 0 ? formatTime(duration) : "00:00"}
      </TimeDisplay>

      <Controls>
        {isLoading ? (
          <Loader />
        ) : (
          <Button onClick={togglePlayPause} aria-label={isPlaying ? "Pause" : "Lecture"}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </Button>
        )}
      </Controls>
    </SoundBarContainer>
  );
};

SoundBarBlock.propTypes = {
  selectedBlockOne: PropTypes.string.isRequired,
  selectedBlockOneIndex: PropTypes.number.isRequired,
};

export default SoundBarBlock;
