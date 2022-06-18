const email = document.getElementById("email");
const err = document.getElementById("err");
const sendButton = document.getElementById("sendBtn");
const errImage = document.getElementById("errImage")

sendButton.addEventListener('click', () => {
    if(email.value <=0 || email.value == undefined || email.value == '' || (email.value.indexOf('@') == -1) || (email.value.indexOf('.com') == -1)) {
        err.style.display = 'block';
        email.style.border = '2px solid hsl(0, 93%, 68%)';
        errImage.style.display = 'block'
        // email.style.background = 'URL(./images/icon-error.svg) right no-repeat';

    }else{
        err.style.display = 'none';
        email.style.border = '1px solid hsl(0, 36%, 70%)';
        errImage.style.display = 'none'
    }
})
