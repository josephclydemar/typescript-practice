
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState<number>(0);
    function countUp(): void {
        setCount(prev => prev + 1);
    }
    function countDown(): void {
        setCount(prev => prev - 1);
    }
    return (
        <div>
            <h3>value: { count }</h3>
            <div>
                <button onClick={countUp}>Count Up</button>
                <button onClick={countDown}>Count Down</button>
            </div>
        </div>
    );
};
