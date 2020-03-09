import React,  { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Switch, Route, Link } from 'react-router-dom';

import BooksPage from "../booksPage/booksPage";
import OrdersPage from "../ordersPage/ordersPage";
import UsersPage from "../usersPage/usersPage";


interface Props {
    onGetUsersStart: () => void;
}

const useStyles = makeStyles({
    root: {
       // width: 500,
    },
});


export default function AdminPage(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        props.onGetUsersStart;
        }, []
    );
    return (
        <div>
            <Switch>
                <Route path="/admin/books" component={BooksPage} />
                <Route path="/admin/users" render={(match) =>
                    <UsersPage match={match}/>
                }  />
                <Route path="/admin/orders" component={OrdersPage} />
            </Switch>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <Link to="/admin/users">
                    <BottomNavigationAction label="Users" icon={<PeopleIcon />} />
                </Link>
                <Link to="/admin/orders">
                    <BottomNavigationAction label="Orders" icon={<ShoppingCartIcon />} />
                </Link>
                <Link to="/admin/books">
                    <BottomNavigationAction label="Books" icon={<MenuBookIcon />} />
                </Link>
            </BottomNavigation>
            </div>
    );
}
