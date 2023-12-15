import Button from "./Button";

export default function App() {
    return (
        <div>
            <Button onSmash={() => alert("Playing!")}>
                Play Movie
            </Button>
            <Button onSmash={() => alert("Uploading!")}>
                Upload Image
            </Button>
        </div>
    )
}