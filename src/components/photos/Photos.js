import { useState, useEffect } from "react"
import { photoServices } from "../../services/PhotoServices"
import { withRouter } from "react-router-dom"
import Pagination from "../pagination/Pagination";
import PhotoModal from "./PhotoModal";

const Photos = () => {
    const [photos, setPhotos] = useState([])
    const [photo, setPhoto] = useState({})
    const [show, setShow] = useState(false);
    const [pagination, setPagination] = useState({
        totalCount: 0,
        pageIndex: 0,
        pageSize: 9
    });

    const handleClose = () => {
        setShow(false)
        setPhoto({})
    }

    const handleShow = (photo) => {
        setShow(true);
        setPhoto(photo)
    }

    useEffect(() => {
        photoServices.getPhotos()
            .then((res) => {
                setPhotos(res.data);
                setPagination({ ...pagination, totalCount: res.data.length });
            })
            .catch((err) => console.log(err))
    }, [])

    const handlePage = (page) => {
        setPagination({ ...pagination, pageIndex: page });
    }

    return (
        <div className="container p-4">
            <PhotoModal show={show} photo={photo} handleClose={handleClose} />

            {
                photos.length > 0 && <Pagination url={"/photos"} pageNum={pagination.pageIndex} itemsNum={pagination.totalCount} handlePage={handlePage} />
            }

            <div className="row">
                {photos.slice((Number(pagination.pageIndex) * pagination.pageSize), Number((pagination.pageIndex + 1) * pagination.pageSize)).map((photo) => (
                    <div key={photo.id} className="col-lg-4">
                        <div className="card bg-dark text-light border-round m-2">
                            <img onClick={() => handleShow(photo)} src={photo.thumbnailUrl} alt="No Photo" />
                            <div className="cardBody p-2">
                                <div className="cardTitle">{photo.id} - {photo.title}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default withRouter(Photos);