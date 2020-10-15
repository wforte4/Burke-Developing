import Layout from '../components/layout';
import build from '../components/pagebuild.json';
import BannerSlider from '../components/banner';
import Theme from '../styles/theme';
import {withAuthSync } from '../services/auth';

function Backend() {

    return (
        <Layout links={build.paths} title={build.title}>
            <div className='body'>
                <h1>Home Test</h1>
                <img id='body_bg' src='/flat_background.png'/>
                <style jsx>{`
                    .body {
                        float: left; 
                        width: 100%;
                        height: 100%;
                        position: relative;
                        z-index: 1;
                        overflow: hidden;
                    }
                    #body_bg {
                        width: 100%;
                        z-index: 0;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%) scale(1.1,1.1);
                    }
                `}</style>
            </div>
            
        </Layout>
    )
}

export default withAuthSync(Backend)