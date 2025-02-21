// Selecting Elements
const container = document.querySelector(".container");
const form = document.querySelector("form");
const input = document.querySelector("input");
const qrBox = document.querySelector(".qr-box");

// Create multiple stars at random positions with varied animation durations
for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  star.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(star);
}

// Functions
const storeLink = function () {
  // const URL = input.value;
  const URL = "hhjbjkjnnj";
  input.blur();
  console.log(URL);
};

const checkURL = function (url) {};

const createQRCode = async function () {
  // new QRCode(qrBox, URL);
  let qr = await new QRCode(qrBox, URL);

  if (!qr) {
    console.log("ERROR");
  }

  console.log(qr);
};

const containerSizeSuccess = function () {
  container.style.height = "450px";
};

const qrBoxDisplay = function () {
  qrBox.style.display = "block";
};

form.addEventListener("submit", function () {
  // Store Link
  storeLink();

  // Changing Container Layout
  containerSizeSuccess();

  // Generate QR Code
  createQRCode();

  // Displaying QR Code
  qrBoxDisplay();
});
