
const getGeoLocationButton = document.getElementById('get-geolocation');

const geolocationDisplay = document.getElementById('geolocation');

let geolocation;

getGeoLocationButton.addEventListener("click", getGeolocation);

function getGeolocation(){
  console.log('called');
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(logPosition)
  }
  else {
    console.log('nope');
  }
}

function logPosition(position){
  geolocation = position;
  console.log(geolocation);
  const displayElement = document.createElement('div');

  const longitudeElement = document.createElement('p');
  longitudeElement.innerText = `Longitude: ${geolocation.coords.longitude}`;
  geolocationDisplay.appendChild(longitudeElement);
  
  const latitudeElement = document.createElement('p');
  latitudeElement.innerText = `Latitude: ${geolocation.coords.latitude}`;
  geolocationDisplay.appendChild(latitudeElement);

  geolocationDisplay.appendChild(displayElement);
}