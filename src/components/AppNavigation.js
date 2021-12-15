import { Navigation } from '@shopify/polaris';
import React from 'react';
import {useGlobal} from './global';
import {
    HomeMajor,
    CartMajor,
    SettingsMajor,
    StoreMajor
  } from '@shopify/polaris-icons';

function AppNavigation() {
    const [state] = useGlobal()
    const cart = state.length
    return (
        <Navigation location='/'>
            <Navigation.Section
                items={[
                    {
                        url: "/dashboard",
                        label: "Dashboard",
                        icon: HomeMajor
                    },
                    {
                        url: "/products",
                        label: "Products",
                        icon: CartMajor
                    },
                    {
                        url: "/setting",
                        label: "Setting",
                        icon: SettingsMajor
                    },
                    {
                        url: "/stores",
                        label: "Stores",
                        icon: StoreMajor
                    },
                    {
                        url: "/cart",
                        label: "Cart",
                        badge: `${cart}`,
                        icon: CartMajor
                    }
                ]}
            />
        </Navigation>
    );
}

export default AppNavigation;