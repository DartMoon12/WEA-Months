import { login, signup } from '../login/actions'

export default function Login() {
    return (
       
        <form>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" className="form-control" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary" formAction={login}>
                Log in
            </button>
            <button type="submit" className="btn btn-primary" formAction={signup}>
                Sign up
            </button>
        </form>

    )
}


//formAction={login} 
//formAction={signup}