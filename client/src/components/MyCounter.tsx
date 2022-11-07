import { useState, useEffect } from "react";

import CounterButton from "./CounterButton";

const MyCounter = ({
    incBy = 1,
    decBy = 1,
    countChanged = ()=>{},
    currentCount = 0,
}: {
    incBy?: number;
    decBy?: number;
    countChanged?: (val:number) => void;
    currentCount?: number;
}) => {
    const [countState, setCountState] = useState<number>(0);

    useEffect(() => {
        setCountState(currentCount);
    }, [setCountState, currentCount]);

    const incCount = () => {
        setCountState(countState + incBy);
        countChanged(incBy);
    };

    const decCount = () => {
        setCountState(countState - decBy);
        countChanged(-decBy);
    };

    return (
        <div className="flex justify-center flex-col items-center p-4 bg-zinc-600 rounded-md drop-shadow-md border-2 border-zinc-700">
            <p className="text-3xl mb-4 font-semibold">{countState}</p>
            <div className="flex space-x-2">
                <CounterButton onClick={incCount}><span className="text-green-400">+{incBy}</span></CounterButton>
                <CounterButton onClick={decCount}><span className="text-red-400">-{decBy}</span></CounterButton>
            </div>
        </div>
    );
};

export default MyCounter;
