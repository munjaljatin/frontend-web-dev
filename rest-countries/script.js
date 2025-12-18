const countriesContainer = document.querySelector(".countries-container");

fetch(
  "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      // Country Card => Anchor tag
      country.name.common.includes("United States") ? console.log(country) : "";
      const countryCard = document.createElement("a");
      countryCard.href = `./country-page.html?name=${country.name.common}`;
      countryCard.classList.add("country-card");

      const cardHTMl = `
          <img src="${country.flags.svg}" alt="country" />
          <div class="card-content">
            <h3 class="card-title">${country.name.common}</h3>
            <p><b>Population:</b> ${country.population.toLocaleString(
              "en-IN"
            )}</p>
            <p><b>Region:</b>&nbsp;${country.region}</p>
            <p><b>Capital:</b>&nbsp;${country.capital}</p>
          </div>
`;

      countryCard.innerHTML = cardHTMl;
      countriesContainer.append(countryCard);
    });
  });
