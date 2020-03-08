import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import AppMenu from './components/menu/appMenu'
import HomePage from "./pages/homePage/homePage";
import LoginPage from "./pages/loginPage/loginPage";
import AdminPage from "./pages/adminPages/adminPage/adminPage";
import OrderPage from "./pages/orderPage/orderPage";
import UserOrdersPage from "./pages/userOrdersPage/userOrdersPage";
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
                <Router>
                    <AppMenu />
                    <Switch>
                        <Route path="/" exact >
                            <HomePage />
                        </Route>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <Route path="/admin">
                            <AdminPage />
                        </Route>
                        <Route path="/order">
                            <OrderPage />
                        </Route>
                        <Route path="/my-orders">
                            <UserOrdersPage />
                        </Route>
                    </Switch>
                </Router>
        </div>
    );
}