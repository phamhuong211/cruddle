import React, {useContext, useState} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import { Button, Card} from '@shopify/polaris';

function ChangeThemeButton() {
    const themeContext = useContext(ThemeContext)
    const [content, setContent] = useState(()=> {
        if(themeContext.theme === 'dark') return 'light'
        else if (themeContext.theme === 'light') return 'dark'
    })

    const handleClick = () => {
        themeContext.toggleTheme()
        if(content === 'dark') return setContent('light')
        else if(content === 'light') return setContent('dark')
        
    }

    return (
        <Card sectioned title="Change Theme">
            <Button
                onClick={handleClick }
            >
                {content}
            </Button>
        </Card>
    );
}

export default ChangeThemeButton;