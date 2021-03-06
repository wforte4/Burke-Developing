import Theme from '../styles/theme';
import { useState } from 'react';
import { submitContact } from '../services/apiservice';
import { useScroll } from '../components/hooks';
import Head from 'next/head'

function Contact() {

    const [inputs, setInputs] = useState({
        fullname: '',
        email: '',
        cellphone: '',
        request: ''
    })
    const [loading, setLoading] = useState(false)
    const newscroll = useScroll()
    const [formStatus, setFormStatus] = useState('fillingout')

    const handleType = (e) => {
        e.persist()
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const handleContact = async(e) => {
        e.preventDefault()
        setLoading(true)
        const submitForm = await submitContact(inputs.fullname, inputs.request, inputs.email, inputs.cellphone)
        if(submitForm) {
            console.log(submitForm)
            setLoading(false)
            setFormStatus('succeeded')
        }
    }

    const clearForm = (e) => {
        e.persist()
        setFormStatus('fillingout')
        setInputs({
            fullname: '',
            email: '',
            cellphone: '',
            request: ''
        })
    }

    return (
        <div className='body'>
            <Head>
                <title>Contact</title>
                <meta name="Description" content="Contact form for Burke Developing building services. Get in touch with Daniel Burke today!"/>
            </Head>
            <div className='content'>
                <div className='column'>
                    <img className='loader' src='/loading_a.gif'/>
                    <form className='contactform' onSubmit={handleContact}>
                        <h2>Contact Us Today!</h2>
                        <label>Full Name</label>
                        <input 
                            onChange={handleType}
                            name='fullname'
                            value={inputs.fullname}
                            required
                            autoFocus
                        />
                        <label>Email</label>
                        <input 
                            onChange={handleType}
                            name='email'
                            value={inputs.email}
                            required
                        />
                        <label>Cellphone</label>
                        <input 
                            onChange={handleType}
                            name='cellphone'
                            type='tel'
                            value={inputs.cellphone}
                            required
                        />
                        <label>What can we help you with</label>
                        <textarea 
                            onChange={handleType}
                            name='request'
                            value={inputs.request}
                            required
                        />
                        <button type='submit'>Contact Us</button>
                    </form>
                    <div className='msgcenter'>
                        <p>Thank you for your input, Burke Developing will get back to you as soon as possible!</p>
                        <div className='next' onClick={clearForm}>Fill out form again</div>
                    </div>
                </div>
                <div className='cinfo'>
                    <h1>Quick Contact Information</h1>
                    <ul>
                        <li><img src='/icons/icon_boss.png'/>Daniel Burke</li>
                        <li><img src='/icons/icon_phone.png'/>1-781-426-1894</li>
                        <li><img src='/icons/icon_email.png'/>dan@burkedeveloping.com</li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .msgcenter {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 50%;
                    padding: 10px;
                    background: white;
                    transform: translate(-50%,-50%);
                    display: ${formStatus == 'succeeded' ? 'block': 'none'};
                }
                .msgcenter p {
                    float: left;
                    width: 90%;
                    padding: 10px 5%;
                    text-align: center;
                    font: 16px ${Theme.fonts.subheader};
                }
                .next {
                    float: left;
                    padding: 10px;
                    background: ${Theme.colors.gunmetal};
                    color: white;
                    margin-left: 50%;
                    font: 16px 'Roboto';
                    border-radius: 3px;
                    cursor: pointer;
                    transform: translateX(-50%);
                }
                .cinfo ul {
                    float: left;
                    width: 80%;
                    background: ${Theme.colors.gunmetal};
                    padding: 20px 10%;
                    transition: all .5s ease;
                }
                .cinfo ul li {
                    float: left;
                    width: 100%;
                    margin: 10px 0;
                    list-style: none;
                    color: white;
                    font: 16px ${Theme.fonts.subheader};
                }
                .cinfo ul li img {
                    width: 20px;
                    height: 20px;
                    margin-right: 15px;
                    margin-bottom: -6px;
                }
                .cinfo {
                    width: 35%;
                    float: left;
                    min-height: 400px;
                    max-height: 700px;
                    margin: 30px 1%;
                    padding: 10px 1%;
                    border-radius: 3px;
                    box-shadow: ${Theme.shadows.mat};
                }
                .cinfo h1 {
                    float: left;
                    width: 95%;
                    padding: 10px 2.5%;
                    margin: 30px 0;
                    font: 20px 'Montserrat';
                }
                .banner {
                    float: left;
                    width: 80%;
                    margin: -40px 10%;
                    
                }
                .loader {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    width: 60px;
                    height: 60px;
                    display: ${loading == true ? 'block': 'none'};
                }
                .contactform button {
                    float: left;
                    padding: 14px 5%;
                    background: ${Theme.colors.charcoal};
                    color: white;
                    font: 16px 'Roboto';
                    margin: 20px 0;
                    border: none;
                    cursor: pointer;
                    border-radius: 8px;
                    display: ${loading == true ? 'none': 'block'};
                }
                .contactform h2 {
                    float: left;
                    width: 95%;
                    padding: 10px 2.5%;
                    margin: 23px 0;
                    border-bottom: 1px solid ${Theme.colors.gunmetal};
                    font: 22px ${Theme.fonts.title};
                    font-weight: bold;
                }
                .contactform input {
                    float: left;
                    width: 46%;
                    padding: 10px 2%;
                    margin: 5px 1%;
                    border-radius: 3px;
                    font: 14px 'Roboto';
                    border: ${Theme.shadows.border};
                    box-shadow: ${Theme.shadows.mat};
                }
                .contactform label {
                    float: left;
                    width: 90%;
                    padding: 5px 0%;
                    font: 16px ${Theme.fonts.subheader};
                    margin: 2px 0%;
                }
                .contactform textarea {
                    float: left;
                    width: 94%;
                    padding: 10px 2%;
                    margin: 5px 1%;
                    border-radius: 3px;
                    font: 14px 'Open Sans';
                    border: ${Theme.shadows.border};
                    min-height: 140px;
                    resize: vertical;
                    box-shadow: ${Theme.shadows.mat};
                }
                .contactform {
                    float: left;
                    width: 100%;
                    opacity: ${loading == true || formStatus == 'succeeded' ? '0': '1'};
                    transition: all .3s ease;
                }
                .column {
                    float: left;
                    width: 48%;
                    margin: 30px 1%;
                    padding: 20px 3%;
                    border-radius: 3px;
                    position: relative;
                    box-shadow: ${Theme.shadows.mat};
                }
                .content {
                    float: left;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
                .body {
                    float: left;
                    width: 100%;
                    margin-top: 80px;
                }
                @media screen and (max-width: 650px) {
                    .cinfo {
                        width: 100%;
                    }
                    .cinfo ul {
                        margin-top: 0;
                    }
                    .column {
                        width: 100%;
                    }
                    .content {
                        flex-wrap: wrap;
                    }
                }
            `}</style>
        </div>
    )
}

export default Contact