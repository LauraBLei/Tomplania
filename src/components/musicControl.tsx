import { useState, useEffect } from "react";

export const MusicControl = () => {
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    const musicPlayer = document.getElementById(
      "music-player"
    ) as HTMLAudioElement;
    if (musicPlayer) {
      musicPlayer.volume = volume / 100; // Convert percentage to a 0-1 scale for audio element
    }
  }, [volume]); // Effect runs when the volume state changes

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(event.target.value, 10));
  };
  return (
    <div>
      <label className="TextDark">Volume Control:</label>
      <input
        type="range"
        id="volume-slider"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
      />
      <span id="volume-value"></span>
    </div>
  );
};
