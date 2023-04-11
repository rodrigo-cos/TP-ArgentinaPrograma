const contenedorProducto=document.getElementById("contenedorProducto")

const URL_API="https://swapi.dev.api/"

fetch("../json/database.json")
 .then(response=>response.json())

 .then(data=>{
  for(const producto of data)
  {
    contenedorProducto.innerHTML +=`
    <div>
    <h2>${producto.id}</h2>
    <h2>${producto.name}</h2>
    <p>Price:${producto.price}</p>
    <span>Marca:${producto.marca}</span>
    <span class="${producto.color}color-disponible"></span>
    <img src=${producto.img}>

    </div>
    `
  }
})

const nombre=document.getElementById("nombre")
const email=document.getElementById("email")
const contrasena=document.getElementById("contrasena")
const telefono=document.getElementById("telefono")
const form=document.getElementById("form")
const parrafo=document.getElementById("warnings")

function enviarFormulario()
{
  form.reset();
  form.lastElementChild.innerHTML="El formulario fue enviado éxitosamente";
}

form.addEventListener("submit",e=>{
  e.preventDefault()
  let warnings=""
  let entrar=false
  let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  parrafo.innerHTML=""
  
  if(nombre.value.length<3)
  {
    warnings+=`El nombre no es válido <br>`
    entrar=true
  }
  /*console.log(regexEmail.test(email.value))*/
 if(!regexEmail.test(email.value)){
    warnings+=`El email no es válido <br>`
    entrar=true
  }
  if(contrasena.value.length<7)
  {
    warnings+=`La contraseña debe ser mayo a 7 carácteres<br>`
    entrar=true
  }
  if(telefono.value.length<8)
  {
    warnings+=`El telefono debe tener más de 8 caracteres`
    entrar=true
  }
  if(entrar)
  {
    parrafo.innerHTML=warnings
  }
  if(entrar==false)
  {
    enviarFormulario()
  }
})

/*fetch("../json/database.json")
.then(function(response){
  return response.json();
})
.then(function(database)
{
  let placeholder =document.querySelector("#data-output");
  let out="";
  for(let databases of database)
  {
           out+=`
           <tr>
           <td><img src='${databases.image}></img></td>
           <td>${databases.name}</td>
           <td>${database.marca} </td>
           </tr>
           `;
  }

})*/


/*const usuarios=[]

const formularioRegistro=document.querySelector(".form")
const contenedorHTML= document.querySelector("#contenedorUsuarios")

const renderizarUsuarios= ()=>{
  contenedorHTML.innerHTML=""
  for(const usuario of usuarios)
  {
    contenedorHTML.innerHTML+=`
    <div class="card-usuario">
    <h2>Nombre: ${usuario.nombre}</h2>
    <p>Email:<strong>${usuario.email}</strong></p>
    <p>Teléfono:<stong>${usuario.telefono} </p>
    <p>Contraseña: <strong>${usuario.contrasena}</strong></p> 
    <p>Tu mensaje:${usuario.mensaje}</p>
    <button class="btn-eliminar" id="btn-eliminar-${usuario.id}">X</button>
    </div> `
  }
const btnsEliminar=document.getElementsByClassName("btn-eliminar")
for(const btnEliminar of btnsEliminar)
{
  btnEliminar.addEventListener("click",(event) =>{
         const idUsuarioEliminar=event.target.id.split("-").pop()
         const posicionUsuario=usuarios.findIndex(usuario=> usuario.id==idUsuarioEliminar)
         usuarios.splice(posicionUsuario, 1)
         renderizarUsuarios()
         
  })
}
}

let contadorId=0
formularioRegistro.addEventListener("submit",(event)=>{
    event.preventDefault()
    usuarios.push({
        nombre: formularioRegistro.nombreCompleto.value,
        email: formularioRegistro.correoElectronico.value,
        contrasena:formularioRegistro.contrasena.value,
        telefono:formularioRegistro.telefono.value,
        mensaje:formularioRegistro.mensaje.value,
        id: contadorId++
    })
    formularioRegistro.reset()
    renderizarUsuarios()
    
 
})*/

