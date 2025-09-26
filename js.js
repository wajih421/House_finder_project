const houses = [
  { location: "New York", budget: "High", name: "Luxury Apartment in NYC" },
  { location: "New York", budget: "Low", name: "Affordable Flat in Brooklyn" },
  { location: "London", budget: "High", name: "Penthouse in Central London" },
  { location: "London", budget: "Low", name: "Budget Room in London Suburbs" },
  { location: "Tokyo", budget: "High", name: "Modern Condo in Shibuya" },
  { location: "Tokyo", budget: "Low", name: "Small Studio in Tokyo" }
];

function initializeForm() {
  const locationSelect = document.getElementById("location");
  const budgetSelect = document.getElementById("budget");

  // Get unique values
  const locations = [...new Set(houses.map(h => h.location))];
  const budgets = [...new Set(houses.map(h => h.budget))];

  // Add location options
  locations.forEach(loc => {
    const option = document.createElement("option");
    option.value = loc;
    option.textContent = loc;
    locationSelect.appendChild(option);
  });

  // Add budget options
  budgets.forEach(bud => {
    const option = document.createElement("option");
    option.value = bud;
    option.textContent = bud;
    budgetSelect.appendChild(option);
  });
}

function renderHouses(e) {
  e.preventDefault();

  const location = document.getElementById("location").value;
  const budget = document.getElementById("budget").value;
  const resultsDiv = document.getElementById("results");

  resultsDiv.innerHTML = "";

  const filtered = houses.filter(
    h => h.location === location && h.budget === budget
  );

  if (filtered.length === 0) {
    resultsDiv.innerHTML = `<p>No houses found for your selection.</p>`;
    return;
  }

  filtered.forEach(h => {
    const card = document.createElement("div");
    card.classList.add("house-card");
    card.innerHTML = `<h3>${h.name}</h3>
                      <p><strong>Location:</strong> ${h.location}</p>
                      <p><strong>Budget:</strong> ${h.budget}</p>`;
    resultsDiv.appendChild(card);
  });
}

document.getElementById("house-form").addEventListener("submit", renderHouses);

// Initialize dropdowns
initializeForm();
