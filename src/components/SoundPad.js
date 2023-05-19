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
      <button className='sound-button' onClick={() => handlePlay(sound1Url)}>Sound 1</button>
      <button className='sound-button' onClick={() => handlePlay(sound2Url)}>Sound 2</button>
      <button className='sound-button' onClick={() => handlePlay(sound3Url)}>Sound 3</button>
      <button className='sound-button' onClick={() => handlePlay(sound4Url)}>Sound 4</button>
      <button className='sound-button' onClick={() => handlePlay(sound5Url)}>Sound 5</button>
      <button className='sound-button' onClick={() => handlePlay(sound6Url)}>Sound 6</button>
      <button className='sound-button' onClick={() => handlePlay(sound7Url)}>Sound 7</button>
      <button className='sound-button' onClick={() => handlePlay(sound8Url)}>Sound 8</button>
      <button className='sound-button' onClick={() => handlePlay(sound9Url)}>Sound 9</button>
      <button className='sound-button' onClick={() => handlePlay(sound10Url)}>Sound 10</button>
      <button className='sound-button' onClick={() => handlePlay(sound11Url)}>Sound 11</button>
      <button className='sound-button' onClick={() => handlePlay(sound12Url)}>Sound 12</button>
      <button className='sound-button' onClick={() => handlePlay(sound13Url)}>Sound 13</button>
      <button className='sound-button' onClick={() => handlePlay(sound14Url)}>Sound 14</button>
      <button className='sound-button' onClick={() => handlePlay(sound15Url)}>Sound 15</button>
      <button className='sound-button' onClick={() => handlePlay(sound16Url)}>Sound 16</button>
      <button className='sound-button' onClick={() => handlePlay(sound17Url)}>Sound 17</button>
      <button className='sound-button' onClick={() => handlePlay(sound18Url)}>Sound 18</button>
      <button className='sound-button' onClick={() => handlePlay(sound19Url)}>Sound 19</button>
      <button className='sound-button' onClick={() => handlePlay(sound20Url)}>Sound 20</button>
      <button className='sound-button' onClick={() => handlePlay(sound21Url)}>Sound 21</button>
      <button className='sound-button' onClick={() => handlePlay(sound22Url)}>Sound 22</button>
      <button className='sound-button' onClick={() => handlePlay(sound23Url)}>Sound 23</button>
      <button className='sound-button' onClick={() => handlePlay(sound24Url)}>Sound 24</button>
      <button className='sound-button' onClick={() => handlePlay(sound25Url)}>Sound 25</button>
      
    </div>
  );
};

export default SoundPad;
