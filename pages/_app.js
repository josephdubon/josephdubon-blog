// This App component is the top-level component which will be common across all the different pages.
// You can use this App component to keep state when navigating between pages, for example.

import 'rsuite/dist/rsuite.min.css'
import '../styles/global.css'

import {CustomProvider} from 'rsuite'

export default function App({Component, pageProps}) {
    return (<CustomProvider theme='dark'>
        <Component {...pageProps} />
    </CustomProvider>)
}