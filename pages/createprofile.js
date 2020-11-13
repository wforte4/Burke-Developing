import Layout from '../components/layout';
import build from '../components/pagebuild.json';
import BannerSlider from '../components/banner';
import Theme from '../styles/theme';
import { createProfile } from '../services/apiservice'
import { useState } from 'react'
import { useWindowSize } from '../components/hooks';
import { Router } from 'next/router';

function Create() {

    const [inputs, setInputs] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    })
    const wsize = useWindowSize();
    const [isloading, setLoading] = useState(false);
    const [formStatus, setFormStatus] = useState(false);

    const createUser = async(e) => {
        e.preventDefault();
        setLoading(true);
        const newUser = await createProfile(inputs.firstname, inputs.lastname, inputs.email, inputs.password);
        if(newUser) {
            console.log(newUser);
            Router.push('/login')
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
                <h1 className='header'>BurkeDeveloping</h1>
                <div className='formbody'>
                    <form onSubmit={createUser}>
                        <label title='username'>First Name</label>
                        <input 
                            name='firstname'
                            value={inputs.firstname}
                            onChange={isTyping}
                            required 
                        />
                        <label>Last Name</label>
                        <input 
                            name='lastname'
                            value={inputs.lastname}
                            onChange={isTyping}
                            required 
                        />
                        <label>Email</label>
                        <input 
                            name='email'
                            value={inputs.email}
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
                        <div className='formstatus'>{formStatus ? formStatus: null}</div>
                        <button type="submit">Create Profile</button>
                    </form>
                </div>
                <style jsx>{`
                    .formbody {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 440px;
                        height: 600px;
                        backdrop-filter: blur(8px);
                        background: rgba(255, 255, 255, .7);
                        box-shadow: 0 0 4px rgba(25, 26, 24, .2);
                        border-radius: 4px;
                    }
                    .formbody label {
                        float: left;
                        width: 80%;
                        padding: 10px 5%;
                        margin: 4px 5%;
                        font: 14px ${Theme.fonts.subheader};
                    }
                    .formbody input {
                        float: left;
                        width: 60%;
                        padding: 10px 5%;
                        margin: 2px 15%;
                        font: 14px ${Theme.fonts.paragraph};
                    }
                    .formbody button {
                        float: left;
                        width: 60%;
                        padding: 10px 5%;
                        margin: 2px 20%;
                        margin-top: 45px;
                        font: 14px ${Theme.fonts.subheader};
                        border: none;
                        cursor: pointer;
                        transition: all .3s ease;
                        background: ${Theme.colors.platinum};
                    }
                    .formbody button:hover {
                        color: white;
                        background: ${Theme.colors.coral};
                    }
                    .formstatus {
                        float: left;
                        width: 90%;
                        padding: 5px 5%;
                    }
                    .formbody form {
                        float: left;
                        width: 100%;
                        margin-top: 70px;
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

export default Create