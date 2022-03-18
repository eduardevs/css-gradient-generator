import logo from './logo.svg';
import './App.css';
import Breakpoint from './components/Breakpoint';
import ColorArea from './components/ColorArea'
import React, { useState } from 'react'


function App() {
  const [primary, setPrimary] = useState('yellow')
  const [secondary, setSecondary] = useState('blue')
  const [ternary, setTernary] = useState('red')

  const [degree, setDegree] = useState(0)

  const [breakpoint1, setBreakpoint1] = useState(1)
  const [breakpoint2, setBreakpoint2] = useState(50)
  const [breakpoint3, setBreakpoint3] = useState(100)
  const colorBox = true


  // const getColor = () => {

  // }
  // console.log(breakpoint1)

  //breakpoint2={breakpoint2} breakpoint3={breakpoint3} setBreakpoint3={setBreakpoint3}

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


        {/*  <Breakpoint breakpoint="breakpoint 1" >Breakpoint 3</Breakpoint>
        <Breakpoint breakpoint="breakpoint 1" >Breakpoint 4</Breakpoint> */}
        <ColorArea style={{ display: 'flex', justifyContent: 'center' }} primary={primary} secondary={secondary} ternary={ternary} breakpoint1={breakpoint1} breakpoint2={breakpoint2} breakpoint3={breakpoint3} degree={degree} />
      </div>
    </>
  );
}

export default App;
