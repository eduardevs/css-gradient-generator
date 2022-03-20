import React from 'react'

export default function Breakpoint({ primary, setPrimary, secondary, setSecondary, ternary, setTernary, breakpoint1, setBreakpoint1, breakpoint2, setBreakpoint2, breakpoint3, setBreakpoint3, colorBox, setDegree, degree, breakpointTitre, ...props }) {

    const handleChange = (e) => {
        const { value } = e.target

        if (primary) {
            setPrimary(value)
        } else if (secondary) {
            setSecondary(value)
        } else if (ternary) {
            setTernary(value)
        }
    }

    const handleBreakpoint = (e) => {
        const { value } = e.target

        if (breakpoint1) {
            setBreakpoint1(value)
        } else if (breakpoint2) {
            setBreakpoint2(value)
        } else if (breakpoint3) {
            setBreakpoint3(value)
        }
    }

    return (
        <div style={{
            width: "100%", border: "1px solid black", height: "150px"
        }} >

            {props.children !== 'setDegree' ?
                <div style={{ padding: "30px" }}>

                    <label htmlFor='breakpoint'>{breakpointTitre}</label>
                    <input style={{ width: "100%", marginTop: '5px' }} type='number' min='0' max='100' id='breakpoint' value={breakpoint1 ? breakpoint1 : (breakpoint2 ? breakpoint2 : breakpoint3)} onChange={handleBreakpoint} />
                    <label htmlFor=''>{props.children}</label>
                    < input style={{ width: "100%" }} type='color' name={primary ? primary : (secondary ? secondary : ternary)} value={primary ? primary : (secondary ? secondary : ternary)} onChange={handleChange} />
                </div>
                :
                <div style={{ padding: "30px" }}>
                    <label for="volume">Rotation</label>

                    <input type="range" id="volume" name="volume" style={{ width: "100%" }}
                        min="-360" max="360" onChange={(e) => setDegree(e.target.value)} />
                </div>
            }
        </div>
    )
}

