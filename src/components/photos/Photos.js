import { useState, useEffect } from "react"
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { photoServices } from "../../services/PhotoServices"
import Pagination from "../pagination/Pagination";

const Photos = () => {
    const [photos, setPhotos] = useState([])
    const [show, setShow] = useState(false);
    const [url, setUrl] = useState("")

    const { page } = useParams()
    const lastItem = page * 9

    const handleClose = () => {
        setShow(false)
        setUrl("")
    }
    const handleShow = (photo) => {
        setShow(true);
        setUrl(photo.url)
    }
    const [pagination, setPagination] = useState({
        totalCount: 0,
        pageIndex: 0,
        pageSize: 9
    });

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
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nagledaj je se</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={url} alt="No photo" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {
                photos.length > 0 && <Pagination url={"/photos"} pageNum={pagination.pageIndex} itemsNum={pagination.totalCount} handlePage={handlePage} />
            }

            <div className="row">
                {photos.slice((Number(pagination.pageIndex ) * pagination.pageSize), Number((pagination.pageIndex + 1) * pagination.pageSize)).map((photo) => (
                    <div key={photo.id} className="col-lg-4">
                        <div className="card m-2">
                            <img onClick={() => handleShow(photo)} src={photo.url} alt="No Photo" />
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

export default Photos;