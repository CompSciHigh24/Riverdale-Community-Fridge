// const form = document.querySelector("form")
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);
//   let data = Object.fromEntries(formData.entries());

//   fetch('/items', {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {"Content-type": "application/json; charset=UTF-8"}
//   })
//   .then(response => response.json())
//   .then((json) => {
//     location.href = '/items/' + json.name
//   });
// });