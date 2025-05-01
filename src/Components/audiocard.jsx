import React from "react";
import song from "../assets/song.mp3"; // Adjust the path as necessary

const AudioCard = () => {
  const audioRef = React.useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  React.useEffect(() => {
    if (!audioRef.current) {
      console.error("Audio element not found. Please check the audio source or ref.");
    }
  }, []);

  return (
    <main id="audio-container">
      <audio ref={audioRef}>
        <source
          src={song}
          type="audio/mpeg"
          />
        Your browser does not support the audio element.
      </audio>
      <section>
        <section style={{ display: "flex", gap: "10px" }}>
          <button className='audio-button' onClick={handlePlay}> Play </button>
          <button className='audio-button' onClick={handlePause} > Stop </button>
        </section>
      </section>
    </main>
  );
};

export default AudioCard; 