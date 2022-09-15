import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { UPDATE_MOVIE_DATA } from "../Constants/constants";

function EditMovie({ id, display }) {
  const [show, setShow] = useState(display);

  const handleClose = () => setShow(false);

  const dispatch = useDispatch();
  let movieData = useSelector((state) => state.movies);
  movieData = movieData.filter((movie) => movie._id === id);

  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [date, setDate] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  return (
    <>
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
              value={movieData.title}
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
                type: UPDATE_MOVIE_DATA,
                payload: {
                  _id: id,
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
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditMovie;
