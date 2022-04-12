import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import {Divider, FlexboxGrid, Placeholder, Row} from 'rsuite'
import {getSortedPostsData} from '../../lib/posts'

const {Paragraph} = Placeholder

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function PostsHome({allPostsData}, props) {
    return (<Layout home>
        <Head>
            <title>Posts - {siteTitle}</title>
        </Head>

        <FlexboxGrid justify='center'>
            {/* Section - hello */}
            <FlexboxGrid.Item colspan={20}>
                <Row>
                    <Divider>Joseph Dubon</Divider>
                    <h2>Posts Listing</h2>
                    <h4>You Can't Put Your Arms Around A Random Access Memory</h4>
                    <p>Posts page is in development.</p>
                </Row>
                <Row>
                    {/* Section  - about me */}
                    <Divider>coming soon</Divider>
                    <FlexboxGrid justify='space-around'>

                        <FlexboxGrid.Item colspan={10}>
                            {/* blog posts list */}
                            {/*<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>*/}
                            {/*    <h2 className={utilStyles.headingLg}>Blog Roll</h2>*/}

                            {/*    <ul className={utilStyles.list}>*/}
                            {/*        /!* loop through posts and list by date *!/*/}
                            {/*        {allPostsData.map(({id, date, title}) => (*/}
                            {/*            <li key={id}>*/}
                            {/*                <Link href={`/posts/${id}`}>*/}
                            {/*                    <a>{title}</a>*/}
                            {/*                </Link>*/}
                            {/*                <br/>*/}
                            {/*                <small>*/}
                            {/*                    <Date dateString={date}/>*/}
                            {/*                </small>*/}
                            {/*            </li>*/}
                            {/*        ))}*/}
                            {/*    </ul>*/}
                            {/*</section>*/}
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