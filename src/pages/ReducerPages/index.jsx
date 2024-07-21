import React, { useReducer } from 'react';
import Navbar from '../../Components/Navbar';

const initialValue = [
    {
        id: 1,
        Name: "rice",
        value: true
    },
    {
        id: 2,
        Name: "ice",
        value: true
    },
    {
        id: 3,
        Name: "tomato",
        value: true
    },
];

const ReducerPage = () => {

    const groceryreducer = (states, action) => {
        switch (action.type) {
            case "Add_item":
                return [...states, action.payload];
            case "Remove":
                return states.filter(g => g.id !== action.payload.id);
            default:
                return states;
        }
    };

    const [state, dispatch] = useReducer(groceryreducer, initialValue);

    function Add_item() {
        dispatch({ type: "Add_item", payload: { id: Date.now(), Name: "chicken", value: false } });
        console.log(state);
    }

    function Remove() {
        if (state.length > 0) {
            const lastItem = state[state.length - 1];
            dispatch({ type: "Remove", payload: lastItem });
        }
        console.log(state);
    }

    return (
        <div className='cont'>
            <button onClick={Add_item}>Add</button>
            <button onClick={Remove}>Remove</button>
            <Navbar />
            <h1>HELLO REDUCER</h1>
            <ul>
                {state.map(item => (
                    <li key={item.id}>{item.Name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ReducerPage;
