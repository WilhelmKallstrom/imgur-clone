import { useState } from "react";
import { storage } from "../Firebase";
import { ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

function Upload() {

    const [imageUpload, setImageUpload] = useState(null);
    const navigate = useNavigate();

    const UploadImage = () => {
        if (imageUpload === null)
            return;

        const imageId = nanoid();

        const imageRef = ref(storage, `gs://imgur-clone-3eab6.appspot.com/${imageId}`);
        uploadBytes(imageRef, imageUpload).then(() => {

            navigate(`/image?id=${imageId}`);
        });
    }

    return (
        <div className="container">
            <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]); }} />
            <button onClick={UploadImage}>Upload IMG</button>
        </div>
    );
}

export default Upload;