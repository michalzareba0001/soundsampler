import React from 'react';
import './SoundPad.css'

const SoundPad = ({ sound1Url,
    sound2Url,
    sound3Url,
    sound4Url,
    sound5Url,
    sound6Url,
    sound7Url,
    sound8Url,
    sound9Url,
    sound10Url,
    sound11Url,
    sound12Url,
    sound13Url,
    sound14Url,
    sound15Url,
    sound16Url,
    sound17Url,
    sound18Url,
    sound19Url,
    sound20Url,
    sound21Url,
    sound22Url,
    sound23Url,
    sound24Url,
    sound25Url }) => {
  const handlePlay = (url) => {
    const audio = new Audio(url);
    audio.play();
  };

  return (
    <div className="sound-pad">
      <button className='sound-button' onClick={() => handlePlay(sound1Url)}>1</button>
      <button className='sound-button' onClick={() => handlePlay(sound2Url)}>2</button>
      <button className='sound-button' onClick={() => handlePlay(sound3Url)}>3</button>
      <button className='sound-button' onClick={() => handlePlay(sound4Url)}>4</button>
      <button className='sound-button' onClick={() => handlePlay(sound5Url)}>5</button>
      <button className='sound-button' onClick={() => handlePlay(sound6Url)}>6</button>
      <button className='sound-button' onClick={() => handlePlay(sound7Url)}>7</button>
      <button className='sound-button' onClick={() => handlePlay(sound8Url)}>8</button>
      <button className='sound-button' onClick={() => handlePlay(sound9Url)}>9</button>
      <button className='sound-button' onClick={() => handlePlay(sound10Url)}>10</button>
      <button className='sound-button' onClick={() => handlePlay(sound11Url)}>11</button>
      <button className='sound-button' onClick={() => handlePlay(sound12Url)}>12</button>
      <button className='sound-button' onClick={() => handlePlay(sound13Url)}>13</button>
      <button className='sound-button' onClick={() => handlePlay(sound14Url)}>14</button>
      <button className='sound-button' onClick={() => handlePlay(sound15Url)}>15</button>
      <button className='sound-button' onClick={() => handlePlay(sound16Url)}>16</button>
      <button className='sound-button' onClick={() => handlePlay(sound17Url)}>17</button>
      <button className='sound-button' onClick={() => handlePlay(sound18Url)}>18</button>
      <button className='sound-button' onClick={() => handlePlay(sound19Url)}>19</button>
      <button className='sound-button' onClick={() => handlePlay(sound20Url)}>20</button>
      <button className='sound-button' onClick={() => handlePlay(sound21Url)}>21</button>
      <button className='sound-button' onClick={() => handlePlay(sound22Url)}>22</button>
      <button className='sound-button' onClick={() => handlePlay(sound23Url)}>23</button>
      <button className='sound-button' onClick={() => handlePlay(sound24Url)}>24</button>
      <button className='sound-button' onClick={() => handlePlay(sound25Url)}>25</button>
      
    </div>
  );
};

export default SoundPad;
