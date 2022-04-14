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
            <title>About - {siteTitle}</title>
        </Head>

        <FlexboxGrid justify='center'>
            {/* Section - hello */}
            <FlexboxGrid.Item colspan={20}>
                <Row className='rowTitle'>
                    <h2>About Me</h2>
                    <h4>I am a full-stack software engineer</h4>
                    <small>BUILD THE WEB. SECURE THE FUTURE. CAPTURE TODAY, SO WE WILL NOT FORGET
                        TOMORROW.
                    </small>
                    <br/>
                    <br/>
                    <Link href='#'>
                        <a onClick={handleOpen}> Contact Card</a>
                    </Link>
                </Col>
                {/* Section  - modal - button */}
                <Row>
                    {/* send message if there are no posts */}
                    {posts.length < 1 ? ('There are no posts here yet. Thank you for your patience as I build out my website.') : ('')}

                    {/* loop through posts */}
                    {posts.map((post) => {
                        return (<>
                            <Col className='contentContainerCenterRow' xs={24} sm={12} md={8} lg={6}>
                                <Panel shaded bordered bodyFill className='postListCard'>
                                    <Image src={post.data.thumbnailUrl} width='500' height='500'/>
                                    <Panel header={<Link
                                        as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                                        href={`/posts/[slug]`}
                                    >
                                        <a>{post.data.title}</a>
                                    </Link>}>
                                        <small>{post.data.tags.map(tag => tag + ' ')}</small>
                                        <p><small>
                                            {post.data.date}
                                            <br/>
                                            {post.data.description}
                                        </small></p>
                                    </Panel>
                                </Panel>
                            </Col>
                        </>)
                    })}
                </Row>
            </Row>
        </Grid>
        <Row className='modal-container'>
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
        </Row>
    </Layout>)
}

export function getStaticProps() {
    const posts = postFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, filePath)) //all the filenames inside ./posts
        const {content, data} = matter(source)

        return {
            content, data, filePath,
        }
    })

    return {props: {posts}}
}