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

function changeMsgText() {


}