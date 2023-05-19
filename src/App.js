import React from 'react'
import './App.css'
import SoundPad from './components/SoundPad'
import Sample0 from './sounds/sample0.mp3'
import Sample1 from './sounds/sample1.mp3'
import Sample2 from './sounds/sample2.mp3'
import Sample3 from './sounds/sample3.mp3'
import Sample4 from './sounds/sample4.mp3'
import Sample5 from './sounds/sample5.mp3'
import Sample6 from './sounds/sample6.mp3'
import Sample7 from './sounds/sample7.mp3'
import Sample8 from './sounds/sample8.mp3'
import Sample9 from './sounds/sample9.mp3'
import Sample10 from './sounds/sample10.mp3'
import Sample11 from './sounds/sample11.mp3'
import Sample12 from './sounds/sample12.mp3'
import Sample13 from './sounds/sample13.mp3'
import Sample14 from './sounds/sample14.mp3'
import Sample15 from './sounds/sample15.mp3'
import Sample16 from './sounds/sample16.mp3'
import Sample17 from './sounds/sample17.mp3'
import Sample18 from './sounds/sample18.mp3'
import Sample19 from './sounds/sample19.mp3'
import Sample20 from './sounds/sample20.mp3'
import Sample21 from './sounds/sample21.mp3'
import Sample22 from './sounds/sample22.mp3'
import Sample23 from './sounds/sample23.mp3'
import Sample24 from './sounds/sample24.mp3'

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>The Simpsons</h1>
        <p>sound sampler</p>
        <SoundPad
          sound1Url={Sample0}
          sound2Url={Sample1}
          sound3Url={Sample2}
          sound4Url={Sample3}
          sound5Url={Sample4}
          sound6Url={Sample5}
          sound7Url={Sample6}
          sound8Url={Sample7}
          sound9Url={Sample8}
          sound10Url={Sample9}
          sound11Url={Sample10}
          sound12Url={Sample11}
          sound13Url={Sample12}
          sound14Url={Sample13}
          sound15Url={Sample14}
          sound16Url={Sample15}
          sound17Url={Sample16}
          sound18Url={Sample17}
          sound19Url={Sample18}
          sound20Url={Sample19}
          sound21Url={Sample20}
          sound22Url={Sample21}
          sound23Url={Sample22}
          sound24Url={Sample23}
          sound25Url={Sample24}
          
        />
      </div>
    </div>
  )
}

export default App
