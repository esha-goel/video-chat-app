import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import './Login.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

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
                <div className="login_text">
                    <h1>Sign in to Continue</h1>
                </div>
                <Button type="submit" onClick={signIn}>Sign in With Google</Button>
           </div>
        </div>
    )
}

export default Login