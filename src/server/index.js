const dotenv = require('dotenv');
dotenv.config();
const geoKey = process.env.geoKey
const pixaKey = process.env.pixaKey
const weatherKey = process.env.weatherKey
var path = require('path')
const express = require('express')
const fetch = require('node-fetch')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('dist'))

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(3333, function () {
    console.log('Example app listening on port 3333!')
})

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

var geoData 
//*GEONAMES*// 
app.post('/response', async (req, res) => {
    const city = req.body.city
    const URL = `http://api.geonames.org/search?q=${city}&maxRows=1&type=json&username=${geoKey}`  
    console.log(URL)
    const response = await fetch(URL)
        try {
            const data = await response.json()
            res.send(data)
            var long = data.geonames[0].lng
            var lat = data.geonames[0].lat
            geoData = {long, lat}
        }
         catch(error) {
             console.log(error)
         }
})

//*PIXABAY*//
app.post('/image', async (req, res) => {
    const city = req.body.city
    const URL = `https://pixabay.com/api/?key=${pixaKey}&q=${city}&image_type=photo&orientation=horizontal&category=travel`
    console.log(URL)
    const response = await fetch(URL)
        try {
            const data = await response.json()
            res.send(data)
        }
         catch(error) {
             console.log(error)
         }
})


app.post('/weather', async (req, res) => {
    const date = req.body.startDate
    const endDate = req.body.endDate
    const lat = geoData['lat']
    const long = geoData['long']
    const URL = `https://api.weatherbit.io/v2.0/history/daily?lat=${lat}&lon=${long}&start_date=${date}&end_date=${endDate}&key=${weatherKey}`
    console.log(URL)
    const response = await fetch(URL)
        try {
            const data = await response.json()
            res.send(data)
            console.log(data)
        }
         catch(error) {
             console.log(error)
         }
})
