import React from 'react';
import WelcomeScreen from "./WelcomeScreen/WelcomeScreen";
import OnlineTests from "./OnlineTests/OnlineTests";
import CreateTest from "./CreateTests/CreateTests";

const MainScreen = () => {
    return (
        <div>
            <WelcomeScreen />
            <OnlineTests />
            <CreateTest/>
        </div>
    );
};

export default MainScreen;