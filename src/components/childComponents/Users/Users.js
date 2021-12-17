import React from 'react';
import TestProvider from './TestContext';
import {initialState} from './reducers/index';
import {reducers} from './reducers/index'
import { Card, Page } from '@shopify/polaris';

import First from './First';

function Users() {
    return (
        <div>
            <TestProvider reducers={reducers} initialState={initialState} >
                <Page>
                    <Card sectioned>
                        <First/>
                    </Card>
                    <Card sectioned>

                    </Card>
                </Page>
            </TestProvider>
        </div>
    );
}

export default Users;