
cambiomg = document.querySelector(".pepsi-f");

document.querySelector(".uno").addEventListener("click",(e)=>{
    cambiomg.setAttribute("src","imgs/pepsi001.png");
    document.querySelector(".body").style.backgroundColor = "rgb(37, 110, 220)";

})

document.querySelector(".dos").addEventListener("click",(e)=>{
    cambiomg.setAttribute("src","imgs/pepsi002.png");
    document.querySelector(".body").style.backgroundColor = "red";
})

document.querySelector(".tres").addEventListener("click",(e)=>{
    cambiomg.setAttribute("src","imgs/pepsi003.png");
    document.querySelector(".body").style.backgroundColor = "black";
})




















































/*

EVENTOS

- .addEventListener() =  crea un evento asociado a cualquier elemento;
- .removeEventListener = elimina el evento creado


Eventos de click

- click : ocurre el evento al hacer click;
- dblclick: ocurre el evento al hacer doble click;
- mouseover : si entra el mouse, si se mueve sobre un elemento
- mouseout : si sale el mouse
- contextenu: si se da click derecho;
- mouseenter : ocurre cuando el mouse se mueve sobre un elemento;
- mouseleave : se ejecuta todo el tiempo y es como mouseout;
- mousedown : cuando se apreta el click,no importa si no se suelta;
- mouseup : cuando se suelta sobre un elemento;

Eventos de teclado

- keydown: cuando se presiona una tecla;
- keypress: cuando se presiona y se suelta una tecla;
- keyup: cuando se suelta una tecla;

Eventos de la interfaz

- error: si por alguna razon no se carga y por ende un error;
- load: ocurre cuando un objeto se ha cargado
WINDOW

- .open() : abre una ventana nueva;
- .close() : cierra la ventana actual o a la que se llamo;
- .closed() : Devuelve un valor booleano si la ventana esta cerrada o abierta;
- .stop() : se detiene la web deja de cargar recursos;
- .alert() : muestra una alerta;
- .print() : imprime,salta un cuadro con la opcion de imprimir la ventana actual;
- .promp() :pide un dato y siempre devuelve un string;
- .confirm() : crea un mini menu de aceptar o cancelar con true or false como respectivos valores;

De lectura -->

- .screen() : muestra todos los  datos con respecto a la ventana con los bordes de la pantalla;
-screenleft() :  muestra cual es la distancia con la izquierda;
-screen todas las  direcciones

- .scrollx : devuelve el numero de pixeles que se desplazo en x;
- .scrolly : devuelve el numero de pixeles que se desplazo en y;


DOM Y SUS PROPIEDADES

Object Math

- .sqrt()
- .cbrt()
- .max()
- .min()
- .random()
- .round()
- .fround()
- .floor()
- .trunc()


Creacion de elementos

- .createElement("") : crear elemento,siempre en mayuscula;
- .createTextNode() : crea un text node ;
- .appendChild() : se aplica especificamente a los hijos
- .createDocumentFragment()

Metodos de clases
se acompaña de .classList
- add() :añade una clase;
- remove() : remueve una clase;
- item()  : devuelve el valor de la clase;
- contains() : verifica si el elemento posee o no la clase especificada;
- replace() : remplaza una clase por otra;
- toggle() : si no tiene la clase especificada la agrega, si la tiene la elimina;


Metodos de atributos

- .setAttribute() : Cambia el atributo (Parametro a modificar,Nuevo valor);
- .getAttribute() : obtiene el valor del atributo;
- .removeAttribute() :Remueve el atributo;

Obtencion y modificacion de elementos

- .textContent : selecciona el contenido de texto de la etiqueta;
- .innerText : devuelve el contenido visible de la etiqueta;
- .innerHTML : devuelve todo el contenido de un html;
- .outerHTML : devuelve todo el contenido incluyendo las etiquetas;

Creacion de elementos



Atributos globales

- class : conocido
- contenteditable : Para ordenar si un texto se puede editar o no
- dir : direccion del texto
- hidden : si se define y declara actuara como que desaparece ,si no se define se muestra
- id
- style
- tabindex
- title

Selectores de elementos

-document.getElementById : Selecciona por ID;
-document.querySelector : Selecciona por clase;

-----------------------------------------------------------------------------------------------------------------------------------------------------
METODOS DE CADENA

- .startswith : Devuelve valor booleano si las cadenas al inicio son iguales;
- .endswith : Devuelve valor booleano si las cadenas al final son iguales;
- .includes : Devuelve valor booleano si una cadena esta dentro de otra cadena;
- .indexOf : Igual que el anterior pero devuelve la posicion;
- .lastIndexOf : Igual que el anterior pero recorre de atras para adelante;
- .padStart : Rellena al  principio de la cadena con los caracteres deseados; (Numero de caracteres , caracter);
- .padEnd : Lo mismo que lo de arriba pero al final;
- .repeat : repite una cadena el numero de veces que se le indique;


- .split : Divide la cadena como le digamos, Ejemplo: (","), Devuelve un array con las partes en las que se haya dividido;
- .substring : devuelve hasta la posicion que le digamos (donde empieza,donde termina);
- .toLowerCase : Convierte todo a minuscula;
- .toUpperCase : Convierte todo a mayuscula;
- .toString : Conviierte un dato a string;
- .trim : Elimina los espacios --- trimEnd and trimStart;

----------------------------------------------------------------------------------------------------------------------------------------------------

METODOS DE ARRAYS

-  .pop() : Elimina el ultimo elemento de un array y lo devuelve;
- .shift() : Elimina el primer elemento de un array y lo devuelve;
- .reverse() : Invierte el orden de los elementos de un array;
- .unshift() : agrega uno o mas elementos al inicio de un array y devuelve el numero de elementos que quedan;
- .push() : Agrega uno o mas elementos al final de un array;
- .sort() : Ordena los elementos de menor a mayor o alfabeticamente
- .splice() : Es como un shorthand para agregar eliminar etc;  (Donde empieza,cuantos elimina,cuantos se quieren agregar)

 
Array asociativo ejemplo

let array = {
    nombre: "juan",
    edad: 16,
    peso:"que hpta ballena"
}

document.write(array["nombre"])


PROGRAMACION ORIENTADA A OBJETOS

class name {
    constructor(parammetro1,parammetro2,parametro3){
        this.parametro1 = parametro1;
        this.parametro2 = parametro2;
        this.parametro3 = parametro3;
    }
}

*/


