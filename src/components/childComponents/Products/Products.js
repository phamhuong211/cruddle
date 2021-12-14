import React, {useCallback, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Button, Card,FormLayout,IndexTable, Modal, Page,TextContainer,TextField,TextStyle } from '@shopify/polaris';
import config from '../../../config';
import {
    EditMinor,
    DeleteMinor,
    SortMinor
  } from '@shopify/polaris-icons';

// import ModalProduct from './ModalProduct'

function Products(user) {
    const userId = user.user.user;
    const [products, setProducts] = useState([]);

    const [activeModalAddProduct, setActiveModalAddProduct] = useState(false);
    const [productsToAdd, setProductsToAdd] = useState({itemName: '', price: 0, userId: userId, quantity: 0})
    const [activeModalDelete, setActiveMoalDelete] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const resourceName = {singular: 'product', plural: 'products'};

    const handleAddProductChange = useCallback(() => setActiveModalAddProduct(!activeModalAddProduct), [activeModalAddProduct])

    // const handleSortPrice = () => {
    //     const sortPrice = async () => {
    //         const res = await axios.get(`${config.apiURL}/products?userId=${userId}&_sort=price`)
    //         console.log(res.data);
    //     }
    //     sortPrice()
    // }

    const [sortToUp, setSortToUp] = useState(false)
    const handleSortPrice = ()=> {
        const sortProduct = [...products]
        if(sortToUp) {
            sortProduct.sort((a, b)=> (a.price - b.price))
            setProducts(sortProduct)
            setSortToUp(!sortToUp)
        } else {
            sortProduct.sort((a, b)=> (b.price - a.price))
            setProducts(sortProduct)
            setSortToUp(!sortToUp)
        }
    }


    /**Onclick redirect to product/id */
    const navigate = useNavigate();
    const handleEditProduct = (productId) => {
        navigate(`/products/${productId}`)
    }

    /** Handle Remove Product */
    const handleRemoveProduct = () => {
        const deleteApiProduct = async () => {
            await axios.delete(`${config.apiURL}/products/${deleteId}`);
            setProducts(products.filter(obj => obj.id !== deleteId))
            setActiveMoalDelete(!activeModalDelete)
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
            onClose={(activeModalAddProduct)=> setActiveModalAddProduct(!activeModalAddProduct)}
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

    const modalRemoveConfirm = (
        <Modal
            open={activeModalDelete}
            onClose={()=> setActiveMoalDelete(!activeModalDelete)}
            primaryAction={{
                content: 'Yes, delete this product',
                onAction: handleRemoveProduct
            }}
        >
            <Modal.Section>
                <TextContainer>
                    <p>
                        Are you sure you want to delete this product?
                    </p>
                </TextContainer>
            </Modal.Section>
        </Modal>
    )


    const rowActionMarkup = (
        <>
            {modalProductsMarkup}
            {modalRemoveConfirm}
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
                <Button 
                    plain
                    icon={EditMinor} 
                    onClick={()=> handleEditProduct(id)}>
                </Button>
                {/* <Button icon={DeleteMinor} onClick={()=> handleRemoveProduct(id)}></Button> */}
                <Button 
                    plain
                    icon={DeleteMinor} 
                    onClick={()=> {
                        setActiveMoalDelete(!activeModalDelete)
                        setDeleteId(id)
                    }}>
                </Button>
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
                    {title: <>Price <Button plain onClick={handleSortPrice} icon={SortMinor}></Button></>},
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