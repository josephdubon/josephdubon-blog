import {useState} from 'react'
import Head from 'next/head'
import {Button, ButtonToolbar, Divider, FlexboxGrid, List, Modal, Row} from 'rsuite'
import Layout, {siteTitle} from '../components/layout'

export default function Home() {
    // use state
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (<Layout home>
        <Head>
            <title>Home - {siteTitle}</title>
        </Head>

        <FlexboxGrid justify='center'>
            {/* Section - hello */}
            <FlexboxGrid.Item colspan={20}>
                <Row>
                    <Divider>Joseph Dubon</Divider>
                    <h2>Hello, my name is Joe!</h2>
                    <h4>I am a full-stack software engineer</h4>
                    <p>I’m currently working remotely helping build startups and on the Americoders project.</p>
                    <br/>
                    <p>Website in development, thank you for your patience</p>

                    {/* Section  - modal - button */}
                    <div className='modal-container'>
                        <br/>
                        <ButtonToolbar>
                            <Button onClick={handleOpen}> Contact Card</Button>
                        </ButtonToolbar>

                        {/* Section - modal - content */}
                        <Modal open={open} onClose={handleClose}>
                            <Modal.Header>
                                <Modal.Title>Contact Card</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <List bordered hover>
                                    <List.Item>Name: Joseph Dubon</List.Item>
                                    <List.Item>Title: Full-Stack Software Engineer</List.Item>
                                    <List.Item>Email: <a
                                        href='mailto:jd@josephdubon.com'>jd@josephdubon.com</a></List.Item>
                                    <List.Item>Phone: <a
                                        href='tel:(775)232-6280'>(775)232-6280</a></List.Item>
                                </List>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={handleClose} appearance='primary'>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </Row>

            </FlexboxGrid.Item>

        </FlexboxGrid>

    </Layout>)
}