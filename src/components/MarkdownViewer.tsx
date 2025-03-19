import React from "react";
import ReactMarkdown from "react-markdown";
import { Container } from "react-bootstrap";

interface MarkdownViewerProps {
  markdownText: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ markdownText }) => {
  return (
    <Container className="p-3" style={{
      maxHeight: "500px",
      overflow: "auto",  // Enables scrolling inside the div
      border: "1px solid #ccc"
    }} >
      <ReactMarkdown
      >{markdownText}</ReactMarkdown>
    </Container>
  );
};


export default MarkdownViewer;
