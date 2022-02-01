const d = document;

let datos ={
    email: '',
    clave: ''
};

const email = d.querySelector("#email");
const clave = d.querySelector("#clave");
const form = d.querySelector(".formulario");
const inputs = d.querySelector(".container-inputs");
const btn = d.querySelector(".btn-enviar");

email.addEventListener('input', leertexto);
clave.addEventListener('input', leertexto);


//Validando formulaio
form.addEventListener("submit", e=>{
    e.preventDefault();
    
    const {email,clave} = datos;
    
    if(email === "" || clave === ""){
         
       alerta("Todos los campos son Obligatorios",true);

       return;
    }

    //Creando la otra alerta

    alerta("Datos Enviados...");
});


function leertexto(e){
    datos[e.target.id] = e.target.value;
    //console.log(datos);
}

function alerta($mensaje,error = null){
    const $alerta = d.createElement('p');
    $alerta.textContent = $mensaje;

    if(error){
        $alerta.classList.add("error");
    }else{
        $alerta.classList.add("correcto");
    }

    inputs.insertAdjacentElement("beforebegin",$alerta);
    
    btn.disabled = true;

    //Desapaezca despes de 5 segunodos
    setTimeout(()=>{
        $alerta.remove();
        btn.disabled = false;
    },5000);
}


