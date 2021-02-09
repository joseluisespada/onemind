import {
  createServer,
  Model
} from "miragejs";
import list from './users.json';

const makeServer = ({ environment = "development" } = {}) => {
  createServer({
    environment,

    routes() {  
      this.get("/api/animalsList", () => {
        const array = []
        list.map(object => object.animals)
            .map(animalArr => animalArr.forEach(animal => {
              if (array.indexOf(animal) === -1) array.push(animal)
            }))
        return array;
      })

      this.get("/api/animalLovers/:currentAnimal", (schema, request) => {
        const animal = request.params.currentAnimal;
        const people = list.filter(object => object.isActive && object.animals.includes(animal))
          .sort((a,b) => {
            if (a.points < b.points) {
              return 1;
            }
            if (a.points > b.points) {
              return -1;
            }
            return 0;
          })
          return people.slice(0,10);
      })
    },
  })
}

export default makeServer;