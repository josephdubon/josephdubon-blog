import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import {Divider, FlexboxGrid, Placeholder, Row} from 'rsuite'
import {useState} from 'react'

const {Paragraph} = Placeholder


export default function CodeHome({allPostsData}, props) {
    // use state
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (<Layout home>
        <Head>
            <title>Code - {siteTitle}</title>
        </Head>

        <FlexboxGrid justify='center'>
            {/* Section - hello */}
            <FlexboxGrid.Item colspan={20}>
                <Row className='rowTitle'>
                    <h2>Code Examples</h2>
                    <h4>Python, Javascript, HTML, CSS, Haskell, Elisp</h4>
                    <p>Code examples page is in development.</p>
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