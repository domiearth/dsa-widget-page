import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import "primereact/resources/themes/lara-light-cyan/theme.css";


interface DemoItem {
    id: number;
    name: string;
    category: string;
    status: string;
}

const DemoListPage: React.FC = () => {
    const [items] = useState<DemoItem[]>([
        { id: 1, name: 'Item 1', category: 'Category A', status: 'Active' },
        { id: 2, name: 'Item 2', category: 'Category B', status: 'Inactive' },
        { id: 3, name: 'Item 3', category: 'Category A', status: 'Active' },
        { id: 4, name: 'Item 4', category: 'Category C', status: 'Active' },
    ]);

    const actionTemplate = (rowData: DemoItem) => {
        return (
            <div className="flex gap-2">
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-text" onClick={() => console.log('Edit:', rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-text p-button-danger" onClick={() => console.log('Delete:', rowData)} />
            </div>
        );
    };

    return (
        <Card title="Demo List Page" >
            <DataTable value={items} showGridlines  paginator rows={5} rowsPerPageOptions={[5, 10, 25]}
                >
                <Column field="id" header="ID" sortable ></Column>
                <Column field="name" header="Name" sortable ></Column>
                <Column field="category" header="Category" sortable></Column>
                <Column field="status" header="Status" sortable></Column>
                <Column body={actionTemplate}></Column>
            </DataTable>
        </Card>
    );
};

export default DemoListPage; 