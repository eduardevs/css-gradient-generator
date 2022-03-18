import './App.css';
import Breakpoint from './components/Breakpoint';
import ColorArea from './components/ColorArea'
import React, { useState } from 'react'


function App() {

  const [primary, setPrimary] = useState('#ebdc34')
  const [secondary, setSecondary] = useState('#1827c9')
  const [ternary, setTernary] = useState('#f51616')

  const [degree, setDegree] = useState(-180)

  const [breakpoint1, setBreakpoint1] = useState(1)
  const [breakpoint2, setBreakpoint2] = useState(50)
  const [breakpoint3, setBreakpoint3] = useState(100)

  const colorBox = true


  return (
    <>
      <h1>CSS Gradient Creator</h1>
      <div className="App">

        <Breakpoint style={{ width: "50%" }} primary={primary} setPrimary={setPrimary} setBreakpoint1={setBreakpoint1} breakpoint1={breakpoint1} colorBox={colorBox}>
          Couleur 1
        </Breakpoint>

        <Breakpoint style={{ width: "50%" }} secondary={secondary} setSecondary={setSecondary} setBreakpoint2={setBreakpoint2} breakpoint2={breakpoint2} colorBox={colorBox}>
          Couleur 2
        </Breakpoint>

        <Breakpoint style={{ width: "50%" }} ternary={ternary} setTernary={setTernary} setBreakpoint3={setBreakpoint3} breakpoint3={breakpoint3} colorBox={colorBox}>
          Couleur 3
        </Breakpoint>

        <Breakpoint style={{ width: "50%" }} setDegree={setDegree} degree={degree}>
          setDegree
        </Breakpoint>

        <ColorArea style={{ display: 'flex', justifyContent: 'center' }} primary={primary} secondary={secondary} ternary={ternary} breakpoint1={breakpoint1} breakpoint2={breakpoint2} breakpoint3={breakpoint3} degree={degree} />
      </div>
    </>
  );
}

export default App;
