function findUser() {
    const id = document.getElementById("userID").value;
    const output = document.getElementById("userData");
  
    if (id < 1 || id > 10) {
      output.textContent = "ID must be between 1 and 10";
      return;
    }
  
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(user => {
        output.innerHTML = `
          <h2>User Details:</h2> <br>
          Name: ${user.name}<br>
          Email: ${user.email}<br>
          City: ${user.address.city}<br>
          Company: ${user.company.name}
        `;
      })
      .catch(() => {
        output.textContent = "Something went wrong.";
      });
  }
  