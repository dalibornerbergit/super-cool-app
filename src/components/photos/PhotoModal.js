import { Button, Modal } from "react-bootstrap";

const PhotoModal = ({ show, photo, handleClose }) => {
    return (
        <Modal size="lg" show={show} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Nagledaj je se</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={photo.url} alt="No photo" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PhotoModal;