function imageCapture () {
    const city = document.getElementById('planned-location').value
    const data = {city}
    const imageContainer = document.getElementById('country-image')
    fetch('http://localhost:3333/image', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => {
        console.log(' image done')
        return res.json()
    })
    .then(function(res) {
console.log(res.hits[0].webformatURL)
imageContainer.setAttribute('src', res.hits[0].webformatURL)
    })
}




export { imageCapture }