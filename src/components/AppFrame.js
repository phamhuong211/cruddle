import React, { useCallback, useRef, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Frame, TopBar, Navigation, AppProvider } from "@shopify/polaris";
import FrameRoutes from "./FrameRoutes";

function AppFrame() {
    const defaultState = useRef({
        id: 1,
        name: "Pham Huong",
        username: "huongpham",
        email: "huongpham211@gmail.com",
        theme: 'light'
    });

    console.log("ref",defaultState.current.theme);
    const location = useLocation();
    const skipToContentRef = useRef(null);
    const [themeColor, setThemeColor] = useState("light")

    const [userMenuActive, setUserMenuActive] = useState(false);
    const [mobileNavigationActive, setMobileNavigationActive] = useState(false);


    const toggleUserMenuActive = useCallback(() => setUserMenuActive((userMenuActive) => !userMenuActive),[],);
    const toggleMobileNavigationActive = useCallback(() => setMobileNavigationActive((mobileNavigationActive) => !mobileNavigationActive,),[],);

    const handleChangeTheme = () => {
        if(themeColor === 'light') {
            setThemeColor('dark')
            defaultState.current.theme = 'dark'
        } else {
            setThemeColor('light')
            defaultState.current.theme = 'light'
        }
    }
    
    
    const userMenuActions = [
        {
            items: ([
                {
                    content: 'Change Theme', 
                    onAction: handleChangeTheme
            }]),
        },
    ];
    
    const topBarMarkup = (
        <TopBar
            showNavigationToggle
            userMenu={
                <TopBar.UserMenu
                    actions={userMenuActions}
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
            <AppProvider
                theme={{
                    colorScheme: `${themeColor}`,
                    logo: {
                        width: 125,
                        topBarSource:
                        'https://colorlib.com/wp/wp-content/uploads/sites/2/2013/10/BoldMedia-flat-logo.png',
                        contextualSaveBarSource:
                        'https://colorlib.com/wp/wp-content/uploads/sites/2/2013/10/BoldMedia-flat-logo.png',
                        url: '/',
                        accessibilityLabel: 'Crudie',
                    }
                  }}
                i18n={{
                    Polaris: {
                        Avatar: {
                            label: 'Avatar',
                            labelWithInitials: 'Avatar with initials {initials}',
                        },
                        ContextualSaveBar: {
                            save: 'Save',
                            discard: 'Discard',
                        },
                        TextField: {
                            characterCount: '{count} characters',
                        },
                        TopBar: {
                            toggleMenuLabel: 'Toggle menu',

                            SearchField: {
                            clearButtonLabel: 'Clear',
                            search: 'Search',
                            },
                        },
                        Modal: {
                            iFrameTitle: 'body markup',
                        },
                        Frame: {
                            skipToContent: 'Skip to content',
                            navigationLabel: 'Navigation',
                            Navigation: {
                                closeMobileNavigationLabel: 'Close navigation',
                            },
                        },
                    },
                }}
            >
                <Frame
                    topBar={topBarMarkup}
                    navigation={
                        <Navigation location={location.pathname}>
                          <Navigation.Section
                            items={[
                              {
                                url: "/dashboard",
                                label: "Dashboard",
                              },
                              {
                                url: "/products",
                                label: "Products",
                              },
                              {
                                url: "/users",
                                label: "Users",
                              },
                            ]}
                          />
                        </Navigation>
                      }
                    showMobileNavigation={mobileNavigationActive}
                    onNavigationDismiss={toggleMobileNavigationActive}
                    skipToContentTarget={skipToContentRef.current}
                >
                    <FrameRoutes user={defaultState.current.id}/>
                </Frame>
            </AppProvider>
        </div>
    );
}

export default AppFrame;