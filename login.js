function checkLogin() {

    const username = document.getElementById('username');

    const password = document.getElementById('password');

    if ( username.value === 'anders.svensson@gmail.com' && password.value ===
        
    'sg//?Yo71' ) {

        alert( 'Login successful.' );

    } else if ( username.value === 'anders.svensson@gmail.com' && 
    
    password.value !== 'sg//?Yo71' ) {

        alert( 'Login failed. Invalid password.' );
    
    } else if ( username.value !== 'anders.svensson@gmail.com' && 
    
    password.value == 'sg//?Yo71' ) {

        alert( 'Login failed. Invalid username.' );

    } else if ( username.value.length > 0 && password.value.length > 0 &&
        
    username.value !== 'anders.svensson@gmail.com' && password.value !== 
    
    'sg//?Yo71' ) {

        alert( 'Login failed. Invalid username and password.' );

    } else if ( username.value.length == 0 && password.value.length > 0 ) {

        alert( 'Login failed. The username field is empty.' );

    } else if ( username.value.length > 0 && password.value.length == 0 ) {

        alert( 'Login failed. The password field is empty' );

    } else if ( username.value.length == 0 && password.value.length == 0 ) {

        alert( 'Login failed. The username and password fields are empty.' );
    }
}

function sendChangePwdLink() {

    const email = document.getElementById('email');

    const submitMessage = ['Thank you! A link has been sent\n' +

    'to your email account. Please\nclick on it to change your ' +

    'pass-\nword. Please note that the link\nis only valid for 24 hours.',

    'We don\'t recognize your email\naddress. The link ' + 
    
    'could not be\nsent.', 'The email field is empty. ' + 
    
    'Please\nenter your email address.'];

    if ( email.value == 'anders.svensson@gmail.com' ) {

        document.getElementById('send-pwd-msg').innerText = submitMessage[0];

    } else if ( email.value.length > 0 && email.value !== 
        
    'anders.svensson@gmail.com' && email.value !== 'Email' ) {

        document.getElementById('send-pwd-msg').innerText = submitMessage[1];

    } else if ( email.value.length == 0 || email.value == 'Email' ) {

        document.getElementById('send-pwd-msg').innerText = submitMessage[2]; 
    }
}

function openNewTab() {

    let win = window.open( "send-pwd-link.html", "_blank" );

    win.focus();
}

const newPwd = document.getElementById('new-pwd');

const confirmPwd = document.getElementById('confirm-pwd');

function checkUpperCase() {

    let upperCase = new RegExp("[A-Z]");

    if ( upperCase.test( newPwd.value )) {

        document.getElementById('uppercase').style.color = 'green';

        return true;
    
    } else {

        document.getElementById('uppercase').style.color = 'red';

        return false;
    }
}

function checkLowerCase() {

    let lowerCase = new RegExp("[a-z]");

    if ( lowerCase.test( newPwd.value )) {

        document.getElementById('lowercase').style.color = 'green';

        return true;

    } else {

        document.getElementById('lowercase').style.color = 'red';

        return false;
    }
}

function checkNumbers() {

    let numbers = new RegExp("[0-9]");

    if ( numbers.test(newPwd.value )) {

        document.getElementById('numbers').style.color = 'green';

        return true;

    } else {

        document.getElementById('numbers').style.color = 'red';

        return false;
    }
}

function checkLength() {

    if ( newPwd.value.length >= 12 ) {
        
        document.getElementById('length').style.color = 'green';

        return true;
        
    } else {

        document.getElementById('length').style.color = 'red';

        return false;
    }
}

function checkIfPasswordsMatch() {

    if ( confirmPwd.value === newPwd.value && confirmPwd.value.length > 0 &&
        
        newPwd.value.length > 0 ) {

        document.getElementById('pwd-match').innerText = 'Passwords match.';

        document.getElementById('pwd-match').style.color = 'green';

        return true;

    } else if ( confirmPwd.value.length > 0 && newPwd.value.length > 0 && 
        
        confirmPwd.value !== newPwd.value ) {

        document.getElementById('pwd-match').innerText = 'Passwords do not match!';
    
        document.getElementById('pwd-match').style.color = 'red';

        return false;
    }
}

const button = document.getElementById('change-pwd-btn');

function validateNewPwd() {

    checkUpperCase();

    checkLowerCase();

    checkNumbers();

    checkLength();

    checkIfPasswordsMatch();

    if ( checkUpperCase() && checkLowerCase() && checkNumbers() && 
    
        checkLength() && checkIfPasswordsMatch() ) {

            button.disabled = false;

    } else {

            button.disabled = true;
    }
}

function changePwdMsg() {

    const para = document.getElementById('change-pwd-msg');

    const a = document.createElement('a');

    const link = document.createTextNode('Log in');

    const div = document.getElementById('change-pwd');

    para.innerText =  'Your password has been\nchanged.';

    a.title = 'Log in';

    a.href = 'login.html';

    a.appendChild(link);
    
    div.appendChild(para);

    div.appendChild(a);
}