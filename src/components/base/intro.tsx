import { useState } from 'react';
import { animated, useSpring } from 'react-spring';

export default function Intro() {

    const [show, setShow] = useState(true);
    
    const props = useSpring({
        to: { opacity: 0 },
        from: { opacity: 1 },
        delay: 4000,
        config: { duration: 4500 },
        onRest: () => setShow(false)
    })

    return (
        <animated.video style={{...props, ...{objectFit: 'fill'}}} autoPlay muted className="z-50 absolute w-screen h-screen">
                <source src='./assets/intro.mp4' type="video/mp4"/>
        </animated.video>
    )
}