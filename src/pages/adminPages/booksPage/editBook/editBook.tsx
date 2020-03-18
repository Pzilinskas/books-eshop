import React, {useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from "react-redux";

import {fetchBookById} from "../../../../redux/thunks";


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


export default function EditBook(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const book = useSelector((state) => state.books.selectedBook[0]);


    useEffect(() => {
        dispatch(fetchBookById(props.match.params.id))
    }, []);

    console.log(book)
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Grid container spacing={3}  justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Box textAlign="center">
                        <h2>Edit Book</h2>
                    </Box>
                    <Grid item xs={12}>
                        <TextField label="Title" id="standard-size-small" size="small" value={book && book.title} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Author" id="standard-size-normal" value={book && book.author}  />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Publish Date" id="standard-size-small" size="small" value={book && book.publishedDate} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Book Cover Url" id="standard-size-small" size="small" value={book && book.bookCover} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Quantity" id="standard-size-small" size="small" value={book && book.quantity} />
                    </Grid>
                    <Button variant="contained" color="primary">
                        Submit
                    </Button>
                </Grid>

            </Grid>

        </form>
    );
}