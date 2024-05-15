// Obtenemos los elementos del DOM
const form = document.querySelector("#form");
const itemInput = document.querySelector("#item");
const priceInput = document.querySelector("#price");
const quantityInput = document.querySelector("#quantity");
const list = document.querySelector("#list");
const total = document.querySelector("#total");

// Obtenemos la lista de compras del almacenamiento local si existe, o la creamos vacía si no
let shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];

// Función para renderizar la lista de compras
function renderList() {
  list.innerHTML = "";
  shoppingList.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" id="item${index}" ${item.checked ? "checked" : ""}>
      <label for="item${index}">${item.name} ($${item.price} x ${item.quantity})</label>
      <button class="delete-item btn-delete" title="Eliminar">X</button>
      
    `;
    const checkbox = li.querySelector(`#item${index}`);
    checkbox.addEventListener("change", () => {
      item.checked = checkbox.checked;
      updateTotal();
      saveShoppingList();
    });
    const deleteButton = li.querySelector(".delete-item");
    deleteButton.addEventListener("click", () => {
      shoppingList.splice(index, 1);
      renderList();
      saveShoppingList();
    });
    list.appendChild(li);
  });
  updateTotal();
}

// Función para actualizar el total de la compra
function updateTotal() {
  let totalPrice = 0;
  shoppingList.forEach((item) => {
    if (item.checked) {
      totalPrice += item.price * item.quantity;
    }
  });
  const formattedPrice = totalPrice.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  total.textContent = formattedPrice;
}

// Función para agregar un ítem a la lista de compras
function addItem(name, price, quantity) {
  shoppingList.push({
    name,
    price: parseFloat(price),
    quantity: parseFloat(quantity),
    checked: false,
  });
  renderList();
  saveShoppingList();
}

// Función para guardar la lista de compras en el almacenamiento local
function saveShoppingList() {
  localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
}

// Manejador del evento de envío del formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addItem(itemInput.value, priceInput.value, quantityInput.value);
  itemInput.value = "";
  priceInput.value = "";
  quantityInput.value = "";
});

// Renderizamos la lista de compras al cargar la página
renderList();

//Añadiendo Boton para eliminar lista desde el almacenamiento del navegador

// Obtener el botón de eliminar
const deleteButton = document.querySelector("#delete");

// Función para eliminar la lista de compras
function deleteList() {
  localStorage.removeItem("shoppingList");
  shoppingList = [];
  renderList();
}

// Manejador del evento de clic en el botón de eliminar
deleteButton.addEventListener("click", () => {
  if (confirm("¿Estás seguro de que deseas eliminar la lista completa?")) {
    deleteList();
  }
});
