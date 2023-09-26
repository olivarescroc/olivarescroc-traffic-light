import React, { useState } from "react";

const Home = () => {
    const [lightOn, setLightOn] = useState('red');

    return (
        <div className="text-center">
            <div className="trafficLight">
                <div 
                    className={`light red ${lightOn === 'red' ? 'on' : ''}`} 
                    onClick={() => setLightOn('red')}
                ></div>
                <div 
                    className={`light yellow ${lightOn === 'yellow' ? 'on' : ''}`} 
                    onClick={() => setLightOn('yellow')}
                ></div>
                <div 
                    className={`light green ${lightOn === 'green' ? 'on' : ''}`} 
                    onClick={() => setLightOn('green')}
                ></div>
            </div>
        </div>
    );
};

export default Home;
