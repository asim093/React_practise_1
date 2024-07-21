import React, { useMemo, useState, useEffect } from 'react';

const Show = () => {
    // Using useEffect to run code only on mount
    useEffect(() => {
        console.log('hello rerender');
    }, []);
    
    const [mynum, setMynum] = useState(0);
    
    // Example of a memoized calculation based on 'mynum'
    const checkdata = useMemo(() => {
        return mynum * 2;  // Or any other calculation
    }, [mynum]);

    return (
        <div>
            <p>My number: {mynum}</p>
            <p>Check data: {checkdata}</p>
            <button onClick={() => setMynum(prevNum => prevNum + 1)}>Increment</button>
        </div>
    );
};

export default Show;
