document.addEventListener("DOMContentLoaded", () => {
  const viewButtons = document.querySelectorAll(".view-btn");
  const cardsContainer = document.querySelector(".cards");

  let data;

  fetch("data.json")
    .then((response) => response.json())
    .then((json) => {
      data = json;
      updateCards("weekly");
    })
    .catch((error) => console.error("Error fetching data:", error));

  viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".view-btn.active").classList.remove("active");
      button.classList.add("active");
      const view = button.getAttribute("data-view");
      updateCards(view);
    });
  });

  function updateCards(view) {
    cardsContainer.innerHTML = ""; // Clear the existing cards
    data.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card", item.title.toLowerCase().replace(" ", "-"));
      card.innerHTML = `
        <h2>${item.title}</h2>
        <p class="hours">${item.timeframes[view].current}hrs</p>
        <p class="last-week">Last Week - ${item.timeframes[view].previous}hrs</p>
      `;
      cardsContainer.appendChild(card);
    });
  }
});
