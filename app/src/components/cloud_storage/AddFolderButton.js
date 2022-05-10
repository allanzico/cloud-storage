import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BsFolderPlus } from "react-icons/bs";
import { database } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { ROOT_FOLDER } from "../../hooks/useFolder";


const AddFolderButton = ({ currentFolder }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const { currentUser } = useAuth();

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const path = [...currentFolder.path]
    if (currentFolder !== ROOT_FOLDER) {
      path.push({name: currentFolder.name, id:currentFolder.id})
    }
    if (currentFolder == null) return;

    //Create Folder in DB
    database.folders.add({
      name: name,
      parentId: currentFolder.id,
      userId: currentUser.uid,
      path: path,
      createdAt: database.getCurrentTimestamp(),
    });
    setName("");
    closeModal();
  };
  return (
    <>
      <Button onClick={openModal} size="sm" className="outline-btn-sm">
        <BsFolderPlus size={24}/>
      </Button>
      <Modal show={open} onHide={closeModal}>
        <Form>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Folder Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              close
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Add Folder
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddFolderButton;
