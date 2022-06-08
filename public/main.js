const socket = io()

const inputTitle = document.getElementById("title")
const inputPrice = document.getElementById("price")
const inputPhoto = document.getElementById("photo")
const button = document.getElementById("button")

const tablaProducts = document.getElementById("tablaP")

const inputMail = document.getElementById("mail")
const inputMensaje = document.getElementById("mensaje")
const mostrarMensajes = document.getElementById("nuevosMensajes")
const buttonMensajes = document.getElementById("buttonMensajes")

button.addEventListener('click', (e) => {
    const titulo = inputTitle.value
    const precio = inputPrice.value
    const foto = inputPhoto.value
    
    const producto = {
        titulo: titulo,
        precio: precio,
        foto: foto
    }
    console.log(producto)
    socket.emit("newProducto", producto)
})

buttonMensajes.addEventListener('click',(e) => {

    if(inputMensaje.value.length > 0){
        let date = new Date()
        const fecha = [date.getDay(),date.getMonth(),date.getFullYear(),date.getHours(),date.getMinutes(),date.getSeconds()]
        const mail = inputMail.value
        const texto = inputMensaje.value
        const mensaje = {
            mail: mail,
            texto: texto,
            fecha:fecha
        }
        console.log(fecha)
        console.log(mensaje)
        socket.emit("newMessage",mensaje)  
    }   
})


socket.on('productos', (productos) => {
    tablaProducts.innerHTML = productos.map(p => {
        return(
            `   
                <tr class="filas">
                    <th class="columnas">${p.titulo}</th>
                    <th class="columnas">${p.precio}</th>
                    <th class="columnas">${p.foto}</th>
                </tr>
            `
    )
    }).join(" ")
})

socket.on('mensajes', (mensajes) => {
    mostrarMensajes.innerHTML = mensajes.map(m => {
        return (
            `
                <div class="fondoMensaje">
                    <strong class="mail">${m.mail}</strong>
                    <strong class="fecha">${m.fecha.join("/")}</strong>
                    <em class="mensaje">${m.texto}</em>
                </div>
            `
        )
    })
})