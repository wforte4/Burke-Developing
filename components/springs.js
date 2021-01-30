import { useSpring, config, animated } from 'react-spring'

export function FadeIn({children}){
    const fadeIn = useSpring({
        config: config.slow,
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    });
    return (
        <animated.div style={fadeIn}>{children}</animated.div>
    )
}