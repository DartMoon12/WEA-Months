import React from 'react';
import {login, signup} from '../src/app/login/actions'  


console.log("login",login)
export const UserContext = React.createContext<{email: string} | null>(null);

