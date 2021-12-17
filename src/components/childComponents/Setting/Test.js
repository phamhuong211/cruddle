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
        let index = arr.findIndex(x => x.id===1)
        if(index){
            console.log('yes');
        } else console.log('no');
    }

    handle(arr)

    const handle2 =(arr) => {
        let index = arr.findIndex(obj => obj.id === 1)
        console.log(index)
        if(index){
            console.log('haha')
        } else console.log('err',arr);
    }

    handle2(arr)
    
    return (
        <div>
            
        </div>
    );
}

export default Test;