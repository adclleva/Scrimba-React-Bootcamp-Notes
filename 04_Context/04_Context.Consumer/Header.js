import React, {Component} from "react"
import ThemeContext from "./themeContext"

function Header(props) {
    return (
        <ThemeContext.Consumer>
            {theme => {
                return (
                    <header className={`${theme}-theme`}>
                        <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
                    </header>    
                ) 
            }}
        </ThemeContext.Consumer>
    )    
}

export default Header
