import Head from 'next/head'
import {Button, Col, Grid, Panel, Row} from 'rsuite'
import Layout, {siteTitle} from '../components/layout'
import fs from 'fs'
import path from 'path'
import {postFilePaths, POSTS_PATH} from '../utils/mdxUtils'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'

export default function Home({posts}) {
    // filter last ten posts
    posts = posts.slice(-8)

    posts = posts.sort(function (a, b) {
        return a - b // returns newest to oldest;change to a + b and returns oldest to newest
    })

    return (<Layout home>
        <Head>
            <title>Home - {siteTitle}</title>
        </Head>

        <Grid fluid>
            <Col className='contentContainerCenter rowTitle' xs={24}>
                <Col className='contentPanel contentContainerCenter rowTitle' xs={24}>
                    <h2>Hello, my name is Joe!</h2>
                    <h4>I am a full-stack software engineer.</h4>
                    <p>I love to teach what I know and help anyone looking to get into coding or tech.</p>
                    <p>{' '}</p>
                    <p>I’m currently working remotely building startups and diving into web3/blockchain development.</p>
                </Col>
                <Col className='contentPanel contentContainerCenter rowTitle rowAltColor' xs={24}>
                    <h2>Let's build something beautiful together.</h2>
                    <h4>Custom Software, Websites, Web Apps, SPA's, Consultations</h4>
                    <p>{' '}</p>
                    <p>I am currently accepting entries to my project queue.</p>
                    <p>{' '}</p>
                    <a href='mailto:jd@josephdubon.com'>
                        <Button appearance='ghost'>jd@josephdubon.com</Button>
                    </a>
                    <br/>
                </Col>
            </Col>

            {/* full row */}
            <Row>
                <Col className='contentContainerCenter rowTitle' xs={24}>
                    <h2>Posts Listing</h2>
                    <h4>Recently published</h4>
                    <p>Posts page is in development.</p>
                </Col>
                <Row className='contentContainer'>
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
                                        <p>
                                            <small>
                                                {post.data.date}
                                                <br/>
                                                {post.data.tags.map(tag => tag + ' ')}
                                                <br/>
                                                <br/>
                                                {post.data.description}
                                            </small></p>
                                    </Panel>
                                </Panel>
                                <br/>
                            </Col>
                        </>)
                    })}
                </Row>
            </Row>
        </Grid>


    </Layout>)
}