import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import {getAllPostIds, getPostData} from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

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

export default function Post({postData}) {
    return (<Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date}/>
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
            </article>
        </Layout>)
}

