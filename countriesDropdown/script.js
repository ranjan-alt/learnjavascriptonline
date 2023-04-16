const countries = ["Netherlands", "Japan", "Mongolia"];

function getDropDown(countries) {
  let html = `<option>Please select</option>`;
  countries.map((country) => {
    html += `<option>${country}</option>`;
  });
  return html;
}

const html = getDropDown(countries);
const select = document.querySelector("#countries-dropdown");
select.innerHTML = html;
