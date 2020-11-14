import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from "react-router-dom";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     width: "auto",
//     marginLeft: "0px",
//     marginRight: "0px",
//   },
// }));

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'word', headerName: 'word', width: 130 },
  { field: 'pinyin', headerName: 'pinyin', width: 130 },
  { field: 'def', headerName: 'def', type: 'number', width: 700 },
];

export default ({hsks, setCurrent}) => {
  console.log(hsks)
  const [level, setLevel] = useState(0)
  const [currentHSK, setCurrentHSK] = useState(hsks[level])
  // const classes = useStyles()

  useEffect(()=>{
    setCurrentHSK(hsks[level])
    setCurrent(hsks[level])
  },[level, hsks, setCurrent])

  const handleChange = (e)=>{
    console.log("value",e.target.value)
    setLevel(e.target.value);
  }
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Link to="/">practice</Link>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={level}
          onChange={handleChange}
        >
          <MenuItem value={1-1}><em>HSK1</em></MenuItem>
          <MenuItem value={2-1}>HSK2</MenuItem>
          <MenuItem value={3-1}>HSK3</MenuItem>
          <MenuItem value={4-1}>HSK4</MenuItem>
          <MenuItem value={5-1}>HSK5</MenuItem>
          <MenuItem value={6-1}>HSK6</MenuItem>
        </Select>
        <DataGrid rows={currentHSK} columns={columns} pageSize={5} checkboxSelection />

    </div>
  );
}