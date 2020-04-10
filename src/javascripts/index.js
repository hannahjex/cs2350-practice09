// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import 'bootstrap'

localStorage.setItem('sample item', 120)

document.querySelector('#newCard').onClick = function(){
    document.querySelector('#myForm').classList.remove('d-none')
    document.querySelector('#cards').classList.add('d-none')
}

document.form[1].querySelector('#newCard').onClick = function(){
    document.querySelector('#myForm').classList.remove('d-none')
    document.querySelector('#cards').classList.add('d-none')
}