import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import Date from '../../components/date'
import {getSortedPostsData} from '../../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function PostsHome({allPostsData}) {
    return (<Layout>
        <h1>Posts Home</h1>
        <p>What Is Lorem Ipsum Used for?
            Lorem ipsum is a popular form of dummy text used in the publishing industry (and later all forms of digital
            design) since the 16th century.

            Its main purpose is to help visualize the layout and style of a document without the need for actual
            content.

            Apart from its use as placeholder text before the real content is at hand, lorem ipsum can also be used
            after the content is available – by temporarily replacing it to separate form from meaning in a design. This
            excercise is sometimes called greeking – not to be confused with geeking 🤓</p>

        {/* blog posts list */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog Roll</h2>

            <ul className={utilStyles.list}>
                {/* loop through posts and list by date */}
                {allPostsData.map(({id, date, title}) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br/>
                        <small className={utilStyles.lightText}>
                            <Date dateString={date}/>
                        </small>
                    </li>
                ))}
            </ul>
        </section>
    </Layout>)
}