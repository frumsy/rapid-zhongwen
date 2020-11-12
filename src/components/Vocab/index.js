import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from "react-router-dom";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'word', headerName: 'word', width: 130 },
  { field: 'pinyin', headerName: 'pinyin', width: 130 },
  { field: 'def', headerName: 'def', type: 'number', width: 700 },
];

const handleChooseLevel = (e)=>{
  
}
export default ({hsks}) => {
  const [level, setLevel] = useState(hsks[1])
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Link to="/">practice</Link>
      <DataGrid rows={level} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}