import React,  { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from 'react-router-dom';

import {fetchBooks} from "../../../redux/thunks";
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function BooksPage(props) {
    const classes = useStyles();
    const books = useSelector((state) => state.books.books);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks())
    }, []);

    return (
        <TableContainer component={Paper}>
            <Box textAlign="center">
                <h2>Books</h2>
            </Box>
            <Button variant="contained" color="primary">
                <Link to="/admin/books/add">
                    Add Book
                </Link>
            </Button>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Id</TableCell>
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="center">Author</TableCell>
                        <TableCell align="center">Publish Date</TableCell>
                        <TableCell align="center">Book Cover</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books && books.map(book => (
                        <TableRow key={book._id}>
                            <TableCell component="th" scope="row">
                                {book._id}
                            </TableCell>
                            <TableCell align="right">{book.title}</TableCell>
                            <TableCell align="right">{book.author}</TableCell>
                            <TableCell align="right">{book.publishedDate}</TableCell>
                            <TableCell align="right">{book.bookCover}</TableCell>
                            <TableCell align="right">{book.quantity}</TableCell>
                            <TableCell align="right">
                                <Button variant="contained" color="secondary">
                                    Delete
                                </Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button variant="contained" color="secondary" component={RouterLink} to={`/admin/books/edit/${book._id}`}>
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
