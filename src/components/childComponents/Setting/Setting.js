import { Page } from '@shopify/polaris';
import React from 'react';
import ChangeThemeButton from './ChangeThemeButton';
import ChangeQuotes from './ChangeQuotes';
import Test from './Test';


function Setting() {

    return (
        <Page>
            <ChangeThemeButton/>
            <ChangeQuotes/>
        </Page>
    );
}

export default Setting;