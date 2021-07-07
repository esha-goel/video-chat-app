import { Button } from '@material-ui/core';
import './Login.css';

const Login = () => {
    const signIn = () => {};
    return (
        <div className="login">
            <div className="login_container">
                <div className="login_text">
                    <h1>Sign in to Continue</h1>
                </div>
                <Button type="submit" onClick={signIn}>Sign in With Google</Button>
           </div>
        </div>
    )
}

export default Login