import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'

import {Button, ButtonToolbar, Divider, FlexboxGrid, List, Modal, Row, Timeline} from 'rsuite'
import {useState} from 'react'

export default function AboutHome({allPostsData}, props) {
    // use state
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (<Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>

        <FlexboxGrid justify='center'>
            {/* Section - hello */}
            <FlexboxGrid.Item colspan={20}>
                <Row>
                    <Divider>Joseph Dubon</Divider>
                    <h2>About Me</h2>
                    <h4>I am a full-stack software engineer</h4>
                    <p>BUILD THE WEB. SECURE THE FUTURE. CAPTURE TODAY, SO WE WILL NOT FORGET
                        TOMORROW.
                    </p>
                    <br/>
                    <small>website in development, thank you for your patience</small>

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
                <Row>
                    {/* Section  - about me */}
                    <Divider>about me</Divider>
                    <FlexboxGrid justify='space-around'>
                        <FlexboxGrid.Item colspan={16}>
                            <h6>I started my professional career as a developer in 2012</h6>
                            <p>But I have been programming and building/breaking computers for most my life. I built my
                                first computer from recycled and donated parts when I was in elementary school. I built
                                my first website just a few years later.</p>
                            <br/>

                            <h6>I am passionate about tech, education, design,
                                photography</h6>
                            <p>and of course improving the human condition with the small bits of wisdom <br/>life
                                experience and education have granted me. I also love to play music with friends and
                                jam with my kids.
                            </p>
                            <br/>

                            <h6>I love learning and adapting to new tech stacks and environments</h6>
                            <p>my favorite programming stacks are with Python, Django, and Javascript. I also use Emacs
                                Elisp with Doom as my personal bullet journal and engineers logbook.</p>
                            <br/>

                            <h6>Nothing is 'hack proof' but...</h6>
                            <p>we can be diligent on how we build, technologies we use, as well as the <br/>processes we
                                implement to maintain our projects.</p>
                        </FlexboxGrid.Item>

                        <FlexboxGrid.Item colspan={8}>
                            <Timeline>
                                <Timeline.Item>2012 - Wordpress Web Developer</Timeline.Item>
                                <Timeline.Item>2015 - Jr Web Developer</Timeline.Item>
                                <Timeline.Item>2019 - Frontend Web Developer</Timeline.Item>
                                <Timeline.Item>2021 - Fullstack Software
                                    Engineer</Timeline.Item>
                                <Timeline.Item>What a wonderful journey!</Timeline.Item>
                            </Timeline>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Row>

            </FlexboxGrid.Item>

        </FlexboxGrid>

    </Layout>)
}