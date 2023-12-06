const btnAdd = document.getElementById("btnAdd");
const shoppingList = document.getElementById("shopping-list");

btnAdd.addEventListener("click", addItem);

function addItem() {
  const itemName = document.getElementById("itemName").value;
  const itemQuantity = document.getElementById("itemQuantity").value;

  if (itemName !== "" && itemQuantity !== "") {
    shoppingList.insertAdjacentHTML(
      "afterbegin",
      `<li><span>${itemName}</span><p>Cantitate: <span>${itemQuantity}</span></p><div>
      <button onclick="bought(this)">Cumparat</button>
      <button id="edit" onclick="edit(this)">Edit</button>
      <button id="remove" onclick="removeItem(this)">Șterge</button>
    </div></li>`
    );

    document.getElementById("itemName").value = "";
    document.getElementById("itemQuantity").value = "";
  } else {
    console.log("Nu ati introdus nimic");
  }
}
function removeItem(element) {
  const listItem = element.closest("li");
  if (listItem) {
    listItem.remove();
  } else {
    console.log("Nu a fost gasit li");
  }
}

function bought(element) {
  const listItem = element.closest("li");

  if (listItem) {
    const spanElement = listItem.querySelector("span");
    spanElement.classList.toggle("cumparat");
  } else {
    console.log("Nu a fost gasit parintele li");
  }
}
function edit(element) {
  const listItem = element.closest("li");

  if (listItem) {
    const spanInsideP = listItem.querySelector("p span");

    if (spanInsideP) {
      document.getElementById("itemName").value =
        listItem.querySelector("span").textContent;
      document.getElementById("itemQuantity").value = spanInsideP.innerHTML;

      removeItem(element);
    } else {
      console.log("Nu a fost gasit SPAN in P");
    }
  }
}
