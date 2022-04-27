import Head from 'next/head'
import {Button, Col, Grid, Panel, Row} from 'rsuite'
import Layout, {siteTitle} from '../components/Layout'
import fs from 'fs'
import path from 'path'
import {postFilePaths, POSTS_PATH} from '../utils/mdxUtils'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'

export default function IndexHome({posts}) {
    // filter tag
    const filterTag = 'featured'
    // filter out posts
    posts = posts.filter(post => post.data.tags && post.data.tags.includes(filterTag)).slice(-10)

    posts = posts.sort(function (a, b) {
        return a + b // returns newest to oldest; change to a - b and returns oldest to newest
    })

    return (<Layout home>
        <Head>
            <title>Home - {siteTitle}</title>
        </Head>

        <Grid fluid>
            <Row className=' homePanel'>
                <Col className='rowTitle centerText' xs={24}>

                    <h2>Hello, my name is Joe!</h2>
                    <h4>I am a software developer, artist, and educator.</h4>
                    <br/>
                    <p>I build most my projects with a mix of Node, NextJS, Python, Django, and AWS.</p>
                    <p>I’m currently working remotely building startups and diving into web3/blockchain.</p>
                    <br/>
                </Col>
            </Row>
            <Row className='contentContainer'>
                <Col className='rowAltColor homePanel'>
                    <Col className='rowTitle centerText' xs={24}>
                        <h2>Let's build something beautiful together.</h2>
                        <h4>I design, structure, and build my projects with modern technologies.</h4>
                        <br/>
                        <br/>
                        <p>I am currently accepting entries to my project queue.</p>
                        Send me a message and introduce to <strong>yourself</strong> + your <strong>potential
                        project</strong>!
                        <br/>
                        <br/>
                        <a href='mailto:jd@josephdubon.com'>
                            <Button appearance='ghost'>jd@josephdubon.com</Button>
                        </a>
                    </Col>
                </Col>
            </Row>

            {/* full row */}
            <Row className='contentContainer'>
                <Col className='rowTitle centerText' xs={24}>
                    <h2>Recent Posts</h2>
                    <p>You Can't Put Your Arms Around
                        <br/>
                        A Random-Access-Memory </p>
                    <br/>
                </Col>

                {/* send message if there are no posts */}
                {posts.length < 1 ? ('There are no posts here yet. Thank you for your patience as I build out my website.') : ('')}

                {/* loop through posts */}
                {posts.map((post, index) => {
                    return (<span key={index}>
                        <Col key={index} xs={24} sm={12} md={8} lg={6}>
                            <Panel shaded bordered bodyFill className='postListCard'>
                                <Image src={post.data.thumbnailUrl} width='500' height='500'/>
                                <Panel header={<Link
                                    as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                                    href={`/posts/[slug]`}
                                >
                                    <a>{post.data.title}</a>
                                </Link>}>

                                    <p><small>
                                        {post.data.date}
                                        <br/>
                                        {post.data.description}
                                    </small></p>
                                </Panel>
                            </Panel>
                        </Col>
                    </span>)
                })}
            </Row>
        </Grid>
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