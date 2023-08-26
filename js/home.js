import { Superheroe } from "./superheroes.js";
import {leerData} from "./localStorage.js";
import {crearCard} from "./cards.js";


const listaSuperHeroes = leerData("superheroes");

crearCard(listaSuperHeroes);