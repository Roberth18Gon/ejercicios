"use strict";

//Variables
let errores = 0;

//Funciones
$("input").blur(function() {
  //Validar nombre
  if (this.type === "text") {
    if (this.value.length <= 2 || this.value.length > 20) {
      $("#alert").html("El nombre debería entre 2 a 20 carácteres");
    } else {
      $("#alert").html("");
    }
  }
  //Validar numero
  if (this.type === "number") {
    if (this.value.length === 0 || this.value.length > 9) {
      $("#alert").html("El número debería un máximo de 9 carácteres");
    } else {
      $("#alert").html("");
    }
  }
  //Validar email
  if (this.type === "email") {
    if (this.value.indexOf("@") === -1) {
      $("#alert").html("El email no es valido");
    } else {
      $("#alert").html("");
    }
  }
});
