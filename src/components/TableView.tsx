import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { CompanyData } from '../constant';

interface TableViewProps {
  data: CompanyData[];
}

const TableView: React.FC<TableViewProps> = ({ data }) => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof CompanyData;
    direction: 'asc' | 'desc';
  } | null>(null);

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const requestSort = (key: keyof CompanyData) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'asc'
    ) {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleRowClick = (company: CompanyData) => {
    // Open detail view in new tab
    const companyData = encodeURIComponent(JSON.stringify(company));
    window.open(`/detail?data=${companyData}`, '_blank');
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th onClick={() => requestSort('company_name')} style={{ cursor: 'pointer' }}>
            Company Name {sortConfig?.key === 'company_name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
          </th>
          <th onClick={() => requestSort('solution_description')} style={{ cursor: 'pointer' }}>
            Solution {sortConfig?.key === 'solution_description' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
          </th>
          <th onClick={() => requestSort('email')} style={{ cursor: 'pointer' }}>
            Email {sortConfig?.key === 'email' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
          </th>
          <th onClick={() => requestSort('phone')} style={{ cursor: 'pointer' }}>
            Phone {sortConfig?.key === 'phone' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
          </th>
          <th onClick={() => requestSort('website')} style={{ cursor: 'pointer' }}>
            Website {sortConfig?.key === 'website' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
          </th>
          <th onClick={() => requestSort('category')} style={{ cursor: 'pointer' }}>
            Category {sortConfig?.key === 'category' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, index) => (
          <tr 
            key={index} 
            onClick={() => handleRowClick(item)}
            style={{ cursor: 'pointer' }}
          >
            <td>{item.company_name}</td>
            <td>{item.solution_description}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>
              <a 
                href={item.website} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Prevent row click when clicking the link
              >
                {item.website}
              </a>
            </td>
            <td>{item.category}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableView; 