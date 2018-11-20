import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import purple from '@material-ui/core/colors/purple';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createMuiTheme, withStyles, withTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
// import PropTypes from 'prop-types';
import { Component, default as React } from 'react';
import imgPerfil from '../../images/agustin.png';
import { UsuarioService } from "../../Services/UsuarioService";

library.add(faCalendarCheck, faTicketAlt)
export const USRID = 0;

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});
const styles = {
  typography: {
    useNextVariants: true,
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary
  },
  grow: {
    flexGrow: 1,
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

  bigAvatar: {
    width: 200,
    height: 200,
  },

};

export class Toolbars extends Component {
  constructor(props) {
    super(props)
    this.usuarioService = new UsuarioService()
    this.usuario = this.usuarioService.getUsuarioByID(0)
  }
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
      <div className={this.props.root}>
        <Card >
          <List>
            <ListItem>
              <Avatar alt="Agustin5" src={imgPerfil}></Avatar>
              <ListItemText primary={this.usuario.nombreUsuario} secondary={this.usuario.mail} />
            </ListItem>
          </List>
        </Card>
        <List>
          {['Eventos interesantes', 'Mis entradas'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <FontAwesomeIcon icon="calendar-check" /> : <FontAwesomeIcon icon="ticket-alt" />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
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
// Toolbars.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
export default withStyles(styles)(Toolbars)
withTheme(theme)(Toolbars)

