import React from "react";
import AlertButton from "./AlertButton";

const Toolbar = () => {
    return (
        <div>
            <AlertButton message="Play Movie" >
                Alerta 1
            </AlertButton>
            <AlertButton message="Upload Image" >
                Alerta 2
            </AlertButton>
        </div>
    );
}

export default Toolbar;