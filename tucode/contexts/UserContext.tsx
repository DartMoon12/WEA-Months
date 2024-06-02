import React from 'react';
import {login, signup} from '../src/app/login/actions'  



export const UserContext = React.createContext<{ email: string } | null>(null);

