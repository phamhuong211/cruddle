import React, { useCallback, useRef, useState } from 'react';
import { Frame, TopBar} from "@shopify/polaris";
import FrameRoutes from "./FrameRoutes";

import AppNavigation from "./AppNavigation";

function AppFrame() {
    const defaultState = useRef({
        id: 1,
        name: "Pham Huong",
        username: "huongpham",
        email: "huongpham211@gmail.com",
        theme: 'light'
    });

    const skipToContentRef = useRef(null);

    const [userMenuActive, setUserMenuActive] = useState(false);
    const [mobileNavigationActive, setMobileNavigationActive] = useState(false);


    const toggleUserMenuActive = useCallback(() => setUserMenuActive((userMenuActive) => !userMenuActive),[],);
    const toggleMobileNavigationActive = useCallback(() => setMobileNavigationActive((mobileNavigationActive) => !mobileNavigationActive,),[],);

    const topBarMarkup = (
        <TopBar
            showNavigationToggle
            userMenu={
                <TopBar.UserMenu
                    // actions={userMenuActions}
                    name={defaultState.current.name}
                    detail={defaultState.current.email}
                    initials={defaultState.current.name.charAt(0)}
                    open={userMenuActive}
                    onToggle={toggleUserMenuActive}
                />
            }
            onNavigationToggle={toggleMobileNavigationActive}
        />
    );

    return (
        <div style={{height: '500px'}}>
            <Frame
                topBar={topBarMarkup}
                navigation={<AppNavigation/>}
                showMobileNavigation={mobileNavigationActive}
                onNavigationDismiss={toggleMobileNavigationActive}
                skipToContentTarget={skipToContentRef.current}
            >
                <FrameRoutes user={defaultState.current.id}/>
            </Frame>
        </div>
    );
}

export default AppFrame;