const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries[0]);
    const counriesHtml = countries.map(country => getCountryHtml(country));
    const container = document.getElementById('countries');
    container.innerHTML = counriesHtml.join(' ');
}

// const getCountryHtml = country => {
//     return `
//     <div class ='country'>
//       <h2>${country.name.common}</h2>
//       <img src = "${country.flags.png}">
//     </div>
//     `
// }

// option 1
// const getCountryHtml = country => {
//     const {name, flags} = country;
//     return `
//     <div class ='country'>
//       <h2>${name.common}</h2>
//       <img src = "${flags.png}">
//     </div>
//     `
// }
// option 2
const getCountryHtml = ({name, flags,capital,population}) => {
    return `
    <div class ='country'>
      <h2>${name.common}</h2>
      <h3>Capital: ${capital}</h3>
      <h4>Population: ${population}</h4>
      <img src = "${flags.png}">
    </div>
    `
}

loadCountries();