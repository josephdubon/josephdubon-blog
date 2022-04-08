import Layout from '../../components/layout'
import {getAllPostIds} from '../../lib/posts'

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

}

export default function Post() {
    return <Layout>
        ...
    </Layout>
}

