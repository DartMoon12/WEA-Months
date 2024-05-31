import { login, signup } from './actions'
import Login from '../components/login'
import Navbar from '../components/navbar'
import { useContext } from 'react'


export default function LoginPage() {

  
  return (
    
    <>
    <Navbar></Navbar>
    <Login></Login>
    
    </>
  )
}