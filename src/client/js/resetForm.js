import { hide } from './formHandler'

function resetForm(){
const data = document.getElementById('output-section');
hide(data)
document.getElementById('country-image').setAttribute('src', '')
document.getElementById('country-output').innerHTML = ''
}

export { resetForm }