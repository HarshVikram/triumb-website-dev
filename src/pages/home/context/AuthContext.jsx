import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    username: "",
    userId: "",
    name: "",
    organisation: "",
    phone: "",
});

export default AuthContext;