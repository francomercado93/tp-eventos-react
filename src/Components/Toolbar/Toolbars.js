import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom'
import { fallDown as Menu } from 'react-burger-menu'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import UsuarioCard from '../UsuarioCard';
library.add(faCalendar,faTicketAlt)


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  
};

export class Toolbars extends Component {
  constructor(props) {
    super(props)}
    render() {
  return (
  
    <div className={this.props.root}>
     
      <AppBar >
        <Toolbar>
          <IconButton className={this.props.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
          <Menu>
           <UsuarioCard></UsuarioCard>
        <h1 id="home" className="menu-item" href="/"><FontAwesomeIcon icon="calendar"/>Eventos</h1>
        <h1 id="about" className="menu-item" href="/about"><FontAwesomeIcon icon="ticket-alt"  /> Mis entradas</h1>

      </Menu>
          </IconButton>

          <Typography variant="h6" color="inherit" className={this.props.grow}>
         EventOS
          </Typography>
      
        </Toolbar>
      </AppBar>
    </div>
  );
}}

Toolbars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(Toolbars)

