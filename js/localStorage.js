export function leerData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

 export function actualizarStorage(clave, data){
    localStorage.setItem(clave, JSON.stringify(data));
}