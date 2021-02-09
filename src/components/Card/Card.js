import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  p: {
  	marginBottom: "15px"
  },
  points: {
  	width: "100%",
  	backgroundColor: theme.palette.secondary.light,
  	padding: "5px 15px",
  	textAlign: "center"
  }
}));

export default function CardComponent({ name = {}, points, age }) {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography className={classes.p} variant="body1" component="p">
          Name: {name.given}
        </Typography>
        <Typography className={classes.p} variant="body1" component="p">
          Surname: {name.surname}
        </Typography>
        <Typography className={classes.p} variant="body1" component="p">
          Age: {age}
        </Typography>
      </CardContent>
      <CardActions>
      	<Typography className={classes.points} variant="body1" component="p">
          {points} pts
        </Typography>
      </CardActions>
    </Card>
  );
}

CardComponent.propTypes = {
  name: PropTypes.shape({
    given: PropTypes.string,
    surname: PropTypes.string
  }),
  age: PropTypes.number,
  points: PropTypes.number
};