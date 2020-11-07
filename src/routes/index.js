import React from "react";

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import { Link, Route, Switch } from "react-router-dom";

import Cnab150 from "../pages/Cnab150";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: theme.spacing(2)
    }
}));

function Routes() {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Link color="inherit" to="/" >
                        Cnab150
                </Link>
                    <Link color="inherit" to="/cnab240">
                        Cnab240
                </Link>
                </Toolbar>
            </AppBar>

            <Switch>
                <Route exact path="/"><Cnab150 /></Route>
            </Switch>
        </>
    );
}

export default Routes;
