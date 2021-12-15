import './App.scss';
import { BrowserRouter, Link as ReactRouterLink} from "react-router-dom";
import AppFrame from './components/AppFrame';
import { AppProvider } from '@shopify/polaris';
import { useContext } from 'react';
import {ThemeContext} from "./components/context/ThemeContext";

function App() {
  const themeContext = useContext(ThemeContext)
  const logoURL = `${process.env.PUBLIC_URL}/logo.png`

  const theme = {
    colorScheme: `${themeContext.theme}`,
    logo: {
        width: 100,
        topBarSource: `${logoURL}`,
        contextualSaveBarSource: `${logoURL}`,
        url: '/',
        accessibilityLabel: 'Crudie',
    }
  }

  const i18nApp = {
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
}

  return (
    <BrowserRouter>
      <AppProvider 
        linkComponent={Link}
        theme={theme}
        i18n={i18nApp}
      >
        <AppFrame/>
      </AppProvider>
    </BrowserRouter>
  );
}

const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/;
function Link({children, url = '', external, ref, ...rest}) {
  // react-router only supports links to pages it can handle itself. It does not
  // support arbirary links, so anything that is not a path-based link should
  // use a reglar old `a` tag
  if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
    rest.target = '_blank';
    rest.rel = 'noopener noreferrer';
    return (
      <a href={url} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <ReactRouterLink to={url} {...rest}>
      {children}
    </ReactRouterLink>
  );
}

export default App;
