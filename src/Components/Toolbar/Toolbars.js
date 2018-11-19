import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';



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
     
      <AppBar position="static">
        <Toolbar>
          <IconButton className={this.props.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
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

export default withStyles(styles)(Toolbars);

