import React from 'react';
//navigation사용시 react를 유지하며 route사용
import {Link} from 'react-router-dom';

function Navigation(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/UserInfo">User</Link>
        </div>
    );
}

export default Navigation;