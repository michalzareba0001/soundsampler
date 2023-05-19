import React from 'react';
import Sound from 'react-sound';

const SoundPad = ({ sound1Url, sound2Url, sound3Url }) => {
  const handlePlay = (url) => {
    const audio = new Audio(url);
    audio.play();
  };

  return (
    <div className="sound-pad">
      <button onClick={() => handlePlay(sound1Url)}>Sound 1</button>
      <button onClick={() => handlePlay(sound2Url)}>Sound 2</button>
      <button onClick={() => handlePlay(sound3Url)}>Sound 3</button>
    </div>
  );
};

export default SoundPad;