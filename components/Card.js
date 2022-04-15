import {Col, Panel, Row} from 'rsuite'
import Image from 'next/image'
import Link from 'next/link'
import {postFilePaths, POSTS_PATH} from '../utils/mdxUtils'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


export default function Card({posts}) {
// filter tag
    const filterTag = 'code'
// filter out posts
    posts = posts.filter(post => post.data.tags && post.data.tags.includes(filterTag)).slice(-10)

    posts = posts.sort(function (a, b) {
        return a - b // returns newest to oldest;change to a + b and returns oldest to newest
    })
    return (
        <Row className='contentContainer'>
            {posts.map((post) => {
                return (<>

                    <Col className='centerFlex' xs={24} sm={12} md={8} lg={6}>
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
                </>)
            })}
        </Row>
    )
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