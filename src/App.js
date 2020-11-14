import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Vocab from './components/Vocab'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import NotInterestedOutlinedIcon from '@material-ui/icons/NotInterestedOutlined';

//import words from './vocab.json'
import hsk1 from './hsk1.json'
import hsk2 from './hsk2.json'
import hsk3 from './hsk3.json'
import hsk4 from './hsk4.json'
import hsk5 from './hsk5.json'
import hsk6 from './hsk6.json'
import Game from './components/game'
// import { Check } from '@material-ui/icons';
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
    minWidth: '50px',
    minHeight: '10px',
  }
}));

export default function App(){
  const [answer, setAnswer] = useState('');
  const [currentHSK, setCurrentHSK] = useState(hsk1)
  const [row , setRow] = useState(currentHSK[1])
  const [display, setDisplay] = useState(row['word']);
  const [correct, setCorrect] = useState(true);
  const [mode, setMode] = useState('pinyin')

  const classes = useStyles();
  
  const updateDisplay =()=>{
    let fval = Math.random() * currentHSK.length
    let index = Math.floor(fval)
    let newRow = currentHSK[index]
    setRow(newRow)
    setDisplay(newRow['word'])  
  }

  useEffect(()=>{
    updateDisplay()
  },[currentHSK])

  const handleSubmit = event => {
    //Later on this should be extracted to another file/ component

    console.log(row)
    console.log(answer)
    //select mode here:
    let testStr = row['pinyin']
    if(mode === 'pinyin'){
      testStr = testStr.replace(/[0-9]/g, '');
    }
    else if(mode === 'tones'){
      testStr = testStr.replace(/[a-z]/g, '');
    }
    
    //delete spaces from both:
    testStr = testStr.split(" ").join("")
    let answerJoined = answer.split(" ").join("")

    //lowercase both:
    testStr = testStr.toLowerCase()
    answerJoined = answerJoined.toLowerCase()

    if(answerJoined === testStr){//correct
      setAnswer('')
      setCorrect(true)
      updateDisplay()
    }
    else{
      setAnswer('')
      setCorrect(false)
    }
    event.preventDefault();
  }

  const handleChange = event => {
    event.preventDefault();
    setAnswer(event.target.value)
  }

  const handleModeChange = mode => {
    console.log(mode)
    setMode(mode)
  }

  return (
    <Router >
      <Switch>
        <Route path="/vocab">
          <Vocab hsks={[hsk1, hsk2, hsk3, hsk4, hsk5, hsk6]} setCurrent={setCurrentHSK}/>
        </Route>
        <Route path="/">
          <Link to="/vocab">vocal list</Link>
          <Grid container className={classes.container} alignItems="center" direction="column" spacing={10}>
          
          <Grid item>
            <Paper className={classes.display}>{display}</Paper>
            <Paper> {correct ? <CheckCircleIcon/> : <NotInterestedOutlinedIcon/>} </Paper>
          </Grid>

          <Grid  item>
            <form className={classes.answer} noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField id="outlined-basic" value={answer}  variant="outlined" onChange={handleChange}/>
            </form>
          </Grid>

          <Grid item>
            <Game handleMode={handleModeChange}/>
          </Grid>
          
          </Grid>
        </Route>
      </Switch>
    </Router>
  );
}