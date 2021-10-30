import _ from 'lodash';
import './styles/footer.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/saved-data.scss'
import { countryCapture } from './js/formHandler'
import { countDown } from './js/date'
import { imageCapture } from './js/imageHandler'
import { saveTrip } from './js/tripHandler'
import { removeData } from './js/tripHandler'
import { resetForm } from './js/resetForm'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const submit = document.getElementById('submit-name');
const save = document.getElementById('save');
const resetButton = document.getElementById('reset-button')

submit.addEventListener('click',() => {   
    imageCapture(); 
    countryCapture();
    countDown();   
});

save.addEventListener('click',() => {   
    saveTrip()
});

window.addEventListener('click', function (e) {
  if (e.target.classList.contains('remove-button')) {
    removeData(e.target)
  }
});

resetButton.addEventListener('click', resetForm)

export { countryCapture, countDown, imageCapture, saveTrip, removeData, resetForm }
