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

    } else if ( username.value !== 'anders.svensson@gmail.com' && 
    
    password.value !== 'sg//?Yo71' ) {

        alert( 'Login failed. Invalid username and password.' );

    }

}