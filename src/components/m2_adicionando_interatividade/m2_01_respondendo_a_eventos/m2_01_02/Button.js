import React from "react";

function Button() {

    function handleClick() {
        alert("Button 1 Clicked");
    }

    /**
        As funções passadas para manipuladores de eventos devem ser passadas, não chamadas
    */
    return (
        <>
            <button onClick={handleClick}>
                Click 1
            </button>

            <button onClick={handleClick()}>
                Click 1
            </button>

            <button onClick={function handleClick() {
                alert("Button 2 Clicked");
            }}>
                Click 2
            </button>

            <button onClick={() => {alert("Button 3 Clicked")}}>
                Click 3
            </button>

            <button onClick={() => alert("Button 4 Clicked")}>
                Click 4
            </button>
        </>
    )

}

export default Button;