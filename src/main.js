import './style.css'
import { productos } from './datos.js'

// Elemento donde se dibujan las tarjetas (lo creas en el Ejercicio 1)
const catalogo = document.getElementById('catalogo')

// ------------------------------------------------------------
// EJERCICIO 2 — mostrarProductos(lista)
// Convierte una lista de productos en tarjetas HTML y las pone en la página.
// ------------------------------------------------------------
function mostrarProductos(lista) {
  catalogo.innerHTML = lista.map(p => `
    <article class="bg-white rounded-lg shadow p-4">
      <h3 class="text-xl font-bold">${p.nombre}</h3>
      <p class="text-gray-600 mt-2">$${p.precio}</p>
      <p class="text-sm text-gray-500 mt-1">${p.categoria}</p>

      <button
        data-id="${p.id}"
        class="bg-blue-600 text-white font-semibold px-4 py-2 rounded mt-4 hover:bg-blue-800">
        Agregar
      </button>
    </article>
  `).join('')
}

mostrarProductos(productos)


// ------------------------------------------------------------
// EJERCICIO 3 — Armar el pedido
// ------------------------------------------------------------

const pedido = []

catalogo.addEventListener('click', (evento) => {
  const boton = evento.target.closest('button[data-id]')

  if (!boton) return

  const id = Number(boton.dataset.id)

  const producto = productos.find(p => p.id === id)

  if (producto) {
    pedido.push(producto)
    mostrarPedido()
  }
})

function mostrarPedido() {
  const listaPedido = document.getElementById('lista-pedido')
  const total = document.getElementById('total')

  listaPedido.innerHTML = pedido.map(p => `
    <li class="border-b p-2">
      ${p.nombre} - $${p.precio}
    </li>
  `).join('')

  const suma = pedido.reduce((suma, p) => suma + p.precio, 0)

  total.textContent = `Total: $${suma}`
}

const btnVaciar = document.getElementById('btn-vaciar')

btnVaciar.addEventListener('click', () => {
  pedido.length = 0
  mostrarPedido()
})

mostrarPedido()


// ------------------------------------------------------------
// EJERCICIO 4 — Filtrar por categoría
// ------------------------------------------------------------

// Escribe aquí tu código del Ejercicio 4

