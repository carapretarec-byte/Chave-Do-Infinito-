import React, { useState, useRef } from 'react';

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const PauseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
);


const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(error => {
                console.error("Audio playback failed:", error);
            });
        }
        setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="https://cdn.pixabay.com/audio/2023/05/29/audio_381273918a.mp3" loop preload="auto" />
      <button
        onClick={togglePlayPause}
        className="fixed bottom-5 right-5 z-50 p-3 bg-amber-600/80 hover:bg-amber-500 text-white rounded-full shadow-lg shadow-black/50 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-400"
        aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </>
  );
};

export default AudioPlayer;