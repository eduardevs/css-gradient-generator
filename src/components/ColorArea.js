import React from 'react'

export default function ColorArea({ primary, secondary, ternary, breakpoint1, breakpoint2, breakpoint3, degree }) {

    const gradient = `linear-gradient(${degree}deg, ${primary} ${breakpoint1}%, ${secondary} ${breakpoint2}%, ${ternary} ${breakpoint3}%)`

    return (
        <div style={{ width: "100%" }}>

            <div style={{ background: gradient, width: "100%", height: 300, marginTop: 50 }} />

            <p>background: {gradient};</p>

        </div>
    )
}
