import React from 'react'
import './App.css'
import SoundPad from './components/SoundPad'
import Sample0 from './sounds/sample0.mp3'
import Sample1 from './sounds/sample1.mp3'
import Sample2 from './sounds/sample2.mp3'

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Sampler 2.0</h1>
        <p>This is App.js - main-container</p>
        <SoundPad
          sound1Url={Sample0}
          sound2Url={Sample1}
          sound3Url={Sample2}
        />
      </div>
    </div>
  )
}

export default App
