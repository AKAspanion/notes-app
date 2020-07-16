import React from "react";

import { Button, ListGroup } from "react-bootstrap";
import { Spacer, EmptyState } from ".";

function NoteList({ notes }) {
  return (
    <React.Fragment>
      {!!notes.length && (
        <ListGroup>
          {notes.map((note, index) => (
            <ListGroup.Item key={note.id}>
              <div className="d-flex">
                <div className="text-left">
                  <span>{note.title}</span>
                </div>
                <Spacer />
                <div className="text-right">
                  <div className="text-nowrap">
                    {(note.date || "").slice(4, 10)}
                  </div>
                  <Button size="sm">Edit</Button>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      {!notes.length && (
        <EmptyState
          title="No Notes Found"
          subtitle="When you are ready, go ahead and add a note"
        />
      )}
    </React.Fragment>
  );
}

export default NoteList;
