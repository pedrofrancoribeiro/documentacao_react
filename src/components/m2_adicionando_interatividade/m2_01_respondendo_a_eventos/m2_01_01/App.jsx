import React from "react";
import Toolbar from "./Toolbar"

function App() {
  return (
    <Toolbar 
        onPlayMovie={() => alert("Play Movie")} 
        onUploadImage={() => alert("Upload Image")} 
    />
  );
}

export default App;