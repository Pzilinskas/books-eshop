import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
                <Router>
                    <AppMenu />
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/admin" component={AdminPage} />
                        <Route path="/order" component={OrderPage} />
                        <Route path="/my-orders" component={UserOrdersPage} />
                    </Switch>
                </Router>
        </div>
    );
}