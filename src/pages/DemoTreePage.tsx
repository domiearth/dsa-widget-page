import React, { useState } from 'react';
import { Tree } from 'primereact/tree';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";


interface TreeNode {
    key: string;
    label: string;
    data?: string;
    children?: TreeNode[];
}

const DemoTreePage: React.FC = () => {
    const [nodes] = useState<TreeNode[]>([
        {
            key: '0',
            label: 'Documents',
            children: [
                {
                    key: '0-0',
                    label: 'Work',
                    children: [
                        { key: '0-0-0', label: 'Expenses.doc' },
                        { key: '0-0-1', label: 'Resume.doc' }
                    ]
                },
                {
                    key: '0-1',
                    label: 'Home',
                    children: [
                        { key: '0-1-0', label: 'Invoices.txt' },
                        { key: '0-1-1', label: 'Notes.txt' }
                    ]
                }
            ]
        },
        {
            key: '1',
            label: 'Pictures',
            children: [
                { key: '1-0', label: 'Vacation.jpg' },
                { key: '1-1', label: 'Family.jpg' }
            ]
        }
    ]);

    const [selectedNodeKey, setSelectedNodeKey] = useState<string | null>(null);

    const handleNodeSelect = (event: any) => {
        setSelectedNodeKey(event.node.key);
    };

    return (
        <div className="p-4">
            <Card title="Demo Tree Page" className="shadow-2">
                <div className="flex gap-4">
                    <div className="flex-1">
                        <Tree value={nodes} onSelect={handleNodeSelect} className="w-full" />
                    </div>
                    <div className="flex-1">
                        <h3>Selected Node: {selectedNodeKey || 'None'}</h3>
                        <div className="mt-4">
                            <Button label="Add Node" icon="pi pi-plus" className="mr-2" />
                            <Button label="Remove Node" icon="pi pi-trash" className="p-button-danger" />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default DemoTreePage; 