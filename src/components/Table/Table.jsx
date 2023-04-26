import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './table.css';
export default function TableComponent(props) {
  return (
    <div style={{ height: '600px', width: '100%' }}>
      <DataGrid
        rows={props?.rows}
        columns={props?.columns}
        pageSize={10}
        disableColumnMenu={true}
        rowHeight={props?.rowHeight}
        justify="center"
      />
    </div>
  );
}
