import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../config'
import { Card, Page, TextStyle } from '@shopify/polaris';

function ProductById(props) {
    const url = window.location.pathname
    const productId = parseInt(url.slice(10))
    // console.log(typeof(productId), productId)

    const [state, setState] = useState(null)
    const [state2, setState2] = useState(null)

    const [product, setProduct] = useState(null);
    console.log(product)


    const handleEdit = () => {

    }


    /**Get product by id */
    useEffect(() => {
        const getProductById = async () => {
            const res = await axios.get(`${config.apiURL}/products/${productId}`)
            setProduct(res.data)
        }
        getProductById();
    },[productId])

   
    useEffect(() => {
        setState(1)
        setState2(3)
    }, [])

    console.log(state, state2);
    return product && (
        <Page>
            <Card sectioned 
                title='Product'
                primaryFooterAction={{
                    content: 'Edit',
                    onAction: handleEdit
                }}
            >
                <div className='row'>
                    <div className='col-4'><TextStyle variation="strong">Name</TextStyle></div>
                    <div className='col-8'>{product.itemName}</div>
                </div>
                <div className='row'>
                    <div className='col-4'><TextStyle variation="strong">Price</TextStyle></div>
                    <div className='col-8'>{product.price}</div>
                </div>
                <div className='row'>
                    <div className='col-4'><TextStyle variation="strong">Sale quantity</TextStyle></div>
                    <div className='col-8'>{product.quantity}</div>
                </div>
                <div className='row'>
                    <div className='col-4'><TextStyle variation="strong">NET sale</TextStyle></div>
                    <div className='col-8'>{product.price*product.quantity}</div>
                </div>
                <div className='row'>
                    <div className='col-4'><TextStyle variation="strong">Saler</TextStyle></div>
                    <div className='col-8'>{}</div>
                </div>
            </Card>
        </Page>
    );
}

export default ProductById;