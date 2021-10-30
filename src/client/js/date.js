

function countDown () {
    const plannedDate = document.getElementById('planned-date').value
    document.getElementById('date-output').innerHTML = 'Departing on ' + plannedDate
    const countDownDate = new Date(plannedDate).getTime();
    const now = new Date().getTime();
    
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById('date-count').innerHTML = 'The trip is ' +  days + ' days away from now.'
}

export { countDown }