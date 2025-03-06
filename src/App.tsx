import { useState } from 'react'
import {  Container, Form, Row } from "react-bootstrap";
function App() {
  const [markdownText, setMarkdownText] = useState("");
  console.log("API URL:", import.meta.env.VITE_API_URL);
  console.log("App Name:", import.meta.env.VITE_APP_NAME);
  
  return (
    <Container fluid className="vh-100 vw-100 d-flex flex-column w-100">
      <Row className="flex-grow-1 bg-light border-bottom p-3 w-100 m-0">
        <h5>HTML Viewer</h5>
        <p>Rendered HTML content...</p>
      </Row>
      <Row className="flex-grow-1 bg-white border-bottom p-3">
        <h5>Markdown Viewer</h5>
        <p>{markdownText}</p>
      </Row>
      <Row className="p-3">
        <Form.Control
          type="text"
          placeholder="Enter markdown text..."
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
        />
      </Row>
    </Container>
  );
}

export default App;
