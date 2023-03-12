import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CardAd(props) {
 
  return (
    <Card sx={{ width: 300, minHeight: 300, my: 5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="body" component="div">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           Rs. {props.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.descryption}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  size="small" color="primary">
          Avaliable
        </Button>
      </CardActions>
    </Card>
  );
}