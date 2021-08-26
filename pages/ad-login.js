import Theme from '../styles/theme';
import { useEffect, useState } from 'react'
import { useWindowSize } from '../components/hooks';
import { TextField, Button, IconButton} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, clearError } from '../store/actions/postAction';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import Router from 'next/router';

function Login() {

    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    })
    const wsize = useWindowSize();
    const dispatch = useDispatch();
    const {error} = useSelector(state => state.user)
    const [formStatus, setFormStatus] = useState('default');

    const userLoginRequest = async(e) => {
        e.preventDefault();
        setFormStatus('loading');
        await dispatch(signIn(inputs.username, inputs.password))
        setFormStatus('default');
    }

    const isTyping = (e) => {
        e.persist();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const clear = () => {
        dispatch(clearError())
    }

    useEffect(() => {
        if(error) {
            setFormStatus('failed')
        }
    }, [error])

    const styles = {
        margin: '10px 0',
        width: '70%'
    }

    return (
            <div className='body'>
                <img className='bgimage' src='/bg_login.png' />
                <div className='formbody'>
                    <form onSubmit={formStatus !== 'loading' ? userLoginRequest: null}>
                        <h1 className='header'>BurkeDeveloping</h1>
                        {error ? <Alert
                            severity="error"
                            action={
                                <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={clear}
                                >
                                <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >

                            Incorrect username or password
                        </Alert>: null}
                        <TextField 
                            name='username'
                            value={inputs.username}
                            onChange={isTyping}
                            variant="filled"
                            label="Username"
                            style={styles}
                            required 
                        />
                        <TextField 
                            name='password'
                            type='password'
                            value={inputs.password}
                            onChange={isTyping}
                            label="Password"
                            variant="filled"
                            style={styles}
                            required 
                        />
                        <Button
                            style={styles}
                            variant="outlined"
                            color="primary"
                            onClick={userLoginRequest}
                            type="submit"
                        >Login</Button>
                    </form>
                    <img className='loader' src='/loading_a.gif'/>
                </div>
                <style jsx>{`
                    .formstatus {
                        float: left;
                        margin: 0px 5%;
                        width: 90%;
                        font: 12px 'Roboto';
                        color: red;
                        opacity: .7;
                    }
                    .formbody {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 400px;
                        transition: all .4s ease;
                        height: ${formStatus == 'loading' ? '250px': '500px'};
                        background: rgba(255, 255, 255, .7);
                        box-shadow: 0 0 4px rgba(25, 26, 24, .2);
                        border-radius: 4px;
                    }
                    .formbody form {
                        float: left;
                        width: 100%;
                        margin-top: 90px;
                        transition: all .3s ease;
                        display: flex;
                        justify-content: center;
                        flex-flow: column wrap;
                        align-items: center;
                        align-content: center;
                        opacity: ${formStatus == 'loading' ? 0: 1};
                    }
                    .formstatus {
                        float: left;
                        width: 90%;
                        padding: 5px 5%;
                    }
                    .formbody .loader {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 60px;
                        height: 60px;
                        z-index: 100;
                        display: ${formStatus == 'loading' ? 'block': 'none'};

                    }
                    .bgimage {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 100%;
                        height: 100%;

                    }
                    .header {
                        position: absolute;
                        top: 5%;
                        left: 50%;
                        transform: translateX(-50%);
                        width: auto;
                        height: auto;
                        color: ${Theme.colors.onxy};
                        font: 24px ${Theme.fonts.title};
                    }
                    .body {
                        float: left;
                        width: 100%;
                        height: 100%;
                    }
                `}</style>
            </div>
    )
}

export default Login