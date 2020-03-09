import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: 200,
            },
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);



export default function AddBook() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Grid container spacing={3}  justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Box textAlign="center">
                        <h2>Add Book</h2>
                    </Box>
                    <Grid item xs={12}>
                        <TextField label="Title" id="standard-size-small" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Author" id="standard-size-normal"  />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Publish Date" id="standard-size-small" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Book Cover Url" id="standard-size-small" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Quantity" id="standard-size-small" size="small" />
                    </Grid>
                    <Button variant="contained" color="primary">
                        Submit
                    </Button>
                </Grid>

            </Grid>

        </form>
    );
}