import Head from 'next/head'
import {Col, Grid, Panel, Row} from 'rsuite'
import Layout, {siteTitle} from '../components/layout'
import fs from 'fs'
import path from 'path'
import {postFilePaths, POSTS_PATH} from '../utils/mdxUtils'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'

export default function Home({posts}) {
    // filter tag
    const filterTag = 'live projects'
    // filter out posts
    posts = posts.filter(post => post.data.tags && post.data.tags.includes(filterTag)).slice(-10)

    posts = posts.sort(function (a, b) {
        return a - b // returns newest to oldest;change to a + b and returns oldest to newest
    })

    return (<Layout>
        <Head>
            <title>Live Projects - {siteTitle}</title>
        </Head>
        <Grid fluid>
            {/* full row */}
            <Row className='contentContainer'>
                <Col className='rowTitle' xs={24}>
                    <h2>Live Projects</h2>
                    <h4>Custom Software / Web Apps / Websites</h4>
                    <p>Code examples page is in development.</p>
                </Col>
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