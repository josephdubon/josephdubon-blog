// custom 404 page

import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>PAGE NOT FOUND</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <h1>404</h1>
                <p>Page not found.</p>
            </section>
        </Layout>
    )
}