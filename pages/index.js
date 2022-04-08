import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'

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
            <h2 className={utilStyles.headingLg}>Journal</h2>

            <ul className={utilStyles.list}>
                {/* loop through posts and list by date */}
                {allPostsData.map(({id, date, title}) => (
                    <li className={utilStyles.listItem} key={id}>
                        {title}
                        <br/>
                        {id}
                        <br/>
                        {date}
                    </li>
                ))}
            </ul>
        </section>
    </Layout>)
}