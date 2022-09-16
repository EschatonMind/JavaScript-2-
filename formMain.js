const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')
const usernamepattern = /^[0-9]{10,}$/

form.addEventListener('submit', e => {
    e.preventDefault()
    const Theusername = form.username.value;

    if(usernamepattern.test(Theusername)){
        feedback.textContent = 'correct'
    }else{
        feedback.textContent = 'not correct'
    }
})

form.username.addEventListener('keyup', e => {
    console.log(e)
    
    if(usernamepattern.test(e.target.value)){
        form.username.setAttribute('class','success')
    }else{
        form.username.setAttribute('class','error')
    }
})