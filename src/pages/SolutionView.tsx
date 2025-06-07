import React from 'react';
import { Panel } from 'primereact/panel';
import { Splitter, SplitterPanel } from 'primereact/splitter';

const SolutionView: React.FC = () => {
  return (
    <Splitter layout="vertical" style={{ height: '100%' }}>
      <SplitterPanel size={50}>
        <Panel header="Upper View">
          {/* Content for the upper part of Carbon Inventory */}
        </Panel>
      </SplitterPanel>
      <SplitterPanel size={50}>
        <Panel header="Lower View">
          {/* Content for the lower part of Carbon Inventory */}
        </Panel>
      </SplitterPanel>
    </Splitter>
  );
};

export default SolutionView; 