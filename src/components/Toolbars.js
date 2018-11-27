import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarCheck, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { UsuarioCard } from './UsuarioCard'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

library.add(faCalendarCheck, faTicketAlt)

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});


class Toolbars extends Component {

  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  render() {
    const sideList = (
      <div >
        <UsuarioCard />
        <List>
          <ListItem button key={'Eventos interesantes'}>
            <Button onClick={() => this.props.history.push('/')}>
              <ListItemIcon>
                <FontAwesomeIcon icon="calendar-check" size="2x" />
              </ListItemIcon>
              <ListItemText primary={'Eventos interesantes'} />
            </Button>
          </ListItem>

          <ListItem button key={'Mis entradas'}>
            <Button onClick={() => this.props.history.push('/mis-entradas')}>
              <ListItemIcon>
                <FontAwesomeIcon icon="ticket-alt" size="2x" />
              </ListItemIcon>
              <ListItemText primary={'Mis entradas'} />
            </Button>
          </ListItem>
        </List>
      </div >
    );

    return (
      <MuiThemeProvider theme={theme}>
        < AppBar position="fixed" >
          <Toolbar>
            <IconButton className={this.props.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
              >
                {sideList}
              </div>
            </Drawer>
            <Typography variant="h6" color="inherit">
              EventOS
          </Typography>
          </Toolbar>
        </AppBar >
      </MuiThemeProvider>
    );
  }
}
export default withRouter(Toolbars)


