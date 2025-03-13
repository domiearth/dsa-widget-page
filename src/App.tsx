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
  const [query, setQuery] = useState(inputQuery); // Holds the query for fetching
  const [markdownText, setMarkdownText] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    if (!query) return;

    setIsLoading(true);
    try {
      const host = VarUtils.getVar("host");
      const sheetId = VarUtils.getVar('sheetid')!;
      if (!host) {
        console.error("Host variable is missing");
        return;
      }

      const _url = new URLBuilder(host).addParameter("query", query).addParameter("sheetId", sheetId).build();
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
  }, [fetchData, query]); // Only fetch when `query` changes (not `inputQuery`)

  return (
    <Container fluid className="vh-100 vw-100 d-flex flex-column">
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

      {/* Content Display */}
      <Row className="flex-grow-1 d-flex w-100 m-0">
        <Col xs={12} md={6} className="bg-light border-end p-3 overflow-hidden">
          <HtmlViewer htmlContent={htmlContent} />
        </Col>
        <Col xs={12} md={6} className="bg-white p-3 overflow-auto">
          <MarkdownViewer markdownText={markdownText} />
        </Col>
      </Row>

      {/* Input Field & Fetch Button */}
      <Row className="p-3">
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter query"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)} // Updates input state, but does not fetch
          />
          <Button
            variant="outline-secondary"
            onClick={() => setQuery(inputQuery)} // Sets `query`, which triggers the fetch
          >
            Fetch
          </Button>
        </InputGroup>
      </Row>
    </Container>
  );
}

export default App;
