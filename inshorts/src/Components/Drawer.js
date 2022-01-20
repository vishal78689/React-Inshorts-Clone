import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import categories from '../category';

const useStyles = makeStyles({
  list: {
    width: 200,
    paddingLeft:10,
    paddingRight:5
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer({setcategory}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    
    left: false,
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, ["left"]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: "left" === 'top' || "left" === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        
          <ListItem >
          Categories
          </ListItem>
        
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem
          style={{height:40,borderRadius:3}}
           button key={text} onClick={()=>setcategory(text)}>
           
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
     
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}>

          <MenuIcon/>
          </Button>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </React.Fragment>
   
    </div>
  );
}
