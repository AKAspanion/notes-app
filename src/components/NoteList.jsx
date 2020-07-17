import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Button, ListGroup, Form, InputGroup } from "react-bootstrap";
import { Spacer, EmptyState } from ".";

function NoteList({ notes, onEdit }) {
  const notesLength = notes.length;
  return (
    <React.Fragment>
      {!!notesLength && (
        <div className="mb-4 d-flex align-items-center">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control placeholder="Search"></Form.Control>

            <InputGroup.Append>
              <Button variant="outline-primary">Cancel</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      )}
      {!!notesLength && (
        <ListGroup>
          <TransitionGroup style={{ borderRadius: "0.25rem" }}>
            {notes.map((note) => (
              <CSSTransition key={note.id} timeout={500} classNames="note">
                <ListGroup.Item className="px-3">
                  <div className="d-flex align-items-center">
                    <div className="text-left">
                      <span>{note.title}</span>
                    </div>
                    <Spacer />
                    <div className="text-nowrap pr-3 font-weight-light small">
                      {(note.date || "").slice(4, 10)}
                    </div>
                    <Button size="sm" onClick={() => onEdit(note)}>
                      Edit
                    </Button>
                  </div>
                </ListGroup.Item>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      )}
      {!notesLength && (
        <EmptyState
          title="No Notes Found"
          subtitle="When you are ready, go ahead and add a note"
        />
      )}
    </React.Fragment>
  );
}

export default NoteList;
