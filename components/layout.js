import Link from 'next/link'
import Head from 'next/head'
import NavBar from '../components/navbar'
import {Container, Content, Divider, FlexboxGrid, Footer, Header} from 'rsuite'

const name = 'Joseph Dubon'
export const siteTitle = name + 'Full-Stack Software Engineer'

export default function Layout({children, home}) {
    return (<>
        {/* metadata */}
        <Head>
            <link rel='icon' href='/favicon.ico'/>
            <meta
                name='description'
                content='Joseph Dubon is a fullstack software engineer. Skills ranging from web development, database design, dev-ops, root cause analysis.'
            />
            {/* meta tags (like og:image), which are used to describe a page's content */}
            <meta
                property='og:image'
                content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name='og:title' content={siteTitle}/>
            <meta name='twitter:card' content='summary_large_image'/>
            <title>{' '}</title>
        </Head>

        <Container>
            {/* header area */}
            <Header>
                <NavBar/>
            </Header>

            {/* main child content area */}
            <Content>{children}</Content>

            {/* footer area */}
            <Footer>
                <Divider>thanks for visiting</Divider>
                <FlexboxGrid justify='space-around'>
                    <FlexboxGrid.Item colspan={6}>
                        © {new Date().getFullYear()}
                        <Link href='/'><a>
                            {' '} Joseph Adonay Dubon
                        </a></Link>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={6}>
                        Built in Reno with a lot of ❤️
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={6}>
                        "The moth don't care if the flame is real."
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Footer>
        </Container>

    </>)
}