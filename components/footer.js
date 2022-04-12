import {Divider, FlexboxGrid, Footer} from 'rsuite'
import Link from 'next/link'

export default function FooterHome() {
    return (<>
        <Footer>
            <Divider>thanks for visiting</Divider>
            <FlexboxGrid className='flexRowEvenly'>
                <FlexboxGrid.Item colspan={6}>
                    © {new Date().getFullYear()}
                    <Link href='/'><a>
                        {' '} Joseph Adonay Dubon
                    </a></Link>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={6}>
                    Built in Reno, NV with a lot of ❤️
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={6}>
                    Philippians 4:6
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </Footer>
    </>)
}