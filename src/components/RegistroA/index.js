import React from "react";

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import MomentUtils from '@date-io/moment';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(3),
        padding: "1ch"

    },
    date: {
        marginBottom: 0,
        marginTop: 0
    },
    addButton: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    formControl: {
        marginRight: "5ch",
        minWidth: "120ch",
    },
}));

function RegistroA() {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = (date) => {
        console.log(date)
        setSelectedDate(date);
    };

    return (
        <>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="subtitle1">
                    Registro: "A"
                 </Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <TextField id="A02" label="Código Remessa" />
                    </Grid>
                    <Grid item>
                        <TextField id="A03" label="Código Convênio" />
                    </Grid>
                    <Grid item>
                        <TextField id="A04" label="Nome Destinatário" />
                    </Grid>
                    <Grid item>
                        <TextField id="A05" label="Código Depositaria" />
                    </Grid>
                    <Grid item>
                        <TextField id="A06" label="Nome Depositaria" />
                    </Grid>
                    <Grid item>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <KeyboardDatePicker className={classes.date}
                                disableToolbar
                                variant="inline"
                                format="DD/MM/yyyy"
                                margin="normal"
                                id="A07"
                                label="Data de Geração"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item>
                        <TextField id="A08" label="Número NSA" />
                    </Grid>
                    <Grid item>
                        <TextField id="A09" label="Versão Layout" />
                    </Grid>
                    <Grid item>
                        <TextField id="A10" label="ID Serviço" />
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}

export default RegistroA;
