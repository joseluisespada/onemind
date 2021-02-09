import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from './components/Avatar/Avatar';
import Card from './components/Card/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  currentAnimal: {
    display: "flex",
    justifyContent: "center"
  },
  pets: {
    marginTop: "40px"
  },
  people: {
    marginTop: "40px"
  }
}));

export default function App() {
  const [animalList, setAnimalList] = useState([]);
  const [currentAnimal, setCurrentAnimal] = useState(undefined);
  const [animalLovers, setAnimalLovers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch(`/api/animalsList`, { signal })
      .then((res) => res.json())
      .then((json) => {
        setAnimalList(json);
      })
      .catch((e) => {
        console.error(e);
      });

    return function cleanup() {
      abortController.abort();
    }
  }, []);

  useEffect(() => {
    if (currentAnimal === undefined) return;
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch(`/api/animalLovers/${currentAnimal}`, { signal })
      .then((res) => res.json())
      .then((json) => {
        setAnimalLovers(json);
      })
      .catch((e) => {
        console.error(e);
      });

    return function cleanup() {
      abortController.abort();
    }
  }, [currentAnimal]);

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Choose a Pet
        </Typography>

        <Grid container className={classes.pets} spacing={2}>
        {animalList.map(animal => (
          <Avatar 
            key={animal}
            data-testid={animal}
            size="small" 
            name={animal} 
            onClick={val => setCurrentAnimal(val)}
          />
        ))}
        </Grid>

        {currentAnimal && (
          <div className={classes.currentAnimal}>
          <Avatar 
            size="large" 
            name={currentAnimal} 
          />
          </div>
        )}
        
        <Grid container className={classes.people} spacing={2}>
        {animalLovers.map(person => (          
          <Grid key={person.id} item xs={12} sm={4}>
            <Card             
              name={person.name} 
              points={person.points}
              age={person.age}
            />
          </Grid>          
        ))}
        </Grid>

      </Box>
    </Container>
  );
}
