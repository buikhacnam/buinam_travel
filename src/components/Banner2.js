import React from 'react'

export default function Banner2({children, title, subtitle}) {
    return (
        <div className="banner">
            <h3>{title}</h3>
            {children}
        </div>
    )
}