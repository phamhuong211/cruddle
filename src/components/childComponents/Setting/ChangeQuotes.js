import { Button, Card, TextField } from '@shopify/polaris';
import React, { useContext, useState } from 'react';
import {QuotesContext} from '../../context/QuotesContext';

function ChangeQuotes() {
    const [quote, setQuote] = useState('');
    const quoteContext = useContext(QuotesContext);
    return (
        <Card sectioned>
            <TextField
                value={quote}
                onChange={(value) => {
                    setQuote(value)
                    quoteContext.handleChangeQuote(value)
                }}
                type="text"
                autoComplete="off"
            />
            <Button ></Button>
        </Card>
    );
}

export default ChangeQuotes;