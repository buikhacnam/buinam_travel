import React from 'react'

export default function Banner({children, title, subtitle}) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div />
            <p style={{lineHeight: "2"}}>{subtitle}</p>
            {children}
        </div>
    )
}
