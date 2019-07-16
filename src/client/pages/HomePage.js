import React from 'react'

const Home = ( ) => {
    return (
        <div>
        <div>Im Home Component test</div>
        <button onClick={() => console.log('Hi there!')}>Press me!</button>
        </div>
    );
}

export default {
    component: Home
};
