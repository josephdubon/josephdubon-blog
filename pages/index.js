import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import Date from '../components/date'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({allPostsData}) {
    return (<Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            {/* introduction */}
            <p>Hello friends, my name is Joseph Dubon. I am a fullstack software engineer, portrait/lifestyle
                photography, and musician.</p>
            <p>
                Feel free to explore my website and discover my favorite ways of expression, code (full stack) and
                art (photos and music).
            </p>
        </section>

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