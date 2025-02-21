// Selecting Elements
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

// Storing input Link

form.addEventListener("submit", function () {
  const URL = input.value;
  input.blur();
  console.log(URL);
});

// Generating Qr Code

// Creating QR Code Image Elemnet

// Inserting The QR Code Element
