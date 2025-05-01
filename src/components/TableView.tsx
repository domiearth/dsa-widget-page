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
          <th onClick={() => requestSort('公司名稱')} style={{ cursor: 'pointer' }}>
            公司名稱 {sortConfig?.key === '公司名稱' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
          </th>
          <th onClick={() => requestSort('解決方法')} style={{ cursor: 'pointer' }}>
            解決方法 {sortConfig?.key === '解決方法' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
          </th>
          <th onClick={() => requestSort('聯絡資訊')} style={{ cursor: 'pointer' }}>
            聯絡資訊 {sortConfig?.key === '聯絡資訊' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
          </th>
          <th onClick={() => requestSort('官方網站')} style={{ cursor: 'pointer' }}>
            官方網站 {sortConfig?.key === '官方網站' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
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
            <td>{item.公司名稱}</td>
            <td>{item.解決方法}</td>
            <td>{item.聯絡資訊}</td>
            <td>
              <a 
                href={item.官方網站} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Prevent row click when clicking the link
              >
                {item.官方網站}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableView; 