import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../../config'
import { Button, Card, FormLayout, Modal, Page, TextField, TextStyle } from '@shopify/polaris';
import { useParams } from 'react-router';

function ProductById() {
    const id = useParams()
    const productId = parseInt(id.id)

    const [product, setProduct] = useState({price: 0, quantity: 0});
    const hanleChangeProduct = (key, value) => {
        const dataClone = {...product};
        dataClone[key] = value;
        setProduct(dataClone);
    }

    
    const handleEdit = () => {
        const updateProduct = async () => {
            const res = await axios.put(`${config.apiURL}/products/${productId}`, product)
            setProduct(res.data)
            setActiveModalEditProduct(!activeModalEditProduct)
        }
        updateProduct()
    }

    /**Get product by id */
    useEffect(() => {
        const getProductById = async () => {
            const res = await axios.get(`${config.apiURL}/products/${productId}`)
            setProduct(res.data)
        }
        getProductById();
    },[productId])    
    
    const [activeModalEditProduct, setActiveModalEditProduct] = useState(false);
    const productActivator = (<Button onClick={()=> setActiveModalEditProduct(!activeModalEditProduct)}>Edit Products</Button>)

    const modalMarkup = (
        <Modal
            activator={productActivator}
            open={activeModalEditProduct}
            onClose={()=> setActiveModalEditProduct(!activeModalEditProduct)}
            title="Edit"
            primaryAction={{
                content: "Done",
                onAction: handleEdit
            }}
        >
            <Card sectioned>
                <FormLayout>
                    <FormLayout.Group >
                        <TextField 
                            label="Name" 
                            type="text" 
                            value={product.itemName} 
                            onChange={(value) => {hanleChangeProduct("itemName", value)} } 
                            autoComplete="off" />
                        <TextField 
                            label="Price" 
                            type="number" 
                            value={product.price} 
                            prefix="vnđ" 
                            onChange={(value) => {hanleChangeProduct("price", value)} } 
                            autoComplete="off" />
                        <TextField 
                            label="Sale Quantity"
                            type="number"
                            value={product.quantity}
                            onChange={(value) => {hanleChangeProduct("quantity", value)} }
                            autoComplete="off"/>
                    </FormLayout.Group>
                </FormLayout>
            </Card>
        </Modal>
    )

   
    return product && (
        <Page>
            <Card sectioned 
                title='Product'
                // primaryFooterAction={{
                //     content: 'Edit',
                //     onAction: handleEdit
                // }}
            >
                <div className='row productById'>
                    <div className='col-4'><TextStyle variation="strong">Name</TextStyle></div>
                    <div className='col-8'>{product.itemName}</div>
                </div>
                <div className='row productById'>
                    <div className='col-4'><TextStyle variation="strong">Price</TextStyle></div>
                    <div className='col-8'>{product.price}</div>
                </div>
                <div className='row productById'>
                    <div className='col-4'><TextStyle variation="strong">Sale quantity</TextStyle></div>
                    <div className='col-8'>{product.quantity}</div>
                </div>
                <div className='row productById'>
                    <div className='col-4'><TextStyle variation="strong">NET sale</TextStyle></div>
                    <div className='col-8'>{product.price*product.quantity}</div>
                </div>
                <div className='row productById'>
                    <div className='col-4'><TextStyle variation="strong">Saler</TextStyle></div>
                    <div className='col-8'>{}</div>
                </div>
                {modalMarkup}
            </Card>
        </Page>
    );
}

export default ProductById;