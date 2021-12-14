import { Page } from '@shopify/polaris';
import React from 'react';
import ChangeThemeButton from './ChangeThemeButton';
import ChangeQuotes from './ChangeQuotes';


function Setting() {

    return (
        <Page>
            <ChangeThemeButton/>
            <ChangeQuotes/>
        </Page>
    );
}

export default Setting;