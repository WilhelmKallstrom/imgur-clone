import { useEffect, useState } from "react";

import { storage } from "../Firebase";
import { ref, getDownloadURL } from "firebase/storage";

function Image() {

    const [getImage, setImage] = useState(null);

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    useEffect(() => {
        const imageRef = ref(storage, `${id}`);
        console.log(imageRef)
        getDownloadURL(imageRef).then((url) => {
            setImage(url);
        })
    });

    const CopyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href).then(()=> {
            alert("Link Copied!")
        });
    }

    if (getImage === null) {
        return (
            <div className="container">
                <div className="mt-100 loading vh-80 rounded-3 shadow-lg"></div>
            </div>
        );
    }

    return (
        <div className="container mt-100">
            <img src={getImage} className="w-100 rounded-3 shadow-lg mb-3" />

                <div className="d-flex justify-content-center">
                    <button className="btn btn-success bg-green fw-bold" onClick={CopyToClipboard}>Copy Link</button>
                </div>

        </div>
    );
}

export default Image;