const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})

const header = document.querySelector('.header');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if(top>=50){
        header.classList.add('active')
    }else{
        header.classList.remove('active');
    }
}

const footer = document.querySelector('.footer');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if(top>=50){
        header.classList.add('active')
    }else{
        header.classList.remove('active');
    }
}

function validate(txt) {
    var btn = document.getElementById('SubmitButton');
    var fname = document.getElementById('name');
    var femail = document.getElementById('email');
    var fmsg = document.getElementById('msg');
    values = [fname, femail, fmsg];
    if (values[0].value == '' || values[1].value == '' || values[2].value=='') {
        btn.disabled = true;
    }
    else {
        if (validateName() && validateEmail()) {
            btn.disabled = false;
        }
    }
}

function validateName(){  
    var txt = document.getElementById('name').value;    
    var namePattern = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    if (namePattern.test(txt) && (txt.length!=0)) {
        document.getElementById('name').style.color = "green";
        document.getElementById('demoN').innerHTML="";
        document.getElementById('name').setCustomValidity("");
        return true;
    }
    else {
        document.getElementById('SubmitButton').disabled = true;
        document.getElementById('name').style.color = "red";
        document.getElementById('demoN').innerHTML="Please, write proper name";
        return false;
    }
} 

function validateEmail(){  
    var txt = document.getElementById('email').value;    
    var emailPattern =/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (emailPattern.test(txt) && (txt.length!=0)) {
        document.getElementById('email').style.color = "green";
        document.getElementById('demoE').innerHTML="";
        document.getElementById('email').setCustomValidity("");
        return true;
    }
    else {
        document.getElementById('SubmitButton').disabled = true;
        document.getElementById('email').style.color = "red";
        document.getElementById('demoE').innerHTML="Write proper email adress";
        return false;
    }
} 

function btn_click() {
    var fname = document.getElementById('name').value;
    var btn = document.getElementById('SubmitButton');
    alert("Congratulations " + fname + " - Message has been sent!");
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('msg').value=''; 
    document.getElementById('demoE').innerHTML="";
    document.getElementById('demoN').innerHTML="";
    btn.disabled = true;
}