import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import {Divider, FlexboxGrid, Placeholder, Row} from 'rsuite'

const {Paragraph} = Placeholder


export default function PhotoHome({allPostsData}, props) {
    return (<Layout home>
        <Head>
            <title>Photo - {siteTitle}</title>
        </Head>

        <FlexboxGrid justify='center'>
            {/* Section - hello */}
            <FlexboxGrid.Item colspan={20}>
                <Row className='rowTitle'>
                    <h2>Photography Gallery</h2>
                    <h4>Digital, Film, Portrait, Lifestyle</h4>
                    <p>Photo gallery page is in development.</p>
                </Row>
                <Row>
                    {/* Section  - about me */}
                    <Divider>coming soon</Divider>
                    <FlexboxGrid justify='space-around'>
                        <FlexboxGrid.Item colspan={10}>
                            <Paragraph style={{marginTop: 30}} graph='square'/>
                            <Paragraph style={{marginTop: 30}} graph='square'/>
                            <Paragraph style={{marginTop: 30}} graph='square'/>
                            <Paragraph style={{marginTop: 30}} graph='square'/>
                            <Paragraph style={{marginTop: 30}} graph='square'/>
                        </FlexboxGrid.Item>

                        <FlexboxGrid.Item colspan={10}>
                            <Paragraph style={{marginTop: 30}} graph='square'/>
                            <Paragraph style={{marginTop: 30}} graph='square'/>
                            <Paragraph style={{marginTop: 30}} graph='square'/>
                            <Paragraph style={{marginTop: 30}} graph='square'/>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Row>

            </FlexboxGrid.Item>

        </FlexboxGrid>

    </Layout>)
}