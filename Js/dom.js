const d = document;

const email = d.querySelector("#email");
const clave = d.querySelector("#clave");
const form = d.querySelector(".formulario");
const btn = d.querySelector(".btn-enviar");
const container = d.querySelector(".container-inputs")
form.addEventListener("submit", e=>{
    e.preventDefault();

    //Asignando los valores de email y password a las variables
    //valor y valor1

    let valor = email.value,
       valor1 = clave.value;


    if(valor === "" || valor1 === ""){
        alertas("Todos los datos son obligatorios",true);
        return;
    }

    alertas("Enviando datos....");
});

//Estableciendo alertas

function alertas($mensaje,error){
    let $p = d.createElement("p");
    $p.textContent = $mensaje;

    if(error){
       $p.classList.add("error");
    }else{
        $p.classList.add("correcto");
    }
     
    container.insertAdjacentElement("beforebegin",$p);

    btn.disabled = true;    

    setTimeout(()=>{
         $p.remove();
         btn.disabled = false;
    },5000)

}