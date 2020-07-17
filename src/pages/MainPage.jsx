import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Row, Col, Card, Container } from "react-bootstrap";

import { Spacer, NoteForm, NoteList, NoteModal } from "../components";
import { addNote, updateNote } from "../actions";
import { uid } from "../utils";

function MainPage({ notes, addNoteToState, updateNoteInState }) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [date, setDate] = useState(new Date());
  const [active, setActive] = useState("active");
  const [searchText, setSearchText] = useState("");
  const [validated, setValidated] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    setValidated(!!(title && date));
  }, [title, content, date]);

  const emptyStateProps = () => {
    const emptyState = {
      title: "No Notes Found",
      subtitle: "When you are ready, go ahead and add a note",
    };
    if (searchText && notes.length) {
      emptyState.img = "images/empty-search.svg";
      emptyState.subtitle = "To widen your search, change or remove filters";
    }
    return emptyState;
  };

  const toggleModal = (show, note) => {
    setModalShow(show);
    if (show && note) {
      setModalData({ ...note });
    } else {
      setModalData({});
    }
  };

  const populateState = ({ date, title, content, id }) => {
    handleFormChange("Id", id);
    handleFormChange("Title", title);
    handleFormChange("Content", content);
    handleFormChange("Date", new Date(date));
  };

  const clearForm = () => {
    setId("");
    setTitle("");
    setContent("");
    setIsEdit(false);
    setDate(new Date());
  };

  const handleFormChange = (prop, value) => {
    switch (prop) {
      case "Date":
        setDate(value);
        break;
      case "Title":
        setTitle(value);
        break;
      case "Content":
        setContent(value);
        break;
      case "Id":
        setId(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    if (e.preventDefault) e.preventDefault();

    if (!validated) return;

    if (isEdit) {
      updateNoteInState({ title, content, date: date.toDateString(), id });
    } else {
      addNoteToState({ title, content, date: date.toDateString(), id: uid() });
    }
    clearForm();
  };

  const handleFormActive = () => {
    setActive(active === "active" ? null : "active");
  };

  const handleFormDiscard = () => {
    clearForm();
  };

  const handleSearch = (searchText) => {
    setSearchText((searchText || "").toLowerCase());
  };

  const handleEdit = (note) => {
    setIsEdit(true);
    setActive("active");

    populateState(note);
  };

  return (
    <Container className="p-3 p-sm-4">
      <NoteModal
        {...modalData}
        show={modalShow}
        onHide={() => toggleModal(false)}
      />
      <Card>
        <div className="d-flex px-3 pt-3 px-sm-4">
          <h2 className="pb-1">Notes</h2>
          <Spacer />
        </div>
        <hr className="mt-1" />
        <Row className="px-3 px-sm-4">
          <Col xs={12} lg={"auto"} className="pb-3 pt-sm-2 pb-sm-4">
            <NoteForm
              date={date}
              title={title}
              active={active}
              isEdit={isEdit}
              content={content}
              validated={validated}
              onOpen={handleFormActive}
              onChange={handleFormChange}
              onSubmit={handleFormSubmit}
              onDiscard={handleFormDiscard}
            />
          </Col>
          <hr
            className={`d-sm-none full-width ${
              active === "active" ? "mt-0" : "mt-n3"
            }`}
          />
          <Col xs={12} lg={"auto"} className="flex-grow-1 pb-3 pt-sm-2 pb-sm-4">
            <NoteList
              onEdit={handleEdit}
              onSearch={handleSearch}
              emptyState={emptyStateProps()}
              onShow={(n) => toggleModal(true, n)}
              notes={notes.filter(({ title }) =>
                title.toLowerCase().includes(searchText)
              )}
            />
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

export default connect(mapStateToProps, {
  addNoteToState: addNote,
  updateNoteInState: updateNote,
})(MainPage);
