import { ReactNode } from "react";

const CounterButton = ({
    children,
    onClick,
}: {
    children: ReactNode;
    onClick: () => void;
}) => {
    return (
        <>
            <button onClick={onClick} className="rounded-md px-8 py-2 bg-zinc-700 drop-shadow-md font-semibold">{children}</button>
        </>
    );
};

export default CounterButton;
