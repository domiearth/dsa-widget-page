import { useState, useEffect } from "react";
import { Container, Form, Row, Col, Spinner, Modal } from "react-bootstrap";
import HtmlViewer from "./components/HtmlViewer";
import MarkdownViewer from "./components/MarkdownViewer";
import { HttpClient } from "./utils/http_client_utils";
import { VarUtils } from "./utils/var_utils";
import { URLBuilder } from "./helpers/URLBuilder";

interface ApiResponse {
  view: string;
  content: string;
}

function genUrl(): string {
  const host = VarUtils.getVar('host')!;
  const query = VarUtils.getVar('query')!;
  const sheetId = VarUtils.getVar('sheetid')!;
  const _url = new URLBuilder(host)
    .addParameter("query", query)
    .addParameter("sheetId", sheetId)
    .build();
  return _url;
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

      {/* Responsive Grid */}
      <Row className="flex-grow-1 d-flex w-100 m-0">
        <Col xs={12} md={6} className="bg-light border-end p-3 overflow-hidden">
          <HtmlViewer htmlContent={htmlContent} />
        </Col>
        <Col xs={12} md={6} className="bg-white p-3 overflow-auto">
          <MarkdownViewer markdownText={markdownText} />
        </Col>
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
