function addDays(date, days) {
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + days);
    const year = endDate.getFullYear();
const month = endDate.getMonth()+1;
const dt = endDate.getDate();
const finalDate = year.toString() + '-' + month.toString() + '-' + dt.toString()
    return finalDate;
  }

function weatherDefine(){
    const date = document.getElementById('planned-date').value
    const endDate = addDays(date, 7)
    const data = {date, endDate}
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
document.getElementById('weather-output').innerHTML = 'Highest: ' + res.data[0].max_temp_ts + '; Lowest: ' + res.data[0].min_temp_ts
    })
    .catch(error => {
console.log(error)
    })
}

export { weatherDefine }