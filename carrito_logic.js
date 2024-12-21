document.addEventListener("DOMContentLoaded", () => {
  const carritoItems = document.getElementById("carrito-items");
  const totalElement = document.getElementById("total");
  const finalizarBtn = document.getElementById("finalizar");

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  function actualizarCarrito() {
    carritoItems.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, index) => {
      const item = document.createElement("div");
      item.className = "carrito-item";
      item.innerHTML = `
        <span>${producto.nombre}</span>
        <span>$${producto.precio}</span>
        <span>
          <button class="btn-menos" data-index="${index}">-</button>
          ${producto.cantidad}
          <button class="btn-mas" data-index="${index}">+</button>
        </span>
        <span>$${producto.precio * producto.cantidad}</span>
        <button class="btn-eliminar" data-index="${index}">Eliminar</button>
      `;
      carritoItems.appendChild(item);
      total += producto.precio * producto.cantidad;
    });

    totalElement.textContent = total.toFixed(2);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  carritoItems.addEventListener("click", (e) => {
    const index = e.target.dataset.index;

    if (e.target.classList.contains("btn-mas")) {
      carrito[index].cantidad++;
    } else if (e.target.classList.contains("btn-menos")) {
      carrito[index].cantidad--;
      if (carrito[index].cantidad === 0) {
        carrito.splice(index, 1);
      }
    } else if (e.target.classList.contains("btn-eliminar")) {
      carrito.splice(index, 1);
    }

    actualizarCarrito();
  });

  function resetearContadorCarrito() {
    localStorage.setItem("carrito", JSON.stringify([]));
    const event = new Event("resetCartCount");
    window.dispatchEvent(event); // Emitir evento personalizado
  }

  finalizarBtn.addEventListener("click", () => {
    if (carrito.length > 0) {
      alert("Gracias por tu compra!");
      carrito = [];
      actualizarCarrito();
      resetearContadorCarrito();
    } else {
      alert("El carrito está vacío.");
    }
  });

  actualizarCarrito();
});


