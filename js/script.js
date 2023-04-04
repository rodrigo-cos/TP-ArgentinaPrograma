const usuarios=[]

const formularioRegistro=document.querySelector(".form")
const contenedorHTML= document.querySelector("#contenedorUsuarios")
const renderizarUsuarios= ()=>{
    contenedorHTML.innerHTML=""
  for(const usuario of usuarios)
  {
    contenedorHTML.innerHTML+=`
    <div>
    <h2>Nombre: ${usuario.nombre}</h2>
    <p>Email: <strong>${usuario.email}</strong></p>
    <p>Contraseña: <strong>${usuario.contrasena}</strong></p> 
    </div> `
  }
}

formularioRegistro.addEventListener("submit",(event)=>{
    event.preventDefault()
    usuarios.push({
        nombre: formularioRegistro.nombreCompleto.value,
        email: formularioRegistro.correoElectronico.value,
        contrasena:formularioRegistro.contrasena.value
    })
    renderizarUsuarios()
})