import React from "react";

// import 'date-fns';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import MomentUtils from '@date-io/moment';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';


import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import { useCbnab150Context, addRegistro, removeRegistro } from "../../pages/Cnab150/context"



const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(3),
        padding: "1ch"

    },
    date: {
        marginBottom: 0,
        marginTop: 0
    },
    formControl: {
        marginRight: "5ch",
        minWidth: "120ch",
    },
}));

function NovoRegistro(props) {
    const { data, id } = props?.registro

    const [, useCbnab150Dispatch] = useCbnab150Context()


    const classes = useStyles();

    const handleRemove = () => {
        removeRegistro(useCbnab150Dispatch, id)
    }

    return (
        <>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="subtitle1">
                    Registro: "{data[0]?.valor}"
                </Typography>
                <Grid container spacing={2}>
                    {
                        data.map(registro => (
                            <GeraCampo key={registro.id} registro={registro} />
                        ))
                    }

                    <Grid item xs={1}>
                        <IconButton aria-label="delete"
                            onClick={handleRemove}
                        >
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                    </Grid>

                </Grid>
            </Paper>
        </>
    );
}

const GeraCampo = (props) => {
    const { tipo, id, label, valor } = props.registro

    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = (date) => {
        console.log(date)
        setSelectedDate(date);
    };

    switch (tipo) {
        case "text":
            return (
                <Grid item>
                    <TextField id={id} label={label} />
                </Grid>
            )
        case "number":
            return (
                <Grid item>
                    <TextField id={id} label={label} type={tipo} />
                </Grid>
            )
        case "date":
            return (
                <Grid item>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <KeyboardDatePicker className={classes.date}
                            disableToolbar
                            variant="inline"
                            format="DD/MM/yyyy"
                            margin="normal"
                            id={id}
                            label={label}
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
            )
        default:
            return null
    }


    // console.log(tipo, id, label, valor)
    // return campo[tipo]

}

export default NovoRegistro;


// text:
// <Grid item>
//     <TextField id={id} label={label} />
// </Grid>,
// date:
// <Grid item>
//     <MuiPickersUtilsProvider utils={MomentUtils}>
//         <KeyboardDatePicker className={classes.date}
//             disableToolbar
//             variant="inline"
//             format="DD/MM/yyyy"
//             margin="normal"
//             id={id}
//             label={label}
//             value={selectedDate}
//             onChange={handleDateChange}
//             KeyboardButtonProps={{
//                 'aria-label': 'change date',
//             }}
//         />
//     </MuiPickersUtilsProvider>
// </Grid>
// }