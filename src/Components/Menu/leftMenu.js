import React, { useState, useEffect } from 'react';
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
//my
import menu from "../../admpractic";
import voditel from "../../voditel";
import auto from "../../auto";

import { Link } from "react-router-dom";
//my хлебные крошки
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import GrainIcon from "@material-ui/icons/Grain";
import MainFrame from '../MainFrame/MainFrame';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  LinkClass: {
    textDecoration: "none",
    color: "black",
  },
  link: {
    display: "flex",
    textDecoration: "none",
    color: "white",
    fontSize: "22px",
    margin: "0 auto",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 26,
    height: 26,
  },
  title: {
    marginLeft: "250px",
  },
}));

//хлебные крошки


export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
   


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  

  return (
    <>
    <div className={classes.root}>
     

      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        
            <Link
              color="inherit"
             
              className={classes.link}
              to = "/"
            >
              <HomeIcon className={classes.icon} />
              Главное меню
            </Link>
            <Typography color="textPrimary" className={classes.link}>{props.name}</Typography>
              
              
            
            <Typography color="textPrimary" className={classes.link}>
              
              {props.nameTwo}
            </Typography>
          

          {/* <Typography variant="h6" className={classes.title}>
            Информационный портал РОИО ГИБДД
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}S
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>

        <Divider />
        <List>
          {menu.map((item, index) => (
            <Link
              to={item.link}
              key={item.label}
              className={classes.LinkClass}
              onClick={handleDrawerClose}
              
              
            >
              <ListItem button key={item.label}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>

                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary={item.label} />
              </ListItem>
            </Link>
          ))}
        </List>

        <Divider />

        <Divider />
        <List>
          {voditel.map((item, index) => (
            <Link
              to={item.link}
              key={item.label}
              className={classes.LinkClass}
              onClick={handleDrawerClose}
            >
              <ListItem button key={item.label}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>

                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary={item.label} />
              </ListItem>
            </Link>
          ))}
        </List>

        <Divider />
        <Divider />
        <List>
          {auto.map((item, index) => (
            <Link
              to={item.link}
              key={item.label}
              onClick={handleDrawerClose}
              className={classes.LinkClass}
            >
              <ListItem button key={item.label}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>

                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary={item.label} />
              </ListItem>
            </Link>
          ))}
        </List>

        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
    
    </>
  );
}
