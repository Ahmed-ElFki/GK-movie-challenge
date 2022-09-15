import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { ADD } from "../Constants/constants";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function AddMovie() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [date, setDate] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ fontFamily: "Fira Code", fontSize: ".8rem" }}
      >
        Add Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        style={{ fontFamily: "Fira Code" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Movie data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup
            className="mb-3"
            onChange={(e) => setTitle(e.target.value)}
          >
            <Form.Control
              placeholder="Title"
              aria-label="Title"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup
            className="mb-3"
            onChange={(e) => setRate(e.target.value)}
          >
            <Form.Control
              placeholder="Rate"
              aria-label="Rate"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup
            className="mb-3"
            onChange={(e) => setDate(e.target.value)}
          >
            <Form.Control
              placeholder="Date"
              aria-label="Date"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup
            className="mb-3"
            onChange={(e) => setImgUrl(e.target.value)}
          >
            <Form.Control
              placeholder="Image"
              aria-label="Image"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup
            className="mb-3"
            onChange={(e) => setDescription(e.target.value)}
          >
            <Form.Control
              placeholder="Description"
              aria-label="Description"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup
            className="mb-3"
            onChange={(e) => setCategory(e.target.value)}
          >
            <Form.Control
              placeholder="Category"
              aria-label="Category"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch({
                type: ADD,
                payload: {
                  _id: "99",
                  title: title,
                  rate: rate,
                  date: date,
                  imgUrl: imgUrl,
                  description: description,
                  category: category,
                },
              });
              handleClose();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
