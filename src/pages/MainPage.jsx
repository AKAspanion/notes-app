import React from "react";
import { connect } from "react-redux";

import { Row, Col, Card, Container } from "react-bootstrap";

import { Spacer, NoteForm, NoteList } from "../components";
import { addNote } from "../actions";

function MainPage({ notes, addNoteToState }) {
  const handleFormChange = (note) => {
    addNoteToState(note);
  };

  return (
    <Container className="p-3 p-sm-4">
      <Card>
        <div className="d-flex px-3 pt-4 px-sm-4">
          <h2 className="pb-1">Notes</h2>
          <Spacer />
          toggle
        </div>
        <hr></hr>
        <Row className="px-3 px-sm-4">
          <Col xs={12} lg={"auto"} className="pb-3 pt-sm-2 pb-sm-4">
            <NoteForm onChange={handleFormChange} />
          </Col>
          <Col xs={12} lg={"auto"} className="flex-grow-1 pb-3 pt-sm-2 pb-sm-4">
            <NoteList notes={notes} />
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes.notes,
  };
};

export default connect(mapStateToProps, { addNoteToState: addNote })(MainPage);
