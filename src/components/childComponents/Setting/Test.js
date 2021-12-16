import React from 'react';

function Test() {
    const arr = [
        {
            "id": 1,
            "name": "one",
        },
        {
            "id": 2,
            "name": "one",
        },
        {
            "id": 3,
            "name": "three",
        }
    ];

    const handle = (arr) => {
        if(arr.find(x => x.id==='foour')){
            console.log('yes');
        } else console.log('no');
    }

    handle(arr)
    
    return (
        <div>
            
        </div>
    );
}

export default Test;