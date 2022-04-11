import Head from 'next/head'
import Layout from '../../components/layout'
import {Divider, FlexboxGrid, Placeholder, Row} from 'rsuite'
import {useState} from 'react'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Date from '../../components/date'

const {Paragraph} = Placeholder

export async function getStaticPaths() {
    // return a list of possible value for id
    const paths = getAllPostIds()

    return {
        paths, // contains known paths returned by getAllPostIds(), include  params defined by pages/posts/[id].js
        fallback: false // if fallback is false, paths not returned by getStaticPaths result in 404 page
    }
}

export async function getStaticProps({params}) {
    // fetch required data for the blog post using params.id
    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}

export default function CodeHome({postData}) {
    // use state
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (<Layout home>
        <Head>
            <title>{postData.title}</title>
        </Head>

        <FlexboxGrid justify='center'>
            {/* Section - hello */}
            <FlexboxGrid.Item colspan={20}>
                <Row>
                    <Divider>Joseph Dubon</Divider>
                    <h2>{postData.title}</h2>
                    <small>{postData.name}</small>
                    <small><Date dateString={postData.date}/></small>
                </Row>
                <hr/>
                <Row>
                    {/* Section  - about me */}
                    <FlexboxGrid justify='space-around'>
                        <FlexboxGrid.Item colspan={24}>
                            <article>
                                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
                            </article>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Row>

            </FlexboxGrid.Item>

        </FlexboxGrid>

    </Layout>)

}