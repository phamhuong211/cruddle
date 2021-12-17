import { Button, Card, Modal, Page, TextContainer, TextField } from '@shopify/polaris';
import React, { useContext, useState } from 'react';
import {useTestContext} from './TestContext';


function First() {
    const [state, dispatch] = useTestContext()
    console.log(state);

    const [content, setContent] = useState();

    const handleClick = ()=> {
        console.log('click');
        dispatch()
    }

    const [activeModal, setActiveModal] = useState(false)
    const addButton =  (<Button onClick={()=> setActiveModal(!activeModal)}>Add</Button>)
    const addMarkup = (
        <Modal
            activator = {addButton}
            open={activeModal}
            onClose={(activeModal) => setActiveModal(!activeModal)}
            title="Add something"
            primaryAction={{
                content: 'Add',
                onAction: handleClick,
            }}
        >
            <TextField
                label="Content"
                value={content}
                autoFocus={true}
                type="text"
                onChange={(content)=> setContent(content)}
                autoComplete='off'
            />
        </Modal>
    )

    return  (
        <Page>
            {
                state.first.map((value, index) => (
                    <Card key={index}>
                        <TextContainer>{value}</TextContainer>
                    </Card>
                ))
            }
            {addMarkup}
        </Page>
    );
}

export default First;