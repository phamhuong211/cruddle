import React, {useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card,FormLayout,IndexTable, Modal, Page,TextField,TextStyle } from '@shopify/polaris';
import config from '../../config';


export default function Users(user) {
    const [products, setProducts] = useState([]);
    const [activeModalAddProduct, setActiveModalAddProduct] = useState(false);
    // const userId = user.user.current.id;
    const userId = 1;
    const [productsToAdd, setProductsToAdd] = useState({
        itemName: '',
        price: 0
    })

    console.log(productsToAdd)

    const resourceName = {
        singular: 'product',
        plural: 'products',
    };

    const handleAddProductChange = useCallback(() => setActiveModalAddProduct(!activeModalAddProduct), [activeModalAddProduct])
    
    const handleAddProductName = useCallback(
        (productName)=> {
            setProductsToAdd({itemName: productName})
        }, []
    )

    const handleAddProductPrice = useCallback(
        (productPrice)=> {
            setProductsToAdd({price: productPrice})
        },[]
    )

    const addProductActivator = (<Button onClick={handleAddProductChange}>Add Products</Button>)

    useEffect(() => {
        const getAPIProducts = async ()=>{
            const res = await axios.get(`${config.apiURL}/products?userId=${userId}`)
            // console.log("jsonserver ", config.apiURL)
            setProducts(res.data);
        };
        getAPIProducts()
    },[userId]);

    const addProductRow = (
        <Card sectioned>
            <FormLayout>
                <FormLayout.Group >
                    <TextField label="Name" type="text" value={productsToAdd.itemName} onChange={handleAddProductName} autoComplete="off" />
                    <TextField label="Price" type="number" value={productsToAdd.price} prefix="vnđ" onChange={handleAddProductPrice} autoComplete="off" />
                </FormLayout.Group>
            </FormLayout>
        </Card>
    )

    const productModalMarkup = (
        <Modal
            activator={addProductActivator}
            open={activeModalAddProduct}
            onClose={handleAddProductChange}
            title="Add more product"
            primaryAction={{
                content: 'Add',
                onAction: handleAddProductChange,
            }}
        >
            {addProductRow}
        </Modal>
    )

    const rowActionMarkup = (
        <>
            {productModalMarkup}
        </>
    )

    const rowMarkup = products.map(
        ({id, itemName, price, quantity}, index) => (
          <IndexTable.Row id={id} key={id} position={index}>
            <IndexTable.Cell>#{id}</IndexTable.Cell>
            <IndexTable.Cell>
              <TextStyle variation="strong">{itemName}</TextStyle>
            </IndexTable.Cell>
            <IndexTable.Cell>{price}</IndexTable.Cell>
            <IndexTable.Cell>{quantity}</IndexTable.Cell>
            <IndexTable.Cell>{price*quantity}</IndexTable.Cell>
          </IndexTable.Row>
        ),
      );

    return (
        <Page>
            <Card>
                <div style={{padding: '16px', display: 'flex'}}>
                    <div style={{paddingLeft: '0.4rem'}}>
                        {rowActionMarkup}
                    </div>
                </div>
                <IndexTable
                    resourceName={resourceName}
                    itemCount={products.length}
                    headings={[
                    {title: 'Product id'},
                    {title: 'Name'},
                    {title: 'Price'},
                    {title: 'Quantity'},
                    {title: 'NET Sales', hidden: false},
                    ]}
                    selectable={false}
                >
                    {rowMarkup}
                </IndexTable>
            </Card>
        </Page>
    );
}
