import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {UsuarioService }from "../Services/UsuarioService"
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

const  usuarioService = new UsuarioService();
const usuario=   usuarioService.getUsuarioPrincipal()


function UsuarioCard(props) {
  const { classes, theme } = props
  

  
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h4" variant="h4">
          {usuario.nombre}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
           {usuario.mail}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
         </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={require("C:/Users/Leo/Documents/React/tp-eventos-react-grupo-8/src/Perfil.jpg")}
       
      />
    </Card>
  );
}

UsuarioCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UsuarioCard)