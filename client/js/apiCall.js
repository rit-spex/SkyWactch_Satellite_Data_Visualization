// api key: CTgAvMShF74hRQ1cAFmhZaO2dcKootye2QfizXfm

"use strict"
const apiURL = 'https://api.skywatch.co/data';
let callURL = apiURL;
let api_key, time_period, coordinates,
instrument_satellite, data_level, apiSubmit,
 max_resolution, max_cloudcover, wavelength_band;
let baseURL = 'https://api.skywatch.co/data';
let queryURL;
function init() {

  setDOMReferences();
  apiSubmit.addEventListener("click", pullData);

};

const setDOMReferences = () => {
  console.log('setting DOM references');
  api_key = document.querySelector('input[name="api_key"]');
  time_period = document.querySelector('input[name="time_period"]');
  coordinates = document.querySelector('input[name="coordinates"]');
  instrument_satellite = document.querySelector('input[name="instrument_satellite"]');
  data_level = document.querySelector('input[name="data_level"]');
  max_resolution = document.querySelector('input[name="max_resolution"]');
  max_cloudcover = document.querySelector('input[name="max_cloudcover"]');
  wavelength_band = document.querySelector('input[name="wavelength_band"]');
  apiSubmit = document.querySelector('#apiSubmit');
};

const pullData = () => {
  console.log('button pressed');
  pullFromForm();
  sendRequest();

};

const pullFromForm = () => {
  console.log(api_key);
  console.log(time_period);
  console.log(coordinates);
};

const setQueryURL = () => {
  queryURL = baseURL;
  // /time/<time-period>
  if(time_period.value != '') queryURL += `/time/${time_period.value}`;
  // /location/<coordinates>
  if(coordinates.value != '') queryURL += `/location/${coordinates.value}`;
  // /level/<data-level>
  if(data_level.value != '') queryURL += `/level/${data_level.value}`;
  // /source/<instrument-satellite>
  if(instrument_satellite.value != '') queryURL += `/source/${instrument_satellite.value}`;
  // /resolution/<max-resolution>
  if(max_resolution.value != '') queryURL += `/resolution/${max_resolution.value}`;
  // /cloudcover/<max-cloudcover>
  if(max_cloudcover.value != '') queryURL += `/cloudcover/${max_cloudcover.value}`;
  // /band/<wavelength-band>
  if(wavelength_band.value != '') queryURL += `/band/${wavelength_band.value}`;
  console.log(queryURL);
};

const sendRequest = () => {
  setQueryURL();
  $.ajax({
         // url: 'https://api.skywatch.co/data/time/2015/location/36.281389,-80.060278/level/3',
         url: queryURL,
         // crossDoman: true,
         dataType: 'json',
         method: 'GET',
         beforeSend: function(xhr) {
              xhr.setRequestHeader('x-api-key', "CTgAvMShF74hRQ1cAFmhZaO2dcKootye2QfizXfm");
          //  xhr.setRequestHeader('x-api-key', api_key.value || "CTgAvMShF74hRQ1cAFmhZaO2dcKootye2QfizXfm" );

              // xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
              // xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
         },
          success: function(data){
             console.log(data);
             document.querySelector("#response").innerHTML = JSON.stringify(data);
             //document.querySelector("#response").innerHTML = data;
             //process the JSON data etc
         }
       })
};

window.onload = init;
