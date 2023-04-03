import { useState } from "react";


export default function useCounter() {
    const [count, setCount] = useState(0);

    const plus = () => {
        if (count === 9) {
            return;
        }
        setCount(prev => prev + 1);
        console.log(count);
    };

    const minus = () => {
        if (count < 1) {
            return;
        }
        setCount(prev => prev - 1);
        console.log(count);
    };
    return { count, plus, minus };
};
