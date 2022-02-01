import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/slice/counterSlice';

// for dev. test uses its own msw stuff
if (process.env.NODE_ENV === 'development') {
    console.log('using worker in dev');
    const { worker } = require('../mocks/browser');
    worker.start();
} else {
    console.log(`env: ${process.env.NODE_ENV}`);
}


export default function Counter(props) {
    const count = useSelector((state) => {
        return state.counter.value;
    });
    const dispatch = useDispatch();

    const [partner, setPartner] = useState(undefined);

    useEffect(() => {
        fetch('/user',{
            method: 'GET'
        })
            .then(async response => {
                console.log('got a response');
                console.log(response);

                const nameFromBackend = await response.json();
                console.log(`nameFromBackend: ${JSON.stringify(nameFromBackend)}`);
                console.log(nameFromBackend.name);
                setPartner(nameFromBackend.name);
            })
            .catch(error => {
                console.log(error);
            });
    }, [props.user]);

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <span>user: {props.user} count: {count}</span>
                { partner && <span>partner: {partner}</span>}
            </div>
        </div>
    )
}
