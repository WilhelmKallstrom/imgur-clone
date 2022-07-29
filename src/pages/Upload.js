
import { storage } from "../Firebase";
import { ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

function Upload() {

    const navigate = useNavigate();

    const UploadImage = (img) => {

        const imageId = nanoid();

        const imageRef = ref(storage, `gs://imgur-clone-3eab6.appspot.com/${imageId}`);
        uploadBytes(imageRef, img).then(() => {
            navigate(`/image?id=${imageId}`);
        });
    }

    return (
        <div className="container d-flex vh-100 justify-content-center align-items-center">
            <input type="file" className="bg-dark2 p-5 rounded-3 shadow-lg" accept="image/png, image/jpeg" onChange={(event) => { UploadImage(event.target.files[0]); }}/>
        </div>
    );
}

export default Upload;