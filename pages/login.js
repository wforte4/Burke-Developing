import Layout from '../components/layout';
import build from '../components/pagebuild.json';
import BannerSlider from '../components/banner';
import Theme from '../styles/theme';
import { loginRequest } from '../services/apiservice'
import { useState } from 'react'
import { useWindowSize } from '../components/hooks';

function Login() {

    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    })
    const wsize = useWindowSize();
    const [formStatus, setFormStatus] = useState('form');
    const [status, setStatus] = useState(null)

    const userLoginRequest = async(e) => {
        e.preventDefault();
        setFormStatus('loading');
        const newLogin = await loginRequest(inputs.username, inputs.password);
        if(newLogin) {
            setFormStatus('failed');
            setStatus(newLogin)
        }
    }

    const isTyping = (e) => {
        e.persist();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    return (
            <div className='body'>
                <img className='bgimage' src='/bg_login.png' />
                <div className='formbody'>

                    <h1 className='header'>BurkeDeveloping</h1>
                    <form onSubmit={formStatus !== 'loading' ? userLoginRequest: null}>
                        <label title='username'>Username</label>
                        <input 
                            name='username'
                            value={inputs.username}
                            onChange={isTyping}
                            required 
                        />
                        <label>Password</label>
                        <input 
                            name='password'
                            type='password'
                            value={inputs.password}
                            onChange={isTyping}
                            required 
                        />
                        <div className='formstatus'>{status ? status: null}</div>
                        <button type="submit">Login</button>
                    </form>
                    <img className='loader' src='/loading_a.gif'/>
                </div>
                <style jsx>{`
                    .formstatus {
                        float: left;
                        margin: 20px 5%;
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
                        backdrop-filter: blur(8px);
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
                    .formbody label {
                        float: left;
                        width: 60%;
                        margin: 10px;
                        color: rgb(63, 63, 63);
                        font: 16px ${Theme.fonts.subheader};
                    }
                    .formbody input {
                        float: left;
                        width: 60%;
                        padding: 10px 5%;
                        border-radius: 8px;
                        border: ${Theme.shadows.border};
                        font: 14px 'Open Sans';
                        margin-bottom: 15px;
                        box-shadow: ${Theme.colors.shadowlight};
                    }
                    .formbody button {
                        float: left;
                        width: 60%;
                        padding: 10px 5%;
                        margin: 2px 20%;
                        margin-top: 20px;
                        border-radius: 8px;
                        font: 16px ${Theme.fonts.subheader};
                        border: none;
                        cursor: pointer;
                        transition: all .3s ease;
                        background: ${Theme.colors.platinum};
                    }
                    .formbody button:hover {
                        color: white;
                        background: ${Theme.colors.charcoal};
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
                        opacity: ${formStatus == 'loading' ? 1: 0};

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