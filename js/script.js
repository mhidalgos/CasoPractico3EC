//Mensaje en la consola para asegurarnos que está cogiendo el fichero JS
console.log('conexión establecida con éxito')
/**
 * Muestra un mensaje en una alerta y lo devuelve.
 * @param {string} [mensaje="¡Hola! Este es un mensaje."] - El mensaje a mostrar. Si no se proporciona, se usa el mensaje por defecto especificado por parámetro.
 * @returns {string} El mensaje que se mostró.
 */
function mostrarMensaje(mensaje = "¡Hola! Este es un mensaje.") {
    alert(mensaje);
    return mensaje;
  }
/**
 * Cambiar título cuando se pulsa el botón.
 */
document.getElementById("cambiarTitulo").addEventListener("click", function() {
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Tienda TIC Extremadura";
});

/**
 * Añadir nuevo elemento de forma dinámica.
 */
document.getElementById("aniadirElemento").addEventListener("click", function() {
  const nuevoTitulo = document.createElement("h2");
  nuevoTitulo.textContent = "Nuestros productos";
  nuevoTitulo.classList.add("centrado");
  const contenedor = document.getElementById("contenido");
  contenedor.appendChild(nuevoTitulo);
});

const boton = document.getElementById("cambiarTamano");
boton.addEventListener("click", function() {
    window.resizeTo(800, 600); 
});






document.getElementById("mostrarFormulario").addEventListener("click", function () {
  const contenedor = document.getElementById("formularioContainer");
  if (document.getElementById("formNuevoProducto")) {
      alert("El formulario ya está visible."); //mensaje de error con alert()
      return;
  }
  //crear el formulario
  const formulario = document.createElement("form");
  formulario.id = "formNuevoProducto";
  formulario.innerHTML = `
      <h3>Añadir Nuevo Producto</h3>
      <label for="nombre">Nombre del producto:</label><br>
      <input type="text" id="nombre" name="nombre" placeholder="Nombre" required><br><br>
      
      <label for="descripcion">Descripción:</label><br>
      <textarea id="descripcion" name="descripcion" placeholder="Descripción" rows="4" required></textarea><br><br>
      
      <button type="button" id="aniadirProducto">Añadir producto</button>
      <button type="button" id="cancelarFormulario">Cancelar</button>
  `;
  contenedor.appendChild(formulario);

  document.getElementById("aniadirProducto").addEventListener("click", function () {
      const nombre = document.getElementById("nombre").value.trim();
      const descripcion = document.getElementById("descripcion").value.trim();

      if (nombre && descripcion) {
          const confirmar = confirm(`¿Estás seguro de que deseas añadir el producto "${nombre}"?`);
          if (confirmar) {
              alert("Producto añadido."); //mensaje de confirmación
              const nuevoProducto = document.createElement("div");
              nuevoProducto.classList.add("product");
              nuevoProducto.innerHTML = `
                  <h3>${nombre}</h3>
                  <p>${descripcion}</p>
                  <div class="search-container">
                      <button onclick="alert('Añadido ${nombre}')">Añadir</button>
                  </div>
              `;

              document.querySelector(".product-grid").appendChild(nuevoProducto);

              formulario.remove();
          } else {
              alert("Operación cancelada.");
          }
      } else {
          alert("Por favor, completa todos los campos."); //mensaje de error
      }
  });

  document.getElementById("cancelarFormulario").addEventListener("click", function () {
      if (confirm("¿Estás seguro de que deseas cancelar?")) {
          formulario.remove();
      }
  });
});
