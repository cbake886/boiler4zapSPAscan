
import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import useStyles from "./styles";
import Widget from "../../components/Widget";
// eslint-disable-next-line
import { Chip, Typography, Button, Avatar } from "../../components/Wrappers";


function Dashboard() {
  var classes = useStyles();
  // local
  const [oneValue, setoneValue] = useState('initial');
  const [twoValue, settwoValue] = useState('initial');
  const [threeValue, setthreeValue] = useState('initial');
  const [fourValue, setfourValue] = useState('initial');
  const [ueOneValue, setueOneValue] = useState('initial');
  const [ueTwoValue, setueTwoValue] = useState('initial');

  const handleClickOne = e => {
    e.preventDefault();
    axios.get('/api/bugs/pullone').then(res => setoneValue(res.data))
  };

  const handleClickTwo = e => {
    e.preventDefault();
    axios.get('/api/bugs/pulltwo').then(res => settwoValue(res.data))
  };

  const handleClickThree = e => {
    e.preventDefault();
    axios.get('/api/bugs/pullthree').then(res => setthreeValue(res.data))
  };

  const handleClickFour = e => {
    e.preventDefault();
    axios.get('/api/bugs/pullfour').then(res => setfourValue(res.data))
  };

  useEffect(() => {
    console.log('useEffect ONE')
    axios.all([
      axios.get('/api/bugs/useeffectone'), 
      axios.get('/api/bugs/useeffecttwo')])
    .then(axios.spread(function (one, two) {
      setueOneValue(one.data)
      setueTwoValue(two.data)
  }));
  }, [])

  return (
    <Grid container spacing={3}>
      <Grid item lg={3} sm={6} xs={12}>
        <Widget
          disableWidgetMenu
          title="Start a test"
          bodyClass={classes.fullHeightBody}
          className={classes.card}
        >
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={e => handleClickOne(e)}
          >
            Test Pull One
                                </Button>
                                <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={e => handleClickTwo(e)}
          >
            Test Pull Two
                                </Button>
                                <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={e => handleClickThree(e)}
          >
            Test Pull Three
                                </Button>
                                <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={e => handleClickFour(e)}
          >
            Test Pull Four
                                </Button>
        </Widget>
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <Widget
          disableWidgetMenu
          title="Test Pull Content"
          className={classes.card}
          bodyClass={classes.alignStandaloneElement}
        >
          <>
          <Typography variant={'h5'} className={classes.text} >
          Pull One Data
        </Typography>
        <Chip color="secondary" avatar={<Avatar>1</Avatar>} label={oneValue} />
        </>
        <>
          <Typography variant={'h5'} className={classes.text} >
          Pull Two Data
        </Typography>
        <Chip color="secondary" avatar={<Avatar>2</Avatar>} label={twoValue} />
        </>
        <>
          <Typography variant={'h5'} className={classes.text} >
          Pull Three Data
        </Typography>
        <Chip color="secondary" avatar={<Avatar>3</Avatar>} label={threeValue} />
        </>
        <>
          <Typography variant={'h5'} className={classes.text} >
          Pull Four Data
        </Typography>
        <Chip color="secondary" avatar={<Avatar>4</Avatar>} label={fourValue} />
        </>

        </Widget>
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <Widget
          disableWidgetMenu
          title="useEffect Content 1"
          className={classes.card}
          bodyClass={classes.fullHeightBody}
        >
          <>
          <Typography variant={'h5'} className={classes.text} >
          One Data
        </Typography>
        <Chip color="default" avatar={<Avatar>1</Avatar>} label={ueOneValue} />
        </>
        </Widget>
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <Widget
          disableWidgetMenu
          title="useEffect Content 2"
          className={classes.card}
          bodyClass={classes.fullHeightBody}
        >
<>
          <Typography variant={'h5'} className={classes.text} >
          Two Data
        </Typography>
        <Chip color="default" avatar={<Avatar>2</Avatar>} label={ueTwoValue} />
        </>
        </Widget>
      </Grid>
      <Grid item xs={12}>
        <Widget disableWidgetMenu noBodyPadding bodyClass={classes.tableWidget}>

        </Widget>
      </Grid>
    </Grid>
  );
}

// #######################################################################


export default Dashboard;
