import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import AppMenu from './components/menu/appMenu'
import HomePage from "./pages/homePage";
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
                <AppMenu />
                <Router>
                    <Route path="/" exact component={HomePage} />
                </Router>
        </div>
    );
}