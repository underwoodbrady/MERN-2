import React, { useEffect, useState } from "react";
import MyCounter from "./components/MyCounter";
import MyGitHub from "./components/MyGitHub";

import socketClient from "socket.io-client";

const SERVER = "https://mern-assignment-2.herokuapp.com/";

let socket: any;

function App() {
    const [serverValue, setServerValue] = useState(0);

    useEffect(() => {
        socket = socketClient(SERVER);

        socket.on("newValue", (data: any) => {
          setServerValue(data.count);
            console.log("newValue");
        });
        
        return () => socket.disconnect();
    }, []);

    const updateServerValue = (value: number) => {
        socket.emit("updateValue", value);
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center mt-auto">
                <h1 className="font-semibold text-7xl mb-12">Hello React!</h1>
                <div className="flex flex-row space-x-8 mb-8">
                    <div>
                        <h2 className="mb-2 text-center">Client Counter</h2>
                        <MyCounter incBy={1} decBy={3} />
                    </div>
                    <div>
                        <h2 className="mb-2 text-center">Server Counter</h2>
                        <MyCounter
                            currentCount={serverValue}
                            incBy={5}
                            decBy={2}
                            countChanged={(count) => {
                                updateServerValue(count);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-auto mb-4">
                <MyGitHub />
            </div>
        </div>
    );
}

export default App;
