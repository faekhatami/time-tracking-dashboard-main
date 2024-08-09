// Get the tab buttons and card elements
const tabButtons = document.querySelectorAll(".tablist__button");
const cards = document.querySelectorAll(".card");

// Add event listeners to each tab button
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const timePeriod = button.dataset.timePeriod;

    // Remove aria-selected attribute from all buttons
    tabButtons.forEach((btn) => btn.setAttribute("aria-selected", "false"));

    // Set aria-selected attribute to the clicked button
    button.setAttribute("aria-selected", "true");

    // Update the cards with the selected time period data
    updateCards(timePeriod);
  });
});

// Function to update the card content based on the selected time period
function updateCards(timePeriod) {
  cards.forEach((card) => {
    const current = card.querySelector(".current");
    const previous = card.querySelector(".previous__time-info");

    // Get the data from the card element's dataset attributes
    const currentData = card.dataset[timePeriod];
    const previousData =
      card.dataset[
        `previous${timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)}`
      ];

    // Update the content of the card
    current.textContent = `${currentData}hrs`;
    previous.textContent = `Last Week - ${previousData}hrs`;
  });
}

// Initialize with the 'daily' time period by default
document.querySelector('.tablist__button[data-time-period="daily"]').click();
