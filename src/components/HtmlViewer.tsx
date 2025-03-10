import { Container } from "react-bootstrap";

interface HtmlViewerProps {
  htmlContent: string;
}

const HtmlViewer = ({ htmlContent }: HtmlViewerProps) => {
  return (
    <Container className="p-3" style={{ 
      width: "100%", 
      height: "100%", 
      overflow: "auto",  // Enables scrolling inside the div
      border: "1px solid #ccc"
    }}>
      <iframe
        title="HTML Viewer"
        srcDoc={htmlContent}
        style={{
          width: "100%",
          maxHeight: "100%",
          minHeight: "100%",
          overflowY: "auto",
          border: "1px solid #ccc",
        }}
        sandbox="allow-scripts"
      />
    </Container>
  );
};

export default HtmlViewer;
