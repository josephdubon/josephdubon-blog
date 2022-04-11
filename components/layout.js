import Link from 'next/link'
import Head from 'next/head'
import NavBar from '../components/navbar'
import {Container, Content, Divider, FlexboxGrid, Footer, Header} from 'rsuite'

const name = 'Joseph Dubon'
export const siteTitle = name + 'Full-Stack Software Engineer'

export default function Layout({children, home}) {
    return (
        <div className={styles.container}>

            <Head>
                <link rel='icon' href='/favicon.ico'/>
                <meta
                    name='description'
                    content='Joseph Dubon is a fullstack software engineer. Skills ranging from web development, database design, dev-ops, root cause analysis.'
                />
                {/* meta tags (like og:image), which are used to describe a page's content */}
                <meta
                    property='og:image'
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name='og:title' content={siteTitle}/>
                <meta name='twitter:card' content='summary_large_image'/>
            </Head>

            <NavBar />

            <header className={styles.header}>
                {/* render different size header image conditional if home or on a sub page */}
                {home ? (
                    <>
                        <Image
                            priority
                            src='/images/josephdubon-profile.jpg'
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href='/'>
                            <a>
                                <Image
                                    priority
                                    src='/images/josephdubon-profile.jpg'
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href='/'>
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>

            {/* main child content here */}
            <main>{children}</main>

            {/* if not home render a 'back to home' link at bottom of page */}
            {!home && (
                <div className={styles.backToHome}>
                    <Link href='/'>
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}