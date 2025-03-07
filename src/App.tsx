import { useState, useEffect } from 'react';
import { Container, Form, Row } from "react-bootstrap";
import HtmlViewer from './components/HtmlViewer';
import { HttpClient } from './utils/http_client_utils';
import { VarUtils } from './utils/var_utils';

interface ApiResponse {
  view: string;
  content: string;
}

function App() {
  const [markdownText, setMarkdownText] = useState("");
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchHtml = async () => {
      try {
        const _url = VarUtils.getVar('API_URL');
        if (_url) {
          console.log(_url);
          setHtmlContent(_url);
          // const response: ApiResponse = await HttpClient.get<ApiResponse>(_url);
          // setHtmlContent(response.view);
        }
      } catch (error) {
        console.error("Error fetching HTML:", error);
      }
    };
    fetchHtml();
  }, []);

  return (
    <Container fluid className="vh-100 vw-100 d-flex flex-column w-100">
      <Row className="flex-grow-1 bg-light border-bottom p-3 w-100 m-0">
        <HtmlViewer htmlContent={htmlContent} />
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
