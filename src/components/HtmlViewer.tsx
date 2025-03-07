import { Container } from "react-bootstrap";

interface HtmlViewerProps {
  htmlContent: string;
}

const HtmlViewer = ({ htmlContent }: HtmlViewerProps) => {
  return (
    <Container className="vw-100 d-flex flex-column">
      <iframe
        title="HTML Viewer"
        srcDoc={htmlContent}
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid #ccc",
        }}
        sandbox="allow-scripts"
      />
    </Container>
  );
};

export default HtmlViewer;
