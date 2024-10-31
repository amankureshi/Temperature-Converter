const celsiusFuield = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusFuield.innerHTML = "";
});
convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();

  //  <----  loading feature ---->
  convertBtn.innerHTML =
    "<span><i class='fa-solid fa-spinner fa-spin'></i>Converting..</span>";
  setTimeout(() => {
    convertBtn.innerHTML = "<span>Convert</span>";
  }, 1000);
});

function convertToCelsius() {
  let inputValue = degree.value;
  setTimeout(() => {
    if (tempType.value === "fahrenheit") {
      const fahrenheitCelsius = (inputValue - 32) * (5 / 9);
      celsiusFuield.innerHTML = `${fahrenheitCelsius.toFixed(3)} &deg;c`;
    } else if (tempType.value === "kelvin") {
      const kelvinToCelsius = inputValue - 273.75;
      celsiusFuield.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;c`;
    }
  }, 1100);
}
