const deletebutton = document.querySelectorAll(".delete");
console.log(deletebutton);

const createForm = document.querySelector("form");
console.log(createForm)

// add

createForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const adminEventData = new FormData(createForm);
  const reqBody = Object.fromEntries(adminEventData);

  fetch("/adminevent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqBody),
  }).then(() => {
    window.location.href = "/adminevent";
  });
});

// delete

deletebutton[0].addEventListener("click", (e) => {
  fetch("/adminevent", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then(() => {
    window.location.href = "/adminevent";
  });
});
