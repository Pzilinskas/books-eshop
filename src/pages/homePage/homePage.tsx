import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from "react-redux";

import {fetchBooks} from "../../redux/thunks";
import Book from '../../components/book/book'
import TableBody from "@material-ui/core/TableBody";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

export default function HomePage() {
    const books = useSelector((state) => state.books.books);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooks())
    }, []);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                { books && books.map(bookItem => (
                    <Grid item xs={12} sm={6} md={4} key={bookItem._id}>
                        <Book book={bookItem} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}