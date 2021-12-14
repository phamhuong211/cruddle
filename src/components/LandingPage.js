import { Link } from '@shopify/polaris';
import React from 'react';

function LandingPage() {
    return (
        <div>
            Hello World
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </div>
    );
}

export default LandingPage;