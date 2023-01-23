// Add your code here

// const form = document.querySelector('#data').addEventListener('submit', (e) => {
//       e.preventDefault()
        let Name = document.querySelector('#name')
        let email = document.querySelector('#email')
        console.log(submitData(Name,email))
// })
function submitData(name,email) {
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
          })
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (users) {
        console.log(users.name,users.email, users.id);
      })
      .catch(function (error) {
        alert("Unauthorized Access");
        console.log(error.message);
        });
  }

  

