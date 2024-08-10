fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data fetched successfully:", data);

    // Get the tab buttons and card elements
    const tabButtons = document.querySelectorAll(".tablist-button");
    const cards = document.querySelectorAll(".card");

    // Add event listeners to each tab button
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove the 'aria-selected' attribute from all buttons
        tabButtons.forEach((btn) => btn.setAttribute("aria-selected", "false"));

        // Add the 'aria-selected' attribute to the clicked button
        button.setAttribute("aria-selected", "true");

        // Update the cards based on the selected time frame
        const timeframe = button.textContent.toLowerCase();
        updateCards(timeframe, data);
      });
    });

    // Function to update the cards based on the selected timeframe
    function updateCards(timeframe, data) {
      console.log("Updating cards for timeframe:", timeframe);

      cards.forEach((card, index) => {
        const currentTime = card.querySelector(".current-time");
        const previousTime = card.querySelector(".previous-time");

        if (!currentTime || !previousTime) {
          console.error(
            "Could not find .current-time or .previous-time in card:",
            card
          );
          return;
        }

        const { current, previous } = data[index].timeframes[timeframe];
        currentTime.textContent = `${current}hrs`;
        previousTime.textContent = `Last ${
          timeframe.charAt(0).toUpperCase() + timeframe.slice(1)
        } - ${previous}hrs`;
      });
    }

    // Initialize the first tab as active on page load
    updateCards("daily", data);
  })
  .catch((error) => console.error("Error fetching data:", error));
