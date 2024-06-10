
const createForm = document.querySelector("form");
console.log(createForm)



createForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inventoryData = new FormData(createForm);
  const reqBody = Object.fromEntries(inventoryData);

  fetch("/inventory", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqBody),
  })
  .then(() => {
  window.location.href = "/inventory";
  });
});

