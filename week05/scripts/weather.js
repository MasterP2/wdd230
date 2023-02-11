

// const myTown = document.querySelector('#town')
// const myGraphic = document.querySelector('#graphic')
// const myDescription = document.querySelector('#description')
// const myTemperature = document.querySelector('#temperature')

// // const townName = "penacook"
// const mykey = "74cbf63bacb8000b2663c67490f4c32a"
// const myLat = "43.2329439659947"
// const  myLong = "-71.54482681059456"

  
// // const myURL = `//api.openweathermap.org/data/2.5/weather?q=${townName}&appid=${mykey}&units=imperial`
// const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${mykey}&units=imperial`

// fetch(myURL)
//   .then((response) => response.json())
//   .then((data) => displayData(data));


//   function displayData(data) {
//     // console.log(data)
//     myTown.innerHTML = data.name
//     myGraphic.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
//     myGraphic.alt=data.weather [0].main
//     myDescription.innerHTML = data.weather [0].description
//     myTemperature.innerHTML = `${data.main.temp}&deg;F`


//   }


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
  
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Trier&appid=74cbf63bacb8000b2663c67490f4c32a&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(response.text);
        }
    } catch (error) {
            console.log(error);
        }
}
apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = (`${data.main.temp} &deg;F`);
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
   
    captionDesc.textContent = `${desc}`;
}