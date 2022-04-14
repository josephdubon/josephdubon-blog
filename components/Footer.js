import {Divider, FlexboxGrid, Footer} from 'rsuite'
import Link from 'next/link'

export default function FooterHome() {
    return (<>
        <Footer>
            <Divider>thanks for visiting</Divider>
            <FlexboxGrid className='flexRowEvenly'>
                <FlexboxGrid.Item colspan={6}>
                    <Link href='/'><a>JSPH/DBN
                    </a></Link>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={6}>
                    © {new Date().getFullYear()}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={6}>
                    Philippians 4:6
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </Footer>
    </>)
}