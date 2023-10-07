//let's get the h1 header
const h1 = document.querySelector('h1');
//change the h1 text:
h1.innerText = "Enter temperature in Fahrenheit"
//introduce function to calculate age
function calculateTemp(event) {
//when the form is submitted, prevent the default behaviour
event.preventDefault();
//don't let the form auto=submit
//get the temperature in Fahrenheit that was entered
const tempInFahrenheit = event.target.tempInFahrenheit.value;
//calculate Celsius and save into a new variable
const tempC = (tempInFahrenheit - 32) / 1.8;
//display Celsius in the h2 ('__°F is __°C')
const h2 = document.querySelector('h2')
h2.innerText = tempInFahrenheit + '°F is ' + tempC + '°C';

}
//add an on submit event to the form
const form = document.querySelector('form');
form.addEventListener('submit', calculateTemp);

