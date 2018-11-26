import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { EntradasService } from "../Services/EntradasService";
import { EntradaRow } from './EntradaRow'
import { USRID } from '../Services/configuration'
import { Entrada } from '../Domain/Entrada'

const styles = {
    precioTotal: {
        height: 100,
        padding: '3em',
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
};

export class MisEntradas extends Component {
    constructor(props) {
        super(props);
        this.entradasService = new EntradasService()
        this.state = { entradas: [] }
    }
    async componentWillMount() {
        try {
            const res = await this.entradasService.getEntradasUsr(USRID)
            const entradasJson = await res.json()
            console.log(entradasJson)
            this.setState({
                entradas: entradasJson.map((entradaJson) => Entrada.fromJson(entradaJson))
            })
        } catch (e) {
            console.log("error" + e)
            this.errorHandler(e)
        }
    }

    errorHandler(errorMessage) {
        throw errorMessage
    }

    render() {
        return (
            <Paper>
                <Grid>
                    {/* {this.state.entradas} */}
                    {this.state.entradas.map(entrada =>
                        <EntradaRow entrada={entrada} key={entrada.id} />
                    )}
                </Grid>
                <Grid item style={styles.precioTotal}>
                    <Typography gutterBottom variant="h2" align="center">
                        Saldo: $ 850
              </Typography>
                </Grid>
            </Paper>
        )
    }
}

export default withStyles(styles)(MisEntradas)


