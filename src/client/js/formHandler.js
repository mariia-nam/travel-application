function weatherDefine(){
    const date = document.getElementById('planned-date').value
    const endDate = addDays(date, 7)
    const startDate = removeYear(date)
    console.log(startDate)
    const data = {startDate, endDate}
    fetch('http://localhost:3333/weather', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => {
        console.log('weather done')
        return res.json()
    })
    .then(function(res) {
document.getElementById('weather-output').innerHTML = 'Highest: ' + res.data[0].max_temp + ' °C; Lowest: ' + res.data[0].min_temp + ' °C.'
const clouds = res.data[0].clouds
defineCloud(clouds)
})
    .catch(error => {
console.log(error)
    })
         }

function countryCapture(){
    const city = document.getElementById('planned-location').value
    const cityHolder = document.getElementById('planned-location')
    const dateHolder = document.getElementById('planned-date')
    const errorMessage = document.getElementById('error-msg')
    const infoBlock = document.getElementById('output-section')
    if (city == '') {
        shake(cityHolder)
        hide(infoBlock)
         } else if (dateHolder.value == '') {
            shake(dateHolder) 
            hide(infoBlock)
        } else {
    const data = {city}
    show(infoBlock)
    hide(errorMessage) 
    fetch('http://localhost:3333/response', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => {
        weatherDefine()
        console.log('location done')
        return res.json()
    })
    .then(function(res) {
document.getElementById('country-output').innerHTML = 'My trip to ' + res.geonames[0].name + ', ' + res.geonames[0].countryName
    })
    .catch(error => {
        show(errorMessage)
        hide(infoBlock)
    })
}
}

/*HELPER FUNCTIONS*/
//Point at empty input
function shake(e) {
    e.classList.add('shake');
    setTimeout(function() {
        e.classList.remove('shake');
    },300)
}
//Set date to last year to collect history weather condition
function removeYear(date) {
    const startDate = new Date(date);
    const lastYear = startDate.getFullYear()-1;
const month = startDate.getMonth()+1;
const dt = startDate.getDate();
const finalDate = lastYear.toString() + '-' + month.toString() + '-' + dt.toString()
    return finalDate;
}
//Convert number into understandable clouds condition
function defineCloud(e) {
    console.log(e)
    if ( e <= 20){
        document.getElementById('sky-status').innerHTML = 'Usually sunny at this time.'
    } else if (e <= 70 ) {
        document.getElementById('sky-status').innerHTML = 'Cloudy with low chance of rain.' 
    } else {
        document.getElementById('sky-status').innerHTML = 'High chance of rain. Do not forget your umbrella!' 
    }
}
//Add 7 days to get the trip length for weather clarification 
function addDays(date, days) {
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + days);
    const lastYear = endDate.getFullYear()-1;
const month = endDate.getMonth()+1;
const dt = endDate.getDate();
const finalDate = lastYear.toString() + '-' + month.toString() + '-' + dt.toString()
    return finalDate;
  }
//Hide used/unnecessary elements 
function hide(e){
    e.classList.add('hide')
    e.classList.remove('show')
}
//Show needed elements
function show(e){
    e.classList.remove('hide')
    e.classList.add('show')
}


export { countryCapture, show, shake, hide }

