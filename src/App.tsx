import { useState, useEffect } from "react";
import { Container, Form, Row, Spinner, Modal } from "react-bootstrap";
import HtmlViewer from "./components/HtmlViewer";
import MarkdownViewer from "./components/MarkdownViewer";
import { HttpClient } from "./utils/http_client_utils";
import { VarUtils } from "./utils/var_utils";
import { URLBuilder } from "./obj/URLBuilder";

interface ApiResponse {
  view: string;
  content: string;
}

function genUrl(): string {
  const host = VarUtils.getVar('HOST');
  const query = VarUtils.getVar('QUERY');
  const _url = new URLBuilder(host!)
    .addParameter("query", query!)
    .build();
  return _url!;
}

function App() {
  const [markdownText, setMarkdownText] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHtml = async () => {
      try {
        setIsLoading(true);
        const _url = genUrl();
        if (_url) {
          console.log(_url);
          const response: ApiResponse = await HttpClient.get<ApiResponse>(_url);
          console.log(JSON.stringify(response));
          setHtmlContent(response.view);
          setMarkdownText(response.content);
        }
      } catch (error) {
        console.error("Error fetching HTML:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHtml();
  }, []);

  return (
    <Container fluid className="vh-100 vw-100 d-flex flex-column w-100">
      {isLoading && (
        <Modal show={true} centered backdrop="static">
          <Modal.Body className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p>Loading data, please wait...</p>
          </Modal.Body>
        </Modal>
      )}

      {/* HTML Viewer (50% Height) */}
      <Row className="h-50 bg-light border-bottom p-3 w-100 m-0 overflow-hidden">
        <HtmlViewer htmlContent={htmlContent} />
      </Row>

      {/* Markdown Viewer (50% Height with Scroll) */}
      <Row className="h-50 bg-white border-bottom p-3 w-100 m-0 overflow-auto">
        <MarkdownViewer markdownText={markdownText} />
      </Row>

      {/* Markdown Input */}
      <Row className="p-3">
        <Form.Control
          type="text"
          placeholder="Enter markdown text..."
          onChange={(e) => console.log(e.target.value)}
        />
      </Row>
    </Container>
  );
}

export default App;
