import React from "react"
import ReactDOM from "react-dom"
import UserContext from "./UserContext"

import App from "./App"

/**
 * Challenge: Set up context to save the user's username and pass it to anywhere that is currently hardcoding "Username".
 * 
 * Use the static class property `contextType` on any components that need to consume context.
 * https://reactjs.org/docs/context.html
 */

ReactDOM.render(
    <UserContext.Provider value={"Arvin"}>
        <App />
    </UserContext.Provider>, document.getElementById("root")
    )
