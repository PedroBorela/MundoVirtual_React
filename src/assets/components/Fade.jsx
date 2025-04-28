import { Entity } from 'aframe-react';
import { useEffect, useState } from 'react';

const Fade = ({ isFadingOut, onFadeOutComplete }) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        console.log(`Fade: ${isFadingOut ? 'OUT iniciado' : 'IN iniciado'}`);

        let interval;
        if (isFadingOut) {
            // Fade Out
            interval = setInterval(() => {
                setOpacity(prev => {
                    const newOpacity = prev + 0.05;
                    console.log(`Fade OUT progress: ${newOpacity.toFixed(2)}`);
                    if (newOpacity >= 1) {
                        clearInterval(interval);
                        console.log('Fade OUT completo');
                        onFadeOutComplete();
                        return 1;
                    }
                    return newOpacity;
                });
            }, 30);
        } else {
            // Fade In
            interval = setInterval(() => {
                setOpacity(prev => {
                    const newOpacity = prev - 0.05;
                    console.log(`Fade IN progress: ${newOpacity.toFixed(2)}`);
                    if (newOpacity <= 0) {
                        clearInterval(interval);
                        console.log('Fade IN completo');
                        return 0;
                    }
                    return newOpacity;
                });
            }, 1000);
        }

        return () => {
            console.log('Limpando intervalo de fade');
            clearInterval(interval);
        };
    }, [isFadingOut]);

    return (
        <Entity>
            <a-plane
                color="black"
                width="100"
                height="100"
                position="0 0 0.1"
                opacity={opacity}
                material="shader: flat; transparent: true; depthTest: false;"
            />
        </Entity>
    );
};

export default Fade;