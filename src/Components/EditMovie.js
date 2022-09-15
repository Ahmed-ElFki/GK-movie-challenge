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
  movieData = [...movieData.filter((movie) => movie._id === id)][0];

  const [title, setTitle] = useState(movieData.title);
  const [rate, setRate] = useState(movieData.rate);
  const [date, setDate] = useState(movieData.date);
  const [imgUrl, setImgUrl] = useState(movieData.imgUrl);
  const [description, setDescription] = useState(movieData.description);
  const [category, setCategory] = useState(movieData.category);

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
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Title"
              aria-label="Title"
              aria-describedby="basic-addon1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Rate"
              aria-label="Rate"
              aria-describedby="basic-addon1"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Date"
              aria-label="Date"
              aria-describedby="basic-addon1"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Image"
              aria-label="Image"
              aria-describedby="basic-addon1"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Description"
              aria-label="Description"
              aria-describedby="basic-addon1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Category"
              aria-label="Category"
              aria-describedby="basic-addon1"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
