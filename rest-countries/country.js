const countryName = document.querySelector(".country-name");
countryName.innerText = new URLSearchParams(location.search).get("name");
console.log(countryName.innerText);

const data = fetch(
  `https://restcountries.com/v3.1/name/${countryName.innerText}?fullText=true`
)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      console.log(country);
      const countryFlag = document.createElement("img");
      console.log(countryFlag);
      countryFlag.src = `${country.flags.svg}`;
      const countryImage = document.querySelector(".country-image");
      countryImage.append(countryFlag);
    });
  });
