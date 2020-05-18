import React from 'react';
import Home from './home';
import Head from 'next/head';
const App = () => (
    <div>
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.4.6/dist/css/uikit.min.css" />
            <script src="https://cdn.jsdelivr.net/npm/uikit@3.4.6/dist/js/uikit.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/uikit@3.4.6/dist/js/uikit-icons.min.js"></script>
        </Head>
        <Home/>
    </div>
);
export default App;