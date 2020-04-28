import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const permissions = false;

const AdminPage = () => {
    return ( 
        <Route render={() => (
            permissions 
                ? <h3>Panel admina</h3>
                : <Redirect to="/login" />
        )} />
     );
}
 
export default AdminPage;