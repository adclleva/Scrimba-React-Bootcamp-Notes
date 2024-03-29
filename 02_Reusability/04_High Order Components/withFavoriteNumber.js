import React from "react"
/**
 * A function that takes a component as its first argument and returns a new component that wraps
 * the given component, providing extra capabilities to it.
 * 
 * Challenge: Write a higher-order component that passes a new prop to the given component
 * called "favoriteNumber" and includes your own, personal, favorite number
 * 
 * Then, in App.js, render that favorite number to the screen
 */
export function withFavoriteNumber(component) {
    const C = component
    return function(props) {
        return (
            <C favoriteNumber={42} {...props}/> // we need to use the spread operator for the props just in case we get properties coming from the App component that we input in the index.js file so it could all be utilized
        )
    }
}
