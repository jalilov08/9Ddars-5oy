const wrapper = document.getElementById("wrapper");

function createCard(user) {
  return `
        <div class="card">
            <img src="${user.flag}" alt="Flag of ${user.country}">
            <h2>${user.country}</h2>
            <p><strong>Code:</strong> ${user.code}</p>
            <p><strong>ID:</strong> ${user.id}</p>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://cars-pagination.onrender.com/all-countries")
    .then(function (resp) {
      if (resp.status < 300) {
        return resp.json();
      } else {
        throw new Error("Failed to fetch data");
      }
    })
    .then(function (data) {
      console.log(data);
      data.forEach(function (user) {
        wrapper.innerHTML += createCard(user);
      });
    })
    .catch(function (err) {
      console.log(err);
    });
});
