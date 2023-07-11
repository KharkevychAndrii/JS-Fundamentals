let countrySelect = document.getElementById('country');
    let citiesSelect = document.getElementById('cities');
    let selectedValues = document.getElementById('selectedValues');

    countrySelect.addEventListener('change', function() {
      let selectedCountry = countrySelect.value;
      updateCities(selectedCountry);
    });

    citiesSelect.addEventListener('change', function() {
      let selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
      let selectedCity = citiesSelect.options[citiesSelect.selectedIndex].text;
      selectedValues.textContent = 'Country: ' + selectedCountry + ', City: ' + selectedCity;
    });

    function updateCities(country) {
      citiesSelect.innerHTML = '';

      let cities;
      if (country === 'ger') {
        cities = ['Berlin', 'Munich', 'Dortmund'];
      } else if (country === 'usa') {
        cities = ['New York', 'Los Angeles', 'Chicago'];
      } else if (country === 'ukr') {
        cities = ['Kyiv', 'Lviv', 'Rivne'];
      }

      for (let i = 0; i < cities.length; i++) {
        let option = document.createElement('option');
        option.value = cities[i];
        option.textContent = cities[i];
        citiesSelect.appendChild(option);
      }

      selectedValues.textContent = '';
    }