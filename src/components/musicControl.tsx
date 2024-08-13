import { useEffect, useContext } from "react";
import { GameContext } from "../hooks/gameContext";
import { MonsterNames } from "../gameData/Enemies/enemies";

export const MusicControl = () => {
  const { isPlaying, setIsPlaying, volume, setVolume, fighting, enemy } =
    useContext(GameContext);

  useEffect(() => {
    const musicPlayer = document.getElementById(
      "music-player"
    ) as HTMLAudioElement;

    if (musicPlayer) {
      musicPlayer.volume = volume / 100;
      if (isPlaying) {
        musicPlayer.play();
        if (fighting && enemy === MonsterNames.SixthBoss) {
          musicPlayer.src = "./assets/music/dragonFight.mp3";
        } else if (fighting) {
          musicPlayer.src = "./assets/music/combat.mp3";
        } else {
          musicPlayer.src = "./assets/music/reg.mp3";
        }
      } else {
        musicPlayer.pause();
      }
    }
  }, [volume, isPlaying, fighting, enemy]);

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
