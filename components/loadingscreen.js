

function LoadingScreen({message}) {

    return (
        <div className='body'>
            <p>{message}</p>
            <img src='/loading_a.gif' className='loader'/>
            <style jsx>{`
                p {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, 50px);
                    font: 17px arial;
                    text-align: center;

                }
                .loader {
                    position: fixed;
                    width: 60px;
                    height: 60px;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .body {
                    position: fixed;
                    background: white;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                }
            `}</style>
        </div>
    )
}

export default LoadingScreen