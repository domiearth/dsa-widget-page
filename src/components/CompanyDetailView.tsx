import React from 'react';
import MarkdownViewer from './MarkdownViewer';
import { CompanyData } from '../constant';
import { Container } from 'react-bootstrap';

const CompanyDetailView: React.FC = () => {
  // Get company data from URL parameters
  const params = new URLSearchParams(window.location.search);
  const companyDataStr = params.get('data');
  const companyData: CompanyData | null = companyDataStr ? JSON.parse(decodeURIComponent(companyDataStr)) : null;

  if (!companyData) {
    return <div>No company data found</div>;
  }

  // Convert company data to markdown format
  const markdownContent = `
# ${companyData.company_name}

## Solution
${companyData.solution_description}

## Email
${companyData.email}

## Phone
${companyData.phone}

## Website
${companyData.website}

## Category
${companyData.category}

## Description
${companyData.description}
`;

  return (
    <Container className="mt-4">
      <MarkdownViewer markdownText={markdownContent} />
    </Container>
  );
};

export default CompanyDetailView; 