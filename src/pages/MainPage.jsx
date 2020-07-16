import React from "react";
import { Container } from "react-bootstrap";

import { NoteForm } from "../components";

function MainPage() {
  return (
    <Container className="main-page text-left p-4">
      <NoteForm />
    </Container>
  );
}

export default MainPage;
