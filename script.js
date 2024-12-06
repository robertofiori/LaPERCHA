const productos = [
    { id: 1, nombre: "Camiseta Básica", precio: 29.99, imagen: "https://via.placeholder.com/200", descripcion: "Camiseta de algodón, ideal para el día a día." },
    { id: 2, nombre: "Pantalón Ajustado", precio: 49.99, imagen: "https://via.placeholder.com/200", descripcion: "Pantalón ajustado de mezclilla, cómodo y elegante." },
    { id: 3, nombre: "Chaqueta de Cuero", precio: 99.99, imagen: "https://via.placeholder.com/200", descripcion: "Chaqueta de cuero sintético con acabados modernos." },
  ];
  
  const productosLista = document.getElementById("productos-lista");
  
  productos.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");
    card.innerHTML = `
      <div class="card">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <p class="card-text">$${producto.precio}</p>
          <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        </div>
      </div>
    `;
    productosLista.appendChild(card);
  });
  
  function agregarAlCarrito(id) {
    console.log(`Producto ${id} agregado al carrito.`);
  }
  