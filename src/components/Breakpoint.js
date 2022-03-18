import React, { useEffect } from 'react'

export default function Breakpoint({ primary, setPrimary, secondary, setSecondary, ternary, setTernary, breakpoint1, setBreakpoint1, breakpoint2, setBreakpoint2, breakpoint3, setBreakpoint3, colorBox, setDegree, degree, ...props }) {


    const handleChange = (e) => {
        const { value } = e.target

        if (primary) {
            setPrimary(value)
            // console.log(primary)
        } else if (secondary) {
            setSecondary(value)
            // console.log(secondary)
        } else if (ternary) {
            setTernary(value)
        }
    }


    const handleBreakpoint = (e) => {
        const { value } = e.target

        if (breakpoint1) {
            setBreakpoint1(value)
            console.log('break1')
        } else if (breakpoint2) {
            setBreakpoint2(value)
        } else if (breakpoint3) {
            setBreakpoint3(value)
        }
    }


    return (
        <div style={{
            width: "50%"
        }}>

            {props.children !== 'setDegree' ?
                <>
                    < input type='color' name={primary ? primary : (secondary ? secondary : ternary)} value={primary ? primary : (secondary ? secondary : ternary)} onChange={handleChange} />
                    <label htmlFor=''>color</label>

                    <input type='number' min='0' max='100' id='breakpoint' value={breakpoint1 ? breakpoint1 : (breakpoint2 ? breakpoint2 : breakpoint3)} onChange={handleBreakpoint} />
                    <label htmlFor='breakpoint'>breakpoint</label>
                </>
                :
                <>
                    <input type="range" id="volume" name="volume"
                        min="0" max="360" onChange={(e) => setDegree(e.target.value)} />
                    <label for="volume">degrees</label>
                </>
            }
        </div>
    )
}


// TODO: MAKE AN INPUT THAT CAN CHANGE 