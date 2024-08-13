import { useState, useEffect } from "react";

export const MusicControl = () => {
  const [volume, setVolume] = useState(25);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const musicPlayer = document.getElementById(
      "music-player"
    ) as HTMLAudioElement;

    if (musicPlayer) {
      musicPlayer.volume = volume / 100; // Convert percentage to a 0-1 scale for audio element
      if (isPlaying) {
        musicPlayer.play();
      } else {
        musicPlayer.pause();
      }
    }
  }, [volume, isPlaying]); // Effect runs when the volume or isPlaying state changes

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(event.target.value, 10));
  };

  const handleMusicToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-4">
        <label className="TextDark">Volume Control:</label>
        <input
          type="range"
          id="volume-slider"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
        <span className="TextDark">{volume}%</span>
      </div>

      <div className="flex gap-4">
        <label className="TextDark" htmlFor="music-toggle">
          Music On/Off
        </label>
        <input
          className="w-5"
          type="checkbox"
          id="music-toggle"
          checked={isPlaying}
          onChange={handleMusicToggle}
        />
      </div>
    </div>
  );
};
