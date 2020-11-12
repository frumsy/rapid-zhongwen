import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Vocab from './components/Vocab'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import words from './vocab.json'
import hsk1 from './hsk1.json'
import hsk2 from './hsk2.json'
import hsk3 from './hsk3.json'
import hsk4 from './hsk4.json'
import hsk5 from './hsk5.json'
import hsk6 from './hsk6.json'

const useStyles = makeStyles((theme) => ({
  container: {
    width: "auto",
    marginLeft: "0px",
    marginRight: "0px",
    marginTop: "100px",
    // padding: "0px",
  },
  answer: {
  },
  display:{
  }
}));

export default function App(){
  const [answer, setAnswer] = useState('');
  const [display, setDisplay] = useState('');
  const classes = useStyles();
  
  const handleSubmit = event => {
    setAnswer('')
    event.preventDefault();
  }
  const handleChange = event => {
    event.preventDefault();
    setAnswer(event.target.value)
  }
  return (
    <Router >
      <Switch>
        <Route path="/vocab">
          <Vocab/>
        </Route>
        <Route path="/">
          <Link to="/vocab">vocal list</Link>
          <Grid container className={classes.container} alignItems="center" direction="column" spacing={10}>
          <Grid item>
            <Paper className={classes.display}> |{answer}|</Paper>
          </Grid>
          <Grid  item>
            <form className={classes.answer} noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField id="outlined-basic" value={answer}  variant="outlined" onChange={handleChange}/>
            </form>
          </Grid>
          </Grid>
        </Route>
      </Switch>
    </Router>
  );
}