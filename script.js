// Selecting Elements
const container = document.querySelector(".container");
const form = document.querySelector("form");
const input = document.querySelector("input");
const qrBox = document.querySelector(".qr-box");
const textBox = document.querySelector(".text-box");

// Create multiple stars at random positions with varied animation durations
for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  star.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(star);
}

let URL;

const storeLink = function () {
  URL = input.value;
  input.blur();
  console.log(URL);
};

/////////// SECTION URL VALIDATORS

function isValidURL(url) {
  const pattern = /^(https?|ftp|mailto):\/\/[^\s/$.?#].[^\s]*$/i;
  return pattern.test(url);
}

function isLengthValid(url) {
  return url.length <= 2953;
}

const checkURL = function (url) {
  return isValidURL(url) && isLengthValid(url);
};

//////// SECTION CONTAINER SIZE UPDATE
const containerSizeSuccess = function () {
  container.style.height = "450px";
};

const containerSizeFailure = function () {
  container.style.height = "290px";
  container.style.width = "300px";
};

////////// SECTION BOX HIDE/DISPLAY
const qrBoxDisplay = function () {
  qrBox.style.display = "block";
};

const qrBoxHide = function () {
  qrBox.style.display = "none";
};

const textBoxDisplay = function () {
  textBox.style.display = "block";
};

const textBoxHide = function () {
  textBox.style.display = "none";
};

/////////// Empty QR Box
const emptyQRBox = function () {
  qrBox.innerHTML = "";
};

/////////// SECTION QR CODE CREATION
const createQRCode = async function () {
  // First Empty QR Box
  emptyQRBox();

  let qr = await new QRCode(qrBox, URL);
  console.log(qr);
};

//////////// SECTION MAIN FUNCTION
form.addEventListener("submit", function () {
  // Store Link
  storeLink();

  console.log(checkURL(URL));

  if (checkURL(URL)) {
    // Hide Text Box
    textBoxHide();

    // Changing Container Layout
    containerSizeSuccess();

    // Generate QR Code
    createQRCode();

    // Displaying QR Code
    qrBoxDisplay();
  } else {
    console.log("FAILURE");
    // QR Box Hide
    qrBoxHide();

    // Changing Container Layout
    containerSizeFailure();

    // Text Box Display
    textBoxDisplay();
  }
});
