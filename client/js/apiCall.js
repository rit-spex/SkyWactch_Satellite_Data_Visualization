// api key: CTgAvMShF74hRQ1cAFmhZaO2dcKootye2QfizXfm

"use strict"

function init() {
 $.ajax({
        url: 'https://api.skywatch.co/data/time/2015/location/36.281389,-80.060278/level/3',
      //  crossDoman: true,
        dataType: 'json',
        method: 'GET',
        beforeSend: function(xhr) {
             xhr.setRequestHeader('x-api-key', "CTgAvMShF74hRQ1cAFmhZaO2dcKootye2QfizXfm");
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
