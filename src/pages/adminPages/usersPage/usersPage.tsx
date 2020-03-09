import React,  { useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';


import { useDispatch, useSelector } from "react-redux";

import {fetchUsers} from "../../../redux/thunks";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const UsersPage = () => {
    const classes = useStyles();
    const users = useSelector((state) => state.admin.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, []);


    return (
        <TableContainer component={Paper}>
            <Box textAlign="center">
                <h2>Users</h2>
            </Box>
                <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Surname</TableCell>
                        <TableCell align="left">Username</TableCell>
                        <TableCell align="left">Role</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users && users.map(user => (
                        <TableRow key={user.name}>
                            <TableCell component="th" scope="row">
                                {user.name}
                            </TableCell>
                            <TableCell align="left">{user.surname}</TableCell>
                            <TableCell align="left">{user.username}</TableCell>
                            <TableCell align="left">{user.role}</TableCell>
                            <TableCell align="left">{user.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default UsersPage;