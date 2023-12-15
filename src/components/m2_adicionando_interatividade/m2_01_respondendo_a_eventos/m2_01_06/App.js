import Toolbar from "./Toolbar"
export default function App() {
    return (
        <Toolbar 
            onPlayMovie={() => alert("Play Movie")} 
            onUploadImage={() => alert("Upload Image")} 
        />
    )
}