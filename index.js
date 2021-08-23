"use strict";

const memoryCost = document.querySelector(".memory_cost");
const storageCost = document.querySelector(".storage_cost");
const deliveryCost = document.querySelector(".delivery_cost");
const totalCost = document.querySelector(".total_cost");
const couponCodeInput = document.querySelector(".couponCode");

// All button defined
const basicMemory = document.querySelector('.basic_memory');
const extraMemory = document.querySelector(".extra_memory");
const basicSsdStorage = document.querySelector('.basic_ssd_storage');
const extra512Storage = document.querySelector(".medium_ssd_storage");
const extra1tbStorage = document.querySelector(".big_ssd_storage");
const quickDelivery = document.querySelector(".quick_delivery");
const applyBtn = document.querySelector(".apply_btn");

// variable and functions

const price = {
  memoryCost: Number(memoryCost.textContent),
  storageCost: Number(storageCost.textContent),
  deliveryCost: Number(deliveryCost.textContent),
  couponCode: 0,
  updatePriceBox(placeName, cost) {
    price[placeName] = cost;
    this.updateTotalPrice();
  },

  updateTotalPrice() {
    const { memoryCost, storageCost, deliveryCost, couponCode } = price;
    totalCost.textContent =
      memoryCost + storageCost + deliveryCost - couponCode + 1299;
  },
};

// Memory Section
basicMemory.addEventListener("click", function () {
  memoryCost.textContent = 0;
  price.updatePriceBox("memoryCost", 0);
});
extraMemory.addEventListener("click", function () {
  memoryCost.textContent = 180;
  price.updatePriceBox("memoryCost", 180);
});

//Storage Section

basicSsdStorage.addEventListener("click", function () {
  storageCost.textContent = 0;
  price.updatePriceBox("storageCost", 0);
});

extra512Storage.addEventListener("click", function () {
  storageCost.textContent = 100;
  price.updatePriceBox("storageCost", 100);
});

extra1tbStorage.addEventListener("click", function () {
  storageCost.textContent = 180;
  price.updatePriceBox("storageCost", 180);
});

//Delivery Section

quickDelivery.addEventListener("click", function () {
  deliveryCost.textContent = 20;
  price.updatePriceBox("deliveryCost", 20);
});

// Coupon code section

applyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (couponCodeInput.value == "stevekaku") {
    price.couponCode = 500;
    alert("You Got DISCOUNT");
  } else {
    alert("Your coupon code is INCORRECT");
  }

  price.updateTotalPrice();
  couponCodeInput.value = "";
});
