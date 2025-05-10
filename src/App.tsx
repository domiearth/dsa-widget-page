import { useState, useEffect, useCallback } from "react";
import { Container, Form, Row, Col, Spinner, Modal, InputGroup, Button } from "react-bootstrap";
import TableView from "./components/TableView";
import CompanyDetailView from "./components/CompanyDetailView";
import { HttpClient } from "./utils/http_client_utils";
import { VarUtils } from "./utils/var_utils";
import { URLBuilder } from "./helpers/URLBuilder";
import { CompanyData } from "./constant";
import "./i18n";
import { useTranslation } from "react-i18next";


function App() {
  console.info("Hi App!!");
  const [inputQuery, setInputQuery] = useState(VarUtils.getVar("query") || "");
  const [query, setQuery] = useState(inputQuery);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState<CompanyData[]>([]);
  const { t, i18n } = useTranslation();

  // Check if we're on the detail page
  const isDetailPage = window.location.pathname === '/detail';

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const host = VarUtils.getVar("host");
      const sheetId = VarUtils.getVar("sheetid")!;
      const testid =VarUtils.getVar("testid")!;
      const inputType = VarUtils.getVar("input_type")!;
      if (!host) {
        console.error("Host variable is missing");
        return;
      }

      const _url = new URLBuilder(host)
        .addParameter("query", query)
        .addParameter("input_type", inputType)
        .addParameter("sheetid", sheetId)
        .addParameter("testid", testid)
        .build();

      console.log(`Fetching from URL: ${_url}`);
      const response: CompanyData[] = await HttpClient.get<CompanyData[]>(_url);
      console.log(response);
      setTableData(response);
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

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  if (isDetailPage) {
    return <CompanyDetailView />;
  }

  return (
    <div className="app-root">
      {/* Language Switcher */}
      <div style={{ position: 'absolute', top: 16, right: 24, zIndex: 1000 }}>
        <select
          value={i18n.language}
          onChange={e => changeLanguage(e.target.value)}
          style={{ padding: '4px 8px', borderRadius: 4 }}
        >
          <option value="zh">中文</option>
          <option value="en">English</option>
          <option value="th">ไทย</option>
        </select>
      </div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="brand-title">{t('brandTitle')}</h1>
        <p className="brand-subtitle">
        {t('brandSubtitle')}
        </p>
      </section>

      {/* Loading Overlay */}
      {isLoading && (
        <Modal show={true} centered backdrop="static">
          <Modal.Body className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p>{t('loading')}</p>
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
              placeholder={t('inputPlaceholder')}
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
            />
            <Button variant="outline-secondary" onClick={() => setQuery(inputQuery)}>
              {t('fetch')}
            </Button>
          </InputGroup>
        </Row>
      </Container>
    </div>
  );
}

export default App;
