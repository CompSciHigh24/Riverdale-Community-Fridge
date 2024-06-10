const deleteButton = document.querySelector(".deleteButton");

deleteButton.addEventListener("click", () => {
  fetch("/items/" + deleteButton.dataset.id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => {
      location.href = "/";
    });
});





const updateButton = document.querySelector(".updateButton");

updateButton.addEventListener("click", () => {
  const id = updateButton.dataset.id;
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const address = document.getElementById("address").value;
  const information = document.getElementById("information").value;

  fetch("/items/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      age,
      address,
      information,
    }),
  })
    .then((response) => response.json())
    .then(() => {
      location.href = "/";
    });
});


































// <button onClick = "deleteData('+index+')"class="btn btn-dan-danger">Delete</button><button>'


// Validates form
// function validateForm(){
//   let name = document.getElementById('name').value;
//   let age = document.getElementById('age').value;
//   let address = document.getElementById('address').value;
//   let infromation = document.getElementById('infromation').value;


//   if(name == ""){
//      alert("Name is required");
//         return false;
//      }


//   if(age == ""){
//     alert("Age is required");
//     return false;
//   }
//   else if(age < 1){
//     alert("Age must not be 0 or less than 0");
//     return false;
//   }

//   if(address == ""){
//     alert("Address is required");
//     return false;
//   }

//   if(infromation == ""){
//     alert("Information is required");
//     return false;
//   }

//   return true;
// }


// // Function shows data stored
// function showData(){
//   let peopleList;
//   if(localStorage.getItem("peopleList") == null){
//     peopleList = [];
//   }
//   else{
//     peopleList = JSON.parse(localStorage.getItem("peopleList"));
//   }

//   let html ='';

//   peopleList.forEach(function (element, index){
//     html += '<tr>';
//     html += '<td>' + element.name + "</td>";
//     html += '<td>' + element.age + "</td>";
//     html += '<td>' + element.address + "</td>";
//     html += '<td>' + element.information + "</td>";
//     html += 
//            '<td><button onclick="deleteData('+ 
//       index + 
//         ')" class="btn btn-danger">Delete</button><button      onclick="updateData(' + index + ')" class="btn btn-warning m-2">Edit</button></td>';
//     html +="</tr>";
//   });

//   document.querySelector("#crudTable tbody").innerHTML=
//     html;
// }

// // Loads all data when page loads
// document.onload = showData();

// // function to add data

// function (){
//   // If form is valid
//   if(validateForm() == true){
//     let name = document.getElementById("name").value;
//     let age = document.getElementById("age").value;
//     let address = document.getElementById("address").value;
//     let information = document.getElementById("information").value;


//     let peopleList;
//     if(localStorage.getItem("peopleList") == null){
//       peopleList = [];
//     }
//     else {
//       peopleList = JSON.parse(localStorage.getItem("peopleList"));
//     }
//     peopleList.push({
//       name: name,
//       age: age,
//       address: address,
//       information: information,
//      })

//     localStorage.setItem("peopleList", JSON.stringify(peopleList));
//     showData();
//     document.getElementById("name").value = "";
//     document.getElementById("age").value = "";
//     document.getElementById("address").value = "";
//     document.getElementById("information").value = "";
//   }
// }



