import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Book from '../../components/book/book'



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

export default function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                <Book />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Book />
                </Grid>
            </Grid>
        </div>
    );
}