import React from 'react';

const LoginPage = () => {
    return ( 
        <div>
            <label>Login: <input type="text" /></label><br />
            <label>Hasło: <input type="password" /></label><br />
            <button>Zaloguj</button>
        </div>
     );
}
 
export default LoginPage;