import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SchoolIcon from "@material-ui/icons/School";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration : 'none',
    color: 'white'
  },
}));

export default function TopMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SchoolIcon
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          />
          <Typography variant="h6" className={classes.title}>
            Добро пожаловать на информационный портал РОИО
          </Typography>
          <Link to = {`/`} className={classes.link}>
          <Button color="inherit">Вернуться на главную</Button>
          </Link>
          <Button color="inherit">Обратиться за поддержкой</Button>

          
        </Toolbar>
      </AppBar>
    </div>
  );
}
