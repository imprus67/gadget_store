import AuthContext from '../context/UserContext';
import { useState } from 'react';

function UserContextWrapper({children}) {


    const [isAuth, setIsAuth] = useState(false);
    const [userRole, setuserRole] = useState(false);
    
    return (
        <AuthContext.Provider value={{
            isAuth,
            userRole
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContextWrapper;