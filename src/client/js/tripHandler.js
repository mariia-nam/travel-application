import { show } from './formHandler'

async function saveTrip() {
    const saveBlock = document.getElementById('saved-data')
    show(saveBlock)
  const destination =  document.getElementById('country-output').innerHTML
  const period = document.getElementById('date-output').innerHTML
  const tripContainer = document.getElementById('saved-data');
  const div = document.createElement("div")
  div.classList.add('saved-info');
  const destinationNode = document.createElement('h4');  
  const periodNode = document.createElement('h4');  
  const createButton = document.createElement('button');
  createButton.innerHTML = 'Remove trip'
  createButton.classList.add('remove', 'btn', 'remove-button')
  const createDestination = document.createTextNode(destination);
  const createPeriod = document.createTextNode(period);
  destinationNode.appendChild(createDestination); 
  periodNode.appendChild(createPeriod); 
  div.appendChild(destinationNode); 
  div.appendChild(periodNode); 
  div.appendChild(createButton)
  tripContainer.append(div)
}


function removeData(element) {
const parent = element.parentNode
parent.remove()
}

export { saveTrip, removeData }