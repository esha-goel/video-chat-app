import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import './Login.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import Logo from './logo.png';

const Login = () => {

    const [{},dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            // console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        }).catch(error => {alert(error.message)});
    };

    return (
        <div className="login">
            <div className="login_container">
                <img src={Logo} alt='website logo' />
                <div className="login_text">
                    <h1>Welcome to Videoizh</h1>
                </div>
                <Button type="submit" onClick={signIn}>Sign in With Google</Button>
           </div>
        </div>
    )
}

export default Login