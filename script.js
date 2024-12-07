/* Aquí se declara un array llamado productos que contiene objetos. */
const productos = [
  { id: 1, nombre: "Camiseta Básica", precio: 27105, imagen: "https://f.fcdn.app/imgs/c4c7cf/www.textilshop.com.uy/tex/9d5a/original/catalogo/50005000cor1/1920-1200/camiseta-basica-hombre-coral.jpg", descripcion: "Camiseta de algodón, ideal para el día a día." },
  { id: 2, nombre: "Pantalón Ajustado", precio: 68599, imagen: "https://acdn.mitiendanube.com/stores/001/776/845/products/diseno-sin-titulo-201-e4e3ec6c3e11fe9d6416486643311049-1024-1024.jpg", descripcion: "Pantalón ajustado cómodo y elegante." },
  { id: 3, nombre: "Chaqueta de Cuero", precio: 290000 , imagen: "https://acdn.mitiendanube.com/stores/001/661/615/products/296cf98f-3874-4c32-96d5-5ec918a56f3f-c0b8f3d933aee0789217114906733621-1024-1024.jpg", descripcion: "Chaqueta de cuero sintético." },
  { id: 4, nombre: "Calza Deportiva Asics", precio: 30999 , imagen: "https://universoventura.vtexassets.com/arquivos/ids/210902/Calza-Deportiva-Asics-7-8-Sound-Mind-Running-Training-Mujer-Verde-AI000146-7684.jpg?v=638488881963270000", descripcion: "Calza Deportiva Asics - Sound Mind Mujer." },
];


/*Selecciona un elemento en el DOM con el ID productos-lista*/
/*Es en este contenedor donde se agregarán dinámicamente las tarjetas de los productos.*/

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

  