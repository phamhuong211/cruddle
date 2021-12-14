import React from 'react';

function Paginate({limit, total, paginate}) {
    const pageCounts = [];

    for(let i = 1; i <= Math.ceil(total / limit); i++) {
        pageCounts.push(i)
    }

    return (
        <ul className="pagination">
            {pageCounts.map(number => {
                <li key={number} className="paginate-number">
                    <a onClick={()=> paginate(number)} href="" className="paginate-number-link">{number}</a>
                </li>
            })}
        </ul>
    );
}

export default Paginate;