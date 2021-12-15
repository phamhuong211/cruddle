import {Card, TextField } from '@shopify/polaris';
import React, { useContext} from 'react';
import {QuotesContext} from '../../context/QuotesContext';

function ChangeQuotes() {
    const quoteContext = useContext(QuotesContext);
    
    return (
        <Card sectioned title="Write your quotes">
            <TextField
                value={quoteContext.data}
                onChange={(value) => {
                    quoteContext.handleChangeQuote(value)
                }}
                type="text"
                autoComplete="off"
            />
        </Card>
    );
}

export default ChangeQuotes;