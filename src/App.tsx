import { useState, useEffect, useCallback } from "react";
import { Container, Form, Row, Col, Spinner, Modal, InputGroup, Button } from "react-bootstrap";
import TableView from "./components/TableView";
import CompanyDetailView from "./components/CompanyDetailView";
import { HttpClient } from "./utils/http_client_utils";
import { VarUtils } from "./utils/var_utils";
import { URLBuilder } from "./helpers/URLBuilder";
import { TEST_DATA } from "./constant";

interface ApiResponse {
  view: string;
  content: string;
}

function App() {
  const [inputQuery, setInputQuery] = useState(VarUtils.getVar("query") || "");
  const [query, setQuery] = useState(inputQuery);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState(TEST_DATA.items);

  // Check if we're on the detail page
  const isDetailPage = window.location.pathname === '/detail';

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

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData, query]);

  if (isDetailPage) {
    return <CompanyDetailView />;
  }

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
          <Col xs={12}>
            <TableView data={tableData} />
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
