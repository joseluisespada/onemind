import React from 'react';
import PropTypes from "prop-types";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { stringToColor } from '../../lib/utils';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  base: {
  	backgroundColor: theme.palette.secondary.light,
  	cursor: "pointer"
  },
  small: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function AvatarImage({ size, name, onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar 
      	className={clsx(classes[size], classes.base)}
      	data-testid="avatar"
      	style={{color: stringToColor(name)}}
      	onClick={e => {
      		e.preventDefault();
      		onClick(name)
      	}}
      >
      	{name}
      </Avatar>
    </div>
  );
}

AvatarImage.defaultProps = {
  size: "small",
};

AvatarImage.propTypes = {
  size: PropTypes.oneOf([
    "small",
    "large",
  ]),
  name: PropTypes.string,
  onClick: PropTypes.func
};