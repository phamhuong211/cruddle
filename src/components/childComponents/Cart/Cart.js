import { Button, Card, Page, TextContainer, TextStyle } from '@shopify/polaris';
import {useGlobal, actions} from '../../global';
import {
    DeleteMinor
} from '@shopify/polaris-icons';
import cart from '../../../images/cart.png'
import { Link } from 'react-router-dom';

function Cart() {
    const [state, dispatch] = useGlobal()
    console.log(state);

    const handleDelete = (productId) => {
        dispatch(actions.deleteItem(productId))
    }

    return state.length > 0 ? (
        <Page>
            <div className="row" >
                {state.map(product => (
                    <div key={product.productId} className="col-4" style={{margin: 10}}>
                        <Card sectioned>
                            <img
                                alt=""
                                width="100%"
                                height="100%"
                                style={{objectFit: 'cover', objectPosition: 'center'}}
                                src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg"
                            />
                            <TextContainer><TextStyle variation="strong">Name: {product.productName}</TextStyle></TextContainer>
                            <TextContainer>Price: {product.price}</TextContainer>
                            <TextContainer>Quantity: {product.quantityCart}</TextContainer>
                            <Button plain icon={DeleteMinor} onClick={()=> handleDelete(product.productId)}></Button>
                        </Card>
                    </div>
                ))}
            </div>
        </Page>
    ) : (
        <Page>
            <Card sectioned>
                <div className="cart-img">
                    <img src={cart} alt="cart"/>
                </div>
                <div className="cart-content">
                    <TextContainer>Nothing on your cart. Visit {"  "}<Link to="/stores">Stores</Link></TextContainer>
                    
                </div>
            </Card>
        </Page>
    )
    ;
}

export default Cart;