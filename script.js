const form = document.getElementById('form');
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('mail');
const password = document.getElementById('pass');

form.addEventListener('submit',e => {
    e.preventDefault();
    var firstName = fName.value;
    var lastName = lName.value;
    var mailId = email.value;
    var passWord = password.value;
    var pattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(firstName ===''){
        errorFunc(fName,'Input cannot be empty');
    }
    else{
        successFunc(fName);
    }

    if(lastName ===''){
        errorFunc(lName,'Input cannot be empty');
    }
    else{
        successFunc(lName);
    }

    if(mailId ===''){
        errorFunc(email,'Email address not formatted correctly');
    } else if(!mailId.match(pattern)){
        errorFunc(email, 'Not an Email');
    }
    else{
        successFunc(email);
    }

    if(passWord ===''){
        errorFunc(password,'Input cannot be empty');
    }
    else{
        successFunc(password);
    }

})

function errorFunc(req,message){
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.className += 'error';
    span.className += 'error-text';
    if(req !==email){
        req.value = ' ';

    }else{
        req.style.color = "hsl(0, 100%, 74%)";
    }

}

function successFunc(req){
    req.className +='success';
}
