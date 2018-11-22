import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarCheck, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
// import PropTypes from 'prop-types';


library.add(faCalendarCheck, faTicketAlt)
export const USRID = 0;

// const theme = createMuiTheme({
//   typography: {
//     useNextVariants: true,
//   },
//   palette: {
//     primary: purple,
//     secondary: {
//       main: '#f44336',
//     },
//   },
// });
// const styles = {
//   typography: {
//     useNextVariants: true,
//   },
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.secondary
//   },
//   grow: {
//     flexGrow: 1,
//   },

//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },

//   bigAvatar: {
//     width: 200,
//     height: 200,
//   },

// };

class Toolbars extends Component {
  // constructor(props) {
  //   super(props)
  //   this.usuarioService = new UsuarioService()
  //   this.usuario = this.usuarioService.getUsuarioByID(0)
  // }
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  render() {
    // const { classes } = this.props;
    const sideList = (
      <div >
        {/* <Card >
          <List>
            <ListItem>
              <Avatar alt="Agustin5" src={imgPerfil}></Avatar>
              <ListItemText primary={this.usuario.nombreUsuario} secondary={this.usuario.mail} />
            </ListItem>
          </List>
        </Card> */}
        <List>
          <ListItem button key={'Eventos interesantes'}>
            <Button onClick={() => this.props.history.push('/')}>
              <ListItemIcon>
                <FontAwesomeIcon icon="calendar-check" />
              </ListItemIcon>
              <ListItemText primary={'Eventos interesantes'} />
            </Button>
          </ListItem>

          <ListItem button key={'Mis entradas'}>
            <Button onClick={() => this.props.history.push('/mis-entradas')}>
              <ListItemIcon>
                <FontAwesomeIcon icon="ticket-alt" />
              </ListItemIcon>
              <ListItemText primary={'Mis entradas'} />
            </Button>
          </ListItem>


          {/* {['Eventos interesantes', 'Mis entradas'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <FontAwesomeIcon icon="calendar-check" /> : <FontAwesomeIcon icon="ticket-alt" />}</ListItemIcon>
              <ListItemText primary={text} />
              <FontAwesomeIcon icon="ticket-alt" />
            </ListItem>
          ))} */}
        </List>
      </div >
    );

    return (
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
    );
  }
}
export default withRouter(Toolbars)
// Toolbars.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
// withStyles(styles)(Toolbars)
// withTheme(theme)(Toolbars)

