import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { CompanyData } from '../constant';

interface TableViewProps {
  data: CompanyData[];
}

const TableView: React.FC<TableViewProps> = ({ data }) => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof CompanyData | 'carbon_emission_percent';
    direction: 'asc' | 'desc';
  } | null>(null);

  // Calculate total carbon emission
  const totalEmission = data.reduce((sum, item) => sum + (item.carbon_emission || 0), 0);

  // Calculate category emission percent map
  const activityItemPercentMap: Record<string, string> = React.useMemo(() => {
    const activityTotals: Record<string, number> = {};
    data.forEach(item => {
      if (!activityTotals[item.activity_item]) activityTotals[item.activity_item] = 0;
      activityTotals[item.activity_item] += item.carbon_emission || 0;
    });
    const result: Record<string, string> = {};
    Object.entries(activityTotals).forEach(([act, value]) => {
      result[act] = totalEmission ? ((value / totalEmission) * 100).toFixed(1) + '%': '0%';
    });
    return result;
  }, [data, totalEmission]);

  // Helper to get percent for a row
  const getPercent = (value: number) => {
    if (!totalEmission) return '0%';
    return ((value / totalEmission) * 100).toFixed(1) + '%';
  };

  // Add support for sorting by percent
  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    if (sortConfig.key === 'carbon_emission_percent') {
      return [...data].sort((a, b) => {
        const aPercent = a.carbon_emission / totalEmission;
        const bPercent = b.carbon_emission / totalEmission;
        if (aPercent < bPercent) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aPercent > bPercent) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return [...data].sort((a, b) => {
      if (a[sortConfig.key as keyof CompanyData] < b[sortConfig.key as keyof CompanyData]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key as keyof CompanyData] > b[sortConfig.key as keyof CompanyData]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig, totalEmission]);

  // Only allow sorting on visible columns
  const requestSort = (key: keyof CompanyData | 'carbon_emission_percent') => {
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
          <th onClick={() => requestSort('carbon_emission_percent')} style={{ cursor: 'pointer' }}>
            Carbon Emission (%) {sortConfig?.key === 'carbon_emission_percent' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
          </th>
          <th onClick={() => requestSort('activity_item')} style={{ cursor: 'pointer' }}>
            Activity Item {sortConfig?.key === 'activity_item' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
          </th>
          <th onClick={() => requestSort('emission_source')} style={{ cursor: 'pointer' }}>
            Emission Source {sortConfig?.key === 'emission_source' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
          </th>
          <th onClick={() => requestSort('company_name')} style={{ cursor: 'pointer' }}>
            Company Name {sortConfig?.key === 'company_name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
          </th>
          <th onClick={() => requestSort('solution_description')} style={{ cursor: 'pointer' }}>
            Solution {sortConfig?.key === 'solution_description' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
          </th>
          <th onClick={() => requestSort('website')} style={{ cursor: 'pointer' }}>
            Website {sortConfig?.key === 'website' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
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
            <td>{getPercent(item.carbon_emission)}</td>
            <td>{activityItemPercentMap[item.activity_item] ? `${item.activity_item} (${activityItemPercentMap[item.activity_item]})` : item.activity_item}</td>
            <td>{item.emission_source}</td>
            <td>{item.company_name}</td>
            <td>{item.solution_description}</td>
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
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableView; 