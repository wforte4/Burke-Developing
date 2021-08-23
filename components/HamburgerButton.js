

export const HamburgerButton = ({onClick, active, top, left, right, width, height}) => {
    return <div onClick={onClick} className='ham'>
        <div className='line top'></div>
        <div className='line middle'></div>
        <div className='line bottom'></div>
        <style jsx>{`
            .ham {
                position: absolute;
                cursor: pointer;
                top: ${top};
                right: ${right};
                width: ${width}px;
                height: ${height}px;
                display: none;
            }
            .line {
                position: absolute;
                left: 0;
                width: 100%;
                height: 1px;
                background: white;
                transition: all .3s ease;
            }
            .top {
                top: 0;
                transform: translateY(${active ? (height / 2) - 1: '0'}px) rotate(${active ? '45deg': '0'}) ;
            }
            .middle {
                top: 50%;
                transform: translateY(-50%);
                opacity: ${active ? 0: 1};
            }
            .bottom {
                bottom: 0;
                transform: translateY(-${active ? (height / 2): '0'}px) rotate(${active ? '-45deg': '0'});
            }
            @media screen and (max-width: 800px) {
                .ham {
                    display: block;
                }
            }
        `}</style>
    </div>
}