import React from 'react';
import { Panel } from 'primereact/panel';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import CarbonInventoryView from './CarbonInventoryView';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './ExporePage.css';
import SolutionView from './SolutionView';

const ExplorePage: React.FC = () => {
  return (
    <div className="p-d-flex p-flex-column" style={{ height: '100vh', overflow: 'hidden' }}>
      <Panel header="Demo Application" className="explore-full-height-panel" style={{ flexGrow: 1 }}>
        <Splitter style={{ height: 'calc(100vh - 42px)' }}>
          <SplitterPanel size={20}>
            <CarbonInventoryView />
          </SplitterPanel>
          <SplitterPanel size={80}>
            <SolutionView />
          </SplitterPanel>
        </Splitter>
      </Panel>
    </div>
  );
};

export default ExplorePage; 