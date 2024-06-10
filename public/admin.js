const deleteButtonArray = document.querySelectorAll(".deleteButton");

// delete
for (let i = 0; i < deleteButtonArray.length; i++) {
  deleteButtonArray.addEventListener("click", () => {
    fetch("/admin/" + deleteButtonArray.dataset.id, {
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => {
        location.href = "/admin" + data.quantity
      });
  });
}
const updateFormArray = document.querySelectorAll(".updateForm");
for (let i = 0; i < updateFormArray.length; i++) {
updateFormArray.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(updateFormArray);
  const data = Object.fromEntries(formData.entries());

  fetch("/admin/" + updateFormArray.dataset.id, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  }).then(() => {
    location.href = "/admin" + data.quantity;
  });
});
}
// const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
  location.href = "/";
});
