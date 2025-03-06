import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { HttpClient } from "../utils/http_client_utils";

const HtmlViewer = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchHtml = async () => {
      try {
        const response = await HttpClient.get<string>("https://kirinchen.github.io/highcharts-react-typescript-demo/", {}, "text"); 
        setHtmlContent(response);
      } catch (error) {
        console.error("Error fetching HTML:", error);
      }
    };
    fetchHtml();
  }, []);

  return (
    <Container className=" vw-100 d-flex flex-column">
      <iframe
        title="HTML Viewer"
        srcDoc={htmlContent}
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid #ccc",
        }}
        sandbox="allow-same-origin"
      />
    </Container>
  );
};

export default HtmlViewer;
