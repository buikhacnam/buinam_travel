import React from 'react'

export default function Hero({hero, children}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}
/*
export default function Hero(props) {
    return (
        <header className={props.hero}>
            {props.children}
        </header>
    )
}
*/
Hero.defaultProps = {
    hero: "defaultHero"
}
