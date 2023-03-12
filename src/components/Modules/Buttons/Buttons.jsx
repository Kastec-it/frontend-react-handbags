import "./buttons.css"
import React from "react";

export default function Buttons({ children, clickHandler, isDisabled }) {
    return (
        <button
            type="button"
            disabled={isDisabled}
            onClick={clickHandler}
        >
            { children }
        </button>
    );
}

