import React, {useCallback, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Button, Card,FormLayout,IndexTable, Modal, Page,TextField,TextStyle } from '@shopify/polaris';
import config from '../../config';
import {
    EditMinor,
    DeleteMinor
  } from '@shopify/polaris-icons';

// import ModalProduct from './ModalProduct'

function Products(user) {
    const [products, setProducts] = useState([]);
    // const userId = user.user.current.id;
    const userId = 4;
    const [activeModalAddProduct, setActiveModalAddProduct] = useState(false);
    const [productsToAdd, setProductsToAdd] = useState({itemName: '', price: 0, userId: userId, quantity: 0})
    const resourceName = {
        singular: 'product',
        plural: 'products',
    };

    const handleAddProductChange = useCallback(() => setActiveModalAddProduct(!activeModalAddProduct), [activeModalAddProduct])

    /**onClick triiger ModalEditProducts */
    // const handleEditProduct = (idProduct) => {
    //     const putAPiProduct = async () => {
    //         // const res = await axios.put(`${config.apiURL}/products/${idProduct}`, productToEdit);
    //         console.log("edit on id ", idProduct)
    //     };
    //     putAPiProduct()
    // }


    /**Onclick redirect to product/id */
    const navigate = useNavigate();
    const handleEditProduct = (productId) => {
        navigate(`/products/${productId}`)
    }

    /** Handle Remove Product */

    const handleRemoveProduct = (idProduct) => {
        const deleteApiProduct = async () => {
            await axios.delete(`${config.apiURL}/products/${idProduct}`);
            setProducts(products.filter(obj => obj.id !== idProduct))
        };
        deleteApiProduct()
    }

    /**Add new Product */
    const handlePost =() => {
        const postApiProduct = async () => {
            const res = await axios.post(`${config.apiURL}/products`, productsToAdd)
            setProducts([...products, res.data])
            setProductsToAdd({itemName: '', price: 0, userId: userId, quantity: 0})
            setActiveModalAddProduct(!activeModalAddProduct)
        };
        postApiProduct();
    }

    /**Get all Product */
    useEffect(() => {
        const getAPIProducts = async ()=>{
            const res = await axios.get(`${config.apiURL}/products?userId=${userId}`)
            // console.log("jsonserver ", config.apiURL)
            setProducts(res.data);
        };
        getAPIProducts()
    },[userId]);

    /**Modal trigger onClick Add Products */

    const addProductActivator = (<Button onClick={handleAddProductChange}>Add Products</Button>)

    const modalProductsMarkup = (
        <Modal
            activator={addProductActivator}
            open={activeModalAddProduct}
            onClose={()=> setActiveModalAddProduct(!activeModalAddProduct)}
            title="Add more product"
            primaryAction={{
                content: 'Add',
                onAction: handlePost,
            }}
        >
            <Card sectioned>
                <FormLayout>
                    <FormLayout.Group >
                        <TextField 
                            label="Name" 
                            type="text" 
                            value={productsToAdd.itemName} 
                            onChange={(productName) => {setProductsToAdd({...productsToAdd, itemName: productName,})} } 
                            autoComplete="off" />
                        <TextField 
                            label="Price" 
                            type="number" 
                            value={productsToAdd.price} 
                            prefix="vnđ" onChange={(productPrice) => {setProductsToAdd({...productsToAdd,  price: productPrice,})} } 
                            autoComplete="off" />
                    </FormLayout.Group>
                </FormLayout>
            </Card>
        </Modal>
    )

    /**Modal trigger onClick button Edit on Action col */
    // const modalEditProduct = (
    //     <Modal
    //         activator={handleEditProduct}
    //         open={activeModalEditProduct}
    //         onClose={handleAddProductChange}
    //         title="Add more product"
    //         primaryAction={{
    //             content: 'Add',
    //             onAction: handlePost,
    //         }}
    //     >
    //         <Card sectioned>
    //             <FormLayout>
    //                 <FormLayout.Group >
    //                     <TextField 
    //                         label="Name" 
    //                         type="text" 
    //                         value={productToEdit.itemName} 
    //                         onChange={(productName) => {setProductToEdit({...productsToAdd, itemName: productName,})} } 
    //                         autoComplete="off" />
    //                     <TextField 
    //                         label="Price" 
    //                         type="number" 
    //                         value={productToEdit.price} 
    //                         prefix="vnđ" onChange={(productPrice) => {setProductToEdit({...productsToAdd,  price: productPrice,})} } 
    //                         autoComplete="off" />
    //                 </FormLayout.Group>
    //             </FormLayout>
    //         </Card>
    //     </Modal>
    // )

    const rowActionMarkup = (
        <>
            {modalProductsMarkup}
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
            <IndexTable.Cell>
                <Button icon={EditMinor} onClick={()=> handleEditProduct(id)}></Button>
                <Button icon={DeleteMinor} onClick={()=> handleRemoveProduct(id)}></Button>
            </IndexTable.Cell>
          </IndexTable.Row>
        ),
      );

    return (
        <Page>
            <Card sectioned>
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
                    {title: 'Actions'}
                    ]}
                    selectable={false}
                >
                    {rowMarkup}
                </IndexTable>
            </Card>
        </Page>
    );
}

export default Products;