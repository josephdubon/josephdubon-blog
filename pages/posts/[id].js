import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'

export async function getStaticPaths() {
    // return a list of possible value for id
    const paths = getAllPostIds()

    return {
        paths, // contains known paths returned by getAllPostIds(), include  params defined by pages/posts/[id].js
        fallback: false
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
    return <Layout>
        {/* post metadata */}
        {postData.title}
        <br/>
        {postData.id}
        <br/>
        {postData.date}
        <br/>

        {/* post markdown->html content */}
        <div
            dangerouslySetInnerHTML={
                {
                    __html: postData.contentHtml
                }
            }/>
    </Layout>
}

