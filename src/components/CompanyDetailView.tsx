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
# ${companyData.公司名稱}

## 解決方法
${companyData.解決方法}

## 聯絡資訊
${companyData.聯絡資訊}

## 官方網站
${companyData.官方網站}

## 詳細資訊
${companyData.敘述}
`;

  return (
    <Container className="mt-4">
      <MarkdownViewer markdownText={markdownContent} />
    </Container>
  );
};

export default CompanyDetailView; 