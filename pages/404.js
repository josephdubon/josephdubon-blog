// custom 404 page

import Head from 'next/head'
import Layout from '../components/Layout'
import {Col, Grid, Row} from 'rsuite'

export default function Custom404() {
    return (<>
        <Head>
            <title>PAGE NOT FOUND</title>
        </Head>
        <Layout>
            <Grid fluid>
                <Row className='contentContainer centerText ' style={{textAlign: 'center'}}>
                    <Col className='rowTitle' xs={24}>
                        <h1>404</h1>
                        <p>Page not found.</p>
                    </Col>
                </Row>
            </Grid>

        </Layout>
    </>)
}