import { productInformation } from "./productInformation.js";
productInformation;

// let currentWidth;
// let subtotal = 0;
// const TAX_PERCENTAGE = 0.21;
// const SHIPPING_COST = 2;
// const MAX_AMOUNT_ITEMS = 3;
let index;
// const subtotalText = document.getElementById("costs-subtotal");
// const taxText = document.getElementById("costs-tax");
// const shippingText = document.getElementById("costs-shipping");
// const totalText = document.getElementById("cost-total");
const amountOfItems = document.getElementById("amount-items-js");
// const waitCheckout = document.getElementById("waiting-for-checkout-content-js");
let items = 0;
// let total = 0;
// let tax = 0;

amountOfItems.addEventListener("click", () => {
  window.location.href = "checkout.html";
});

function addItem() {
  const itemContainer = document.getElementById("item-container-js");
  const addButtons = document.querySelectorAll(".redirect");
  let ID = 0;

  const productArray = [];

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      items++;
      ID++;
      index = button.getAttribute("data-redirect");
      // const newItem = document.createElement("div");
      // newItem.innerHTML = `
      //   <div class="items">
      //     <img class="item-img" src=${productInformation[index].productLocationImg}>
      //     <div>
      //       <div>
      //         <p class="item-text">${productInformation[index].productName}</p>
      //       </div>
      //       <div>
      //         <p class="item-description">${productInformation[index].productDescription}</p>
      //       </div>
      //     </div>
      //     <div>
      //       <div>
      //         <p class="item-price">&euro; <span>${productInformation[index].productPrice}</span></p>
      //         <div class="button-container">
      //           <button class="item-button" data-type="add">+</button>
      //           <p class="item-amount">1</p>
      //           <button class="item-button" data-type="remove">-</button>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // `;
      // itemContainer.appendChild(newItem);

      const product = {
        productID: ID,
        productName: productInformation[index].productName,
        productDescription: productInformation[index].productDescription,
        productPrice: productInformation[index].productPrice,
        productSrc: productInformation[index].productLocationImg,
        productType: productInformation[index].productType,
      };

      amountOfItems.innerText = items;

      productArray.push(product);

      localStorage.setItem("storedProducts", JSON.stringify(productArray));

      // let count = 1;
      // ID++;
      // subtotal += parseFloat(productInformation[index].productPrice);
      // subtotalText.innerText = `€${subtotal.toFixed(2)}`;
      // calculateCosts(subtotal, count);
      // amountOfItems.innerText = items;

      // const addButtons = newItem.querySelectorAll(
      //   '.item-button[data-type="add"]'
      // );
      // const removeButtons = newItem.querySelectorAll(
      //   '.item-button[data-type="remove"]'
      // );
      // const productAmounts = newItem.querySelectorAll(".item-amount");

      // changeProductAmount(addButtons[0], productAmounts[0], removeButtons[0]);
    });
  });
}

// function changeProductAmount(addButton, productAmount, removeButton) {
//   const checkoutContainer = document.getElementById("checkout-content-js");
//   addButton.addEventListener("click", () => {
//     const item = removeButton.closest(".items");
//     const priceElement = item.querySelector(".item-price span");
//     const price = parseFloat(priceElement.innerText);

//     let itemCount = parseInt(productAmount.innerText);
//     if (itemCount === MAX_AMOUNT_ITEMS) {
//       alert(`Maximale artikellimiet bereikt (${MAX_AMOUNT_ITEMS}).`);
//       return;
//     }
//     itemCount += 1;
//     subtotal += price;

//     subtotalText.innerText = `€${subtotal.toFixed(2)}`;
//     productAmount.innerText = itemCount;
//     calculateCosts(subtotal);
//   });

//   removeButton.addEventListener("click", () => {
//     const item = removeButton.closest(".items");
//     const priceElement = item.querySelector(".item-price span");
//     const price = parseFloat(priceElement.innerText);
//     let itemCount = parseInt(productAmount.innerText);
//     if (itemCount === 1) {
//       item.remove();

//       subtotal -= price;

//       subtotalText.innerText = `€${subtotal.toFixed(2)}`;
//       items--;

//       if (items === 0) {
//         subtotal = 0;
//         total = 0;
//         tax = 0;
//         checkoutContainer.style.visibility = "hidden";
//         waitCheckout.style.visibility = "visible";

//         subtotalText.innerText = `€${subtotal},00`;
//         totalText.innerText = `€${subtotal},00`;
//         taxText.innerText = `€${subtotal},00`;

//         return;
//       } else if (items > 0) {
//         checkoutContainer.style.visibility = "visible";
//         waitCheckout.style.visibility = "hidden";
//       }

//       amountOfItems.innerText = items;
//       calculateCosts(subtotal);
//       return;
//     }
//     itemCount -= 1;
//     subtotal -= price;
//     subtotalText.innerText = `€${subtotal.toFixed(2)}`;
//     productAmount.innerText = itemCount;
//     calculateCosts(subtotal);
//   });
// }

// function calculateCosts(subtotal) {
//   const checkoutContainer = document.getElementById("checkout-content-js");
//   let totalCost = subtotal;

//   if (items === 0) {
//     subtotal = 0;
//     total = 0;
//     tax = 0;
//     checkoutContainer.style.visibility = "hidden";
//     waitCheckout.style.visibility = "visible";

//     subtotalText.innerText = `€${subtotal},00`;
//     totalText.innerText = `€${subtotal},00`;
//     taxText.innerText = `€${subtotal},00`;

//     return;
//   } else if (items > 0) {
//     checkoutContainer.style.visibility = "visible";
//     waitCheckout.style.visibility = "hidden";
//   }

//   tax = totalCost * TAX_PERCENTAGE;
//   total = subtotal + tax + SHIPPING_COST;
//   if (isNaN(total)) {
//     total = subtotal + tax + SHIPPING_COST;
//   }
//   totalText.innerText = `€${total.toFixed(2)}`;
//   taxText.innerText = `€${tax.toFixed(2)}`;
//   shippingText.innerText = `€${SHIPPING_COST},00`;
// }

addItem();

function currentYear() {
  const date = new Date();
  const yearText = document.getElementById("year");
  const year = date.getFullYear();

  yearText.innerText = year;
}

currentYear();

function setHeight() {
  const pageHeight =
    (document.documentElement.scrollHeight, document.body.scrollHeight);
  hamburgerMenuCourses.style.height = pageHeight + "px";

  console.log(pageHeight);
}

window.addEventListener("resize", setHeight);
window.addEventListener("load", setHeight);

setHeight();
