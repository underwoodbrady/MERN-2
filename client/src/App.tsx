import React from "react";
import MyCounter from "./components/MyCounter";
import MyGitHub from "./components/MyGitHub";

function App() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center mt-auto">
                <h1 className="font-semibold text-7xl mb-12">Hello React!</h1>
                <div className="flex flex-row space-x-8 mb-8">
                    <div>
                        <h2 className="mb-2">Local Counter</h2>
                        <MyCounter incBy={2} decBy={2} />
                    </div>
                    <div>
                        <h2 className="mb-2">Server Counter</h2>
                        <MyCounter incBy={10} decBy={4} />
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
