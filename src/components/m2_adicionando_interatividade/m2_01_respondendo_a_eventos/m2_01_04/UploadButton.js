import Button from "./Button";

function UploadButton() {
    return (
        <Button onClick={() => alert("Upload Button Clicked")}>
            Upload Image
        </Button>
    )
}

export default UploadButton;