import React, { useState } from "react";
import { connect } from "react-redux";
import { Row, Form, Button } from "react-bootstrap";

import { Spacer } from ".";
import { uid } from "../utils";
import { addNote } from "../actions";

function NoteForm({ addNoteToState }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    addNoteToState({ title, content, id: uid() });
  };

  const handleDiscard = () => {
    setTitle("");
    setContent("");
  };

  return (
    <div className="todo-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            value={content}
            placeholder="Enter content"
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Row className="px-3">
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
          <Spacer />
          <Button variant="outlined" onClick={handleDiscard}>
            Discard
          </Button>
        </Row>
      </Form>
    </div>
  );
}

export default connect(null, { addNoteToState: addNote })(NoteForm);
