import React, {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import { Button, Card} from '@shopify/polaris';

function ChangeThemeButton(props) {
    const themeContext = useContext(ThemeContext)

    return (
        <Card sectioned title="Change Theme">
            <Button
                onClick={themeContext.toggleTheme}
            >
                {themeContext.theme}
            </Button>
        </Card>
    );
}

export default ChangeThemeButton;