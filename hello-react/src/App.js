import React from 'react';
import List from './List';
import Add from './Add';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class App extends React.Component {
  state = {
      data : ['a','b']
    }

    add = (name) => {
      this.setState({
        data : [...this.state.data,name]
      })
    }

    remove = (name) => {
      this.setState({
        data : this.state.data.filter(item => item !== name)
      })
    }
  render(){
    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" style={{flexGrow:1}}>
              My App
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <div>
            <List data={this.state.data} remove={this.remove}/>
            <Add add={this.add}/>
        </div>
        <BottomNavigation showLabels style={{position: 'fixed', bottom:0, width:'100%'}}>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </div>
    )
  }
  
}

export default App;