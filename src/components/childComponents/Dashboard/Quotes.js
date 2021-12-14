import { Card } from '@shopify/polaris';
import React, { useContext, useState } from 'react';
import {QuotesContext} from '../../context/QuotesContext'

function Quotes() {
    const quoteContext = useContext(QuotesContext)
    const content = useState(quoteContext.data)
    console.log("content", content);
    return (
            <Card sectioned title= "Your Quote">
                <p>{content}</p>
            </Card>
    );
}

export default Quotes;