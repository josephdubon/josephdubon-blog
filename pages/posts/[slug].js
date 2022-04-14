import fs from 'fs'
import matter from 'gray-matter'
import {serialize} from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import path from 'path'
import CustomLink from '../../components/CustomLink'
import Layout from '../../components/Layout'
import {postFilePaths, POSTS_PATH} from '../../utils/mdxUtils'
import {Col, Divider, Grid, Row} from 'rsuite'
import {MDXRemote} from 'next-mdx-remote'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
    a: CustomLink, // It also works with dynamically-imported components, which is especially
    // useful for conditionally loading components for certain routes.
    // See the notes in README.md for more details.
    TestComponent: dynamic(() => import('../../components/TestComponent')), Head,
}

export default function PostPage({source, frontMatter}) {
    return (<Layout>
        <Grid fluid>
            {/* post card */}
            <Row className='contentContainer'>
                <Col className='rowTitle' xs={24}>
                    <h2>{frontMatter.title}</h2>
                    <h4>{frontMatter.date}</h4>
                    {frontMatter.description && (<p className='description'>{frontMatter.description}</p>)}
                    <Divider/>
                </Col>
                <Col className='rowTitle' xs={24}>
                    <MDXRemote {...source} components={components}/>
                </Col>
            </Row>
        </Grid>
    </Layout>)
}

export const getStaticProps = async ({params}) => {
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const {content, data} = matter(source)

    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [], rehypePlugins: [],
        }, scope: data,
    })

    return {
        props: {
            source: mdxSource, frontMatter: data,
        },
    }
}

export const getStaticPaths = async () => {
    const paths = postFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({params: {slug}}))

    return {
        paths, fallback: false,
    }
}
