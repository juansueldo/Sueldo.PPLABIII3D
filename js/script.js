import { Superheroe} from "./superheroes.js";
import { actualizarTabla } from "./tabla.js";
import { ValidarString } from "./validaciones.js";

const listaSuperheroes = JSON.parse(localStorage.getItem("superheroes")) || [];

const $seccionTabla = document.getElementById("tabla");
const $formulario = document.forms[0];
const $button = document.getElementById("button");
const $buttonCancel = document.getElementById("button-cancel");
const $titulo = document.getElementById("titulo");
const $select = document.getElementById("select-arma");

const armas = ["Armadura", "Espada", "Martillo", "Escudo", "Arma de Fuego", "Flechas"];

window.onload = () => {
    armas.forEach((arma) => {
        const $option = document.createElement("option");
        $option.value = arma;
        $option.textContent = arma;
        $option.setAttribute('name', 'optArma');
        $select.appendChild($option);
      });
}
window.addEventListener("click", (e)=>{
    if(e.target.matches("td")){
        const idSuperHeroe= e.target.parentElement.dataset.id;
        const selectedSuperheroe = listaSuperheroes.find(per => per.id == idSuperHeroe);
        cargarFormulario($formulario, selectedSuperheroe);
        $button.classList.remove("hidden-btn");
        $buttonCancel.classList.remove("hidden-btn");
        $titulo.textContent = "Modificar/Eliminar SuperHeroe";
    }
    else if(e.target.matches("input[value='Eliminar']")){
        const id = parseInt($formulario.txtId.value);
        handlerDelete(id)
    }
    else if(e.target.matches("input[value='Cancelar']")){
        resetFormulario();
    }
});


$formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const {txtId, txtNombre, txtAlias,rdoEditorial, txtFuerza} = $formulario;
    const opciones = $select.options;
    console.log(opciones.value);
    if(txtId.value === ""){
        console.log("carga...");
            const newSuperHeroe = new Superheroe(txtId.value, txtNombre.value, parseInt(txtFuerza.value), txtAlias.value, rdoEditorial.value, opciones.value);
            handlerCreate(newSuperHeroe);
            resetFormulario();
    }
  
    else{
        console.log("modificacion...");
            const updateSuperHeroe = new Superheroe(parseInt(txtId.value),txtNombre.value, parseInt(txtFuerza.value), txtAlias.value, rdoEditorial.value, opciones.value);
            handlerUpdate(updateSuperHeroe);
            resetFormulario();
 
    }
    

});

function handlerCreate(nuevoSuperHeroe){
    listaSuperheroes.push(nuevoSuperHeroe);
    actualizarStorage("superheroes", listaSuperheroes);
    actualizarTabla($seccionTabla, listaSuperheroes);
}
function handlerUpdate(updateSuperheroe){
    const index = listaSuperheroes.findIndex((sup) => sup.id === updateSuperheroe.id);
    listaSuperheroes.splice(index, 1, updateSuperheroe )
    actualizarStorage("superheroes", listaSuperheroes);
    actualizarTabla($seccionTabla, listaSuperheroes);
}
function handlerDelete(id){
    const index = listaSuperheroes.findIndex((sup) => sup.id === id);
    listaSuperheroes.splice(index, 1);
    actualizarStorage("superheroes", listaSuperheroes);
    actualizarTabla($seccionTabla, listaSuperheroes); 
    resetFormulario();
}
function actualizarStorage(clave, data){
    localStorage.setItem(clave, JSON.stringify(data));
}
function cargarFormulario(formulario, superheroe){
    formulario.txtId.value = superheroe.id;
    formulario.txtNombre.value = superheroe.nombre;
    formulario.txtAlias.value = superheroe.alias;
    formulario.rdoEditorial.value = superheroe.editorial;
    formulario.txtFuerza.value = superheroe.fuerza;
    //formulario.optArma = superheroe.arma;

}
function resetFormulario(){
    $button.classList.add("hidden-btn");
    $buttonCancel.classList.add("hidden-btn");
    $titulo.textContent = "Informacion del SuperHeroe";
    $formulario.reset();
}










