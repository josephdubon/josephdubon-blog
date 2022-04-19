import {Col, Divider, Footer, Grid} from 'rsuite'
import Link from 'next/link'

export default function FooterHome() {
    return (<>
        <Footer>
            <Divider>thanks for visiting</Divider>
            <Grid fluid className='contentContainer centerText'>
                <Col sm={8}>
                    © {new Date().getFullYear()}
                    {' '}
                    <Link href='/'>
                        <a>Joseph Dubon</a>
                    </Link>
                </Col>
                <Col sm={8}>
                    Built with ❤️ in NV
                </Col>
                <Col sm={8}>
                    Philippians 4:6
                </Col>
            </Grid>
        </Footer>
    </>)
}