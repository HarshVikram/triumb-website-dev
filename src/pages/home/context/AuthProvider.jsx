import AuthContext from "./AuthContext";
import React, {useState} from "react";

const AuthProvider = (props) => {

    const authDefault = {
        isLoggedIn: false,
        username: "",
        userId: "",
        name: "",
        organisation: "",
        phone: ""
    };

    const [authContext, setAuthContext] = useState(authDefault);

    const authContextUpdate = (data) => {
        setAuthContext(data);
    }


    return (<AuthContext.Provider value={{authContext, authContextUpdate}}>
        {props.children}
    </AuthContext.Provider>);
};

export default AuthProvider;