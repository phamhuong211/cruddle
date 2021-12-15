import { Button, Card, Page, TextContainer, TextStyle } from '@shopify/polaris';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import config from '../../../config';
import {useGlobal, actions} from '../../global'

function StoreById() {
    const id = useParams()
    const storeId = parseInt(id.id)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getAPIProducts = async ()=>{
            const res = await axios.get(`${config.apiURL}/products?userId=${storeId}`)
            setProducts(res.data);
        };
        getAPIProducts()
    },[storeId])


    /**Handle Cart with Global context and useReducer */
    const [state, dispatch] = useGlobal()
    const handleClick = (product) => {
        dispatch(actions.addItem({
            "productId": product.id,
            "price": product.price,
            "quantityCart": 1,
            "productName": product.itemName
        }))
    }

    return (
        <Page>
            <div className="row" >
                {products.map(product => (
                    <div key={product.id} className="col-3" style={{margin: 10}}>
                        <Card sectioned>
                            <img
                                alt=""
                                width="100%"
                                height="100%"
                                style={{objectFit: 'cover', objectPosition: 'center'}}
                                src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg"
                            />
                            <TextContainer><TextStyle variation="strong">{product.itemName}</TextStyle></TextContainer>
                            <TextContainer>{product.price}</TextContainer>
                            <Button onClick={()=> handleClick(product)}>Add</Button>
                        </Card>
                    </div>
                ))}
            </div>
        </Page>
    );
}

export default StoreById;