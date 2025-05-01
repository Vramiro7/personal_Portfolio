import React from "react";
import song from "../assets/song.mp3"; // Adjust the path as necessary
import AudioMotionAnalyzer from 'audiomotion-analyzer';

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
      return;
    }

      const visualizer = new AudioMotionAnalyzer(document.getElementById("visualizer"), {
        audioCtx: audioRef.current.context || undefined,
        source: audioRef.current,
        barColor: "#00ff00",
        barWidth: 2,
        barSpacing: 1,
      });
  
      return () => {
        visualizer.destroy();
      };
    }, []);
  
    return (
      <main>
        <audio ref={audioRef} src={song} />
        <div
          id="visualizer"
          style={{
            width: "800px",
            height: "400px",
            backgroundColor: "#000",
            borderRadius: "10px",
          }}
        ></div>
        <section id="button-container" style={{ display: "flex", gap: "10px" }}>
          <button className="audio-button" onClick={handlePlay}>
            Play
          </button>
          <button className="audio-button" onClick={handlePause}>
            Stop
          </button>
        </section>
      </main>
  );
};

export default AudioCard; 