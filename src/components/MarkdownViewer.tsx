import React from "react";
import ReactMarkdown from "react-markdown";
import { Container } from "react-bootstrap";

interface MarkdownViewerProps {
  markdownText: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ markdownText }) => {
    return (
      <Container className="p-3">
        <h5>Markdown Viewer</h5>
        <div className="border p-3 bg-light" style={{ maxHeight: "100%", overflowY: "auto" }}>
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </Container>
    );
  };
  

export default MarkdownViewer;
