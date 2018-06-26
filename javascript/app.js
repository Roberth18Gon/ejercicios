//Animar botón
// $('button').on('click', function() {
//     $(this).addClass('animated bounce');
// });

//Esconder y mostrar elemento
// $('#show').on('click', function() {
//     $('img').removeClass('inv');
// });

// $('#hide').on('click', function() {
//     $('img').addClass('inv');
// });

// var clicks = 0;

// $('.circle').click(function() {
//     clicks++;
//     if(clicks == 1) {
//         $(this).addClass('m-t1');
//     }
//     if(clicks == 2) {
//         $(this).addClass('m-t2');
//     }
//     if(clicks == 3) {
//         $(this).addClass('m-t3');           
//     }
// });



//Número movil, maximo 9 caracteres
//Nombre 20 caracteres, minimo 2
//Que exista @ en el email

function validar() {
    const msj = $('#email').val();
    if (msj.indexOf('@') !== -1) {
    console.log('Todo ok');
    } else {
        console.log('Error');
    }
}