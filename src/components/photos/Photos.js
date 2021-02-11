import { useState, useEffect } from "react"
import { photoServices } from "../../services/PhotoServices"

const Photos = () => {
    
    useEffect(() => {
        photoServices.getPhotos().then((res) => console.log(res))
    }, [])

    return (
        <div>
            Photos
        </div>
    );
}

export default Photos;