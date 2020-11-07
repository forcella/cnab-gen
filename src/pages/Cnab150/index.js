import React from "react";

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import RegistroA from "../../components/RegistroA";

import EscolheTipoRegistro from "../../components/EscolheTipoRegistro";
import NovoRegistro from "../../components/NovoRegistro";

import { Cnab150Provider, useCbnab150Context, addRegistro } from "./context";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        maxWidth: "100%"

    },
    addButton: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

function Cbnab150() {
    const classes = useStyles();

    const [useCnab150State, useCbnab150Dispatch] = useCbnab150Context()

    const handleAddRegistro = () => {
        addRegistro(useCbnab150Dispatch, {})
    }



    return (
        <Container className={classes.mainContainer}>
            <RegistroA />


            {
                useCnab150State.registros.map(registro => (
                    !registro.data
                        ? <EscolheTipoRegistro key={registro.id} registro={registro} />
                        : <NovoRegistro key={registro.id} registro={registro} />
                ))

            }

            <Fab color="primary" aria-label="add"
                className={classes.addButton}
                onClick={handleAddRegistro}>
                <AddIcon />
            </Fab>
        </Container >


    );
}

export default Cbnab150;
