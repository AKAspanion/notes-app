import React, { useState } from "react";

import Calendar from "react-calendar";
import { Row, Card, Form, Button, Accordion } from "react-bootstrap";

import { Spacer } from ".";
import { uid } from "../utils";

function NoteForm({ onChange }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(new Date());

  const handleSubmit = () => {
    onChange({ title, content, date: date.toDateString(), id: uid() });
  };

  const handleDiscard = () => {
    setTitle("");
    setContent("");
    setDate(new Date());
  };

  const handleAccordionSelect = (e) => {
    console.log(e);
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Accordion
        activeKey="0"
        onSelect={handleAccordionSelect}
        style={{ width: "350px", overflow: "hidden" }}
      >
        <Card>
          <Accordion.Toggle
            eventKey="0"
            as={Card.Header}
            onClick={handleAccordionSelect}
            className="text-left px-3 px-sm-4"
          >
            Add Note
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="p-3 p-sm-4">
              <Calendar
                value={date}
                onChange={setDate}
                minDate={new Date()}
                className="text-center card mb-3 mb-sm-4"
              />
              <Form className="text-left" onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  {/* <Form.Label>Title</Form.Label> */}
                  <Form.Control
                    type="text"
                    value={title}
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    as="textarea"
                    value={content}
                    placeholder="Content"
                    onChange={(e) => setContent(e.target.value)}
                  />
                </Form.Group>
                <Row className="px-3">
                  <Button
                    size="sm"
                    className="mr-2"
                    onClick={handleDiscard}
                    variant="outline-secondary"
                  >
                    Discard
                  </Button>
                  <Spacer />
                  <Button size="sm" variant="primary" onClick={handleSubmit}>
                    Save
                  </Button>
                </Row>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default NoteForm;
