import { Button, TextContainer } from '@shopify/polaris';
import React, { useState } from 'react';
import {
    ChevronLeftMinor,
    ChevronRightMinor
  } from '@shopify/polaris-icons';

function Paginate({limit, total, paginate, currentPage}) {
    const pageCounts = [];

    for(let i = 1; i <= Math.ceil(total / limit); i++) {
        pageCounts.push(i)
    }

    function handlePageChange(newPage){
        paginate(newPage);
    }

    return (
        <div >
            <ul className="pagination">
                <Button plain
                    icon = {ChevronLeftMinor}
                    disabled={currentPage <= 1} 
                    onClick={()=> handlePageChange(currentPage - 1)}
                ></Button>
                {pageCounts.map(number => (
                    <li key={number} className="pagination-inner">
                        <button  
                            onClick={() => {paginate(number)}}
                        >
                            <span className={number===currentPage ? 'paginate-number active' : 'paginate-number'}>
                                <TextContainer>{number}</TextContainer>
                            </span>
                        </button>
                    </li>
                ))}
                <Button plain
                    icon = {ChevronRightMinor}
                    disabled={currentPage >= Math.ceil(total / limit)}  
                    onClick={()=> handlePageChange(currentPage + 1)}
                ></Button>
            </ul>
        </div>
    );
}

export default Paginate;