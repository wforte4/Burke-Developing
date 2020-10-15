import Layout from '../components/layout';
import build from '../components/pagebuild.json';
import BannerSlider from '../components/banner';
import Theme from '../styles/theme';

function Login() {

    return (
        <Layout links={build.paths} title={build.title}>
            <div className='body'>
                <h1>Home Test</h1>
                <style jsx>{`

                `}</style>
            </div>
        </Layout>
    )
}

export default Login