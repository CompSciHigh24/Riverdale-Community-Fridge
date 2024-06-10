
const createForm = document.querySelector("form");
console.log(createForm)



createForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const eventData = new FormData(createForm);
  const reqBody = Object.fromEntries(eventData);
  console.log(reqBody)

  fetch("/event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqBody),
  }) 
  .then(() => {
  window.location.href = "/event";
  });
});
