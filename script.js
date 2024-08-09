// Get the tab buttons and card elements
const tabButtons = document.querySelectorAll(".tablist__button");
const cards = document.querySelectorAll(".card");

// Add event listeners to each tab button
tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Remove the 'aria-selected' attribute from all buttons
    tabButtons.forEach((btn) => btn.setAttribute("aria-selected", "false"));

    // Add the 'aria-selected' attribute to the clicked button
    button.setAttribute("aria-selected", "true");

    // Update the cards based on the selected time frame
    const timeframe = button.textContent.toLowerCase();
    updateCards(timeframe);
  });
});

// Function to update the cards based on the selected timeframe
function updateCards(timeframe) {
  const data = {
    daily: [
      { current: "5hrs", previous: "Last Day - 7hrs" },
      { current: "1hrs", previous: "Last Day - 2hrs" },
      { current: "0hrs", previous: "Last Day - 1hr" },
      { current: "1hrs", previous: "Last Day - 1hr" },
      { current: "0hrs", previous: "Last Day - 3hrs" },
      { current: "0hrs", previous: "Last Day - 1hr" },
    ],
    weekly: [
      { current: "32hrs", previous: "Last Week - 36hrs" },
      { current: "10hrs", previous: "Last Week - 8hrs" },
      { current: "4hrs", previous: "Last Week - 7hrs" },
      { current: "4hrs", previous: "Last Week - 5hrs" },
      { current: "5hrs", previous: "Last Week - 10hrs" },
      { current: "2hrs", previous: "Last Week - 2hrs" },
    ],
    monthly: [
      { current: "103hrs", previous: "Last Month - 128hrs" },
      { current: "23hrs", previous: "Last Month - 29hrs" },
      { current: "13hrs", previous: "Last Month - 19hrs" },
      { current: "11hrs", previous: "Last Month - 18hrs" },
      { current: "21hrs", previous: "Last Month - 23hrs" },
      { current: "7hrs", previous: "Last Month - 11hrs" },
    ],
  };

  // Update each card with the new data
  cards.forEach((card, index) => {
    card.querySelector(".current").textContent = data[timeframe][index].current;
    card.querySelector(".previous__time-info").textContent =
      data[timeframe][index].previous;
  });
}

// Initialize the first tab as active on page load
updateCards("daily");
