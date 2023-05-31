class Personaje {
    constructor(id, nombre, fuerza) {
      this.id = id;
      this.nombre = nombre;
      this.fuerza = fuerza;
    }
}

export class Superheroe extends Personaje {
    constructor(id, nombre, fuerza, alias, editorial) {
      super(id, nombre, fuerza);
      this.alias = alias;
      this.editorial = editorial;
    }
  }



