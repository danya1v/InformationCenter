import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'


const useStyles = makeStyles({
  root: {
    width: 345,
    textDecoration : 'none',
    marginLeft : '30px',
    marginRight : '30px',
  },
  media: {
    height: 140,
  },
  link: {
    textDecoration : 'none',
  },
 
 
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} >
               <Link to = {`/${props.link}`} className={classes.link}>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography  variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
   
      </Link>
    </Card>
  );
}
