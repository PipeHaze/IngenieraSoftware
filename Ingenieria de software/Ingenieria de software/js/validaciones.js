var nombre = document.getElementById("nombre");
const form = document.getElementById("form1");
var msj = document.getElementById("mensajes");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("Correo");
var con1 = document.getElementById("clave1");
var con2 = document.getElementById("clave2");
var user = document.getElementById("usuario");




form.addEventListener("submit", e =>{
    e.preventDefault()
    let mensajesMostrar = "";
    let entrar = false;
// VALIDACION DE NOMBRE
    if(nombre.value.length < 6 || nombre.value.length > 12){
        mensajesMostrar += 'El nombre no es valido <br>'
        entrar = true;
    }

    var letraInicial = nombre.value.charAt(0);
    if(!esMayuscula(letraInicial)){
        mensajesMostrar += "La primera letra es minuscula <br>";
        entrar = true;
    }

    if(entrar){
        msj.innerHTML = mensajesMostrar;
    }
    else{
        msj.innerHTML = "Formulario Enviado";
    }

    //VALIDAR APELLIDO

    if(apellido.value.length < 6 || apellido.value.length > 18 ){
        mensajesMostrar += 'El apellido ingresado no es valido <br>'
        entrar = true;
    }

    letraInicial = apellido.value.charAt(0);
    if(!esMayuscula(letraInicial)){
        mensajesMostrar += 'La primera letra del apellido es minuscula <br>'
        entrar = true;
    }

    if(entrar){
        msj.innerHTML = mensajesMostrar;
    }
    else{
        msj.innerHTML = "Formulario enviado";
    }

    //VALIDAR CORREO
    
    let regexcorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        console.log(regexcorreo.test(correo.value))
        if (!regexcorreo.test(correo.value)){
        mensajesMostrar +='El correo no es valido<br>'
        entrar = true;  
    }

    if(entrar){
        msj.innerHTML = mensajesMostrar;
    }
    else{
        msj.innerHTML = "Formulario enviado";
    }

    // GENERAR CONTRASEÑA

    if(con1.value.length < 7 || con1.value.length > 15){
        mensajesMostrar +='la contraseña debe tener un largo de 7 a 15 caracteres<br>'
        entrar = true;
    }

    let er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,15}$/
    console.log(er.test(con1.value))
    if(!er.test(con1.value)){
        mensajesMostrar +='La contraseña debe tener al menos 1 mayuscula, minuscula y un numero<br>'
        entrar = true;
    }

    if(entrar){
        msj.innerHTML = mensajesMostrar;
    }
    else{
        msj.innerHTML = "Formulario Enviado";
    }

    //CONFIRMAR CONTRASEÑAS
    
    if(con1.value != con2.value){
        mensajesMostrar +='Las contraseñas no coinciden<br>';
        entrar = true;
    }

    if(entrar){
        msj.innerHTML = mensajesMostrar;
    }
    else{
        msj.innerHTML = "Formulario Enviado";
    }

    // VALIDAR NOMBRE DE USUARIO

    let nickname = /[A-Za-z0-9_-]{7,15}/ // Solo acepta Numeros y letras y guiones
    console.log(nickname.test(user.value))
    if(!nickname.test(user.value)){
        mensajesMostrar +='El usuario debe tener entre 7 a 15 caracteres. <br>'
        entrar = true;
    }

    if(entrar){
        msj.innerHTML = mensajesMostrar;
    }else{
        msj.innerHTML = "Formulario enviado";
    }


    



   
})

function esMayuscula(letra){
    return letra == letra.toUpperCase();
}