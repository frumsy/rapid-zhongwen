import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default ({handleMode})=> {
    const [type, setType] = useState("pinyin")
    const handleChange = (e)=>{
        setType(e.target.value)
        console.log(e.target.value)
        handleMode(e.target.value)
    }
    return (
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleChange}
        >
          <MenuItem value={"pinyin"}><em>pinyin</em></MenuItem>
          <MenuItem value={"tones"}><em>tone</em></MenuItem>
          <MenuItem value={"both"}><em>pinyin and tone</em></MenuItem>
          </Select>
    )
}
