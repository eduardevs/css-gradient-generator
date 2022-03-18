import React from 'react'

export default function ColorArea({ primary, secondary, ternary, breakpoint1, breakpoint2, breakpoint3, degree }) {



    // const gradient = `linear-gradient(${primary} ${breakpoint1}%, ${secondary} ${breakpoint2}%, ${ternary} ${breakpoint3}%)`

    const gradient = `linear-gradient(${degree}deg, ${primary} ${breakpoint1}%, ${secondary} ${breakpoint2}%, ${ternary} ${breakpoint3}%)`

    // console.log(degree)

    return (
        <div style={{ width: 450 }}>

            <div style={{ background: gradient, width: 500, height: 300, marginTop: 50 }} />

            <p>{gradient}</p>

            {/* {secondary && <div style={{ backgroundColor: secondary, width: 150, height: 300, marginTop: 50 }} />} */}
        </div>
    )
}
