import { login, signup } from '../login/actions'

export default function Login() {
    return (
       
        <form>
            <div className='col-md-10 mx-auto text-center m-5 '>
                <h2>Log in or sign up</h2>
                <div className="form-group m-5">
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="email" className="form-control" required />
                </div>
                <div className="form-group m-5">
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" className="form-control" required />
                </div>
               
                    <button type="submit" className="btn btn-lg" formAction={login}>
                        Log in
                    </button>
                    <button type="submit" className="btn btn-lg " formAction={signup}>
                        Sign up
                    </button>
                
            </div>
        </form>


    )
}


//formAction={login} 
//formAction={signup}