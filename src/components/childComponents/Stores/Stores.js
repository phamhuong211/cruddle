import { Button, Card, Page } from '@shopify/polaris';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import config from '../../../config';

function Stores() {
    const [stores, setStores] = useState([])

    useEffect(() =>{
        const getUsers = async () => {
            const res = await axios.get(`${config.apiURL}/users`)
            setStores(res.data)
        }
        getUsers();
    }, [])

    const navigate = useNavigate();
    const redirectToStore = (storeId)=> {
        navigate(`/stores/${storeId}`)
    }

    return (
        <Page>
            {stores.map((store, index) => (
                <div key={store.id} style ={{margin: 15}}>
                    <Card sectioned>
                        <div className="row">
                            <div className="col-10">{store.id}. {store.name}</div>
                            <div className="col-2"><Button onClick={()=>redirectToStore(store.id)}>See this store</Button></div>
                        </div>
                        
                    </Card>
                </div>
            ))}
        </Page>
    );
}

export default Stores;