const input = document.getElementById("exirationpicker");

input.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, ""); // remove all non-digits
  console.log(value);
  // Auto-insert slash after month
  if (value.length >= 3) {
    value = value.slice(0, 2) + "/" + value.slice(2, 4);
  }

  e.target.value = value;
});
