import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

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

    </Layout>)
}