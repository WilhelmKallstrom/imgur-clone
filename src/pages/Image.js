import { useEffect, useState } from "react";

import { storage } from "../Firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

function Image() {

    const [getImage, setImage] = useState(null);

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log(id);

    useEffect(() => {
        const imageRef = ref(storage, `${id}`);
        getDownloadURL(imageRef).then((url) => {
            setImage(url);
            console.log(url);
        })
    }, []);

    if (getImage === null) {
        return (
            <p>apa</p>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg">
                    <img src={getImage} className="img-fluid rounded-3 shadow-lg mb-3" />
                    <p className="small text-secondary">5 minutes ago</p>
                </div>
                <div className="col-lg">
                    <button className="btn btn-dark fw-bold">Grab Link</button>
                </div>
            </div>
        </div>
    );
}

export default Image;