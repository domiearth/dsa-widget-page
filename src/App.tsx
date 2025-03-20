import { useState, useEffect, useCallback } from "react";
import { Container, Form, Row, Col, Spinner, Modal, InputGroup, Button } from "react-bootstrap";
import HtmlViewer from "./components/HtmlViewer";
import MarkdownViewer from "./components/MarkdownViewer";
import { HttpClient } from "./utils/http_client_utils";
import { VarUtils } from "./utils/var_utils";
import { URLBuilder } from "./helpers/URLBuilder";

interface ApiResponse {
  view: string;
  content: string;
}

function App() {
  const [inputQuery, setInputQuery] = useState(VarUtils.getVar("query") || "");
  const [query, setQuery] = useState(inputQuery);
  const [markdownText, setMarkdownText] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    if (!query) return;
    setIsLoading(true);

    try {
      const host = VarUtils.getVar("host");
      const sheetId = VarUtils.getVar("sheetid")!;
      const testid =VarUtils.getVar("testid")!;
      if (!host) {
        console.error("Host variable is missing");
        return;
      }

      const _url = new URLBuilder(host)
        .addParameter("query", query)
        .addParameter("sheetId", sheetId)
        .addParameter("testid", testid)
        .build();

      console.log(`Fetching from URL: ${_url}`);
      const response: ApiResponse = await HttpClient.get<ApiResponse>(_url);
      console.log("API Response:", response);

      setHtmlContent(response.view);
      setMarkdownText(response.content);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData, query]);

  return (
    <div className="app-root">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="brand-title">NetZero Compass</h1>
        <p className="brand-subtitle">
        淨零指南針
        </p>
      </section>

      {/* Loading Overlay */}
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

      {/* Main Content */}
      <Container fluid className="section-wrapper">
        <Row className="content-row">
          <Col xs={12} md={6} className="viewer-col">
            <HtmlViewer htmlContent={htmlContent} />
          </Col>
          <Col xs={12} md={6} className="viewer-col">
            <MarkdownViewer markdownText={markdownText} />
          </Col>
        </Row>

        <Row className="input-row hidden-row">
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter query"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
            />
            <Button variant="outline-secondary" onClick={() => setQuery(inputQuery)}>
              Fetch
            </Button>
          </InputGroup>
        </Row>
      </Container>
    </div>
  );
}

export default App;
