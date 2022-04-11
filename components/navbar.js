import Link from 'next/link'
import {Nav, Navbar} from 'rsuite'
import {forwardRef} from 'react'

export default function NavBarInstance({onSelect, activeKey}) {

    // There are some navigation components in the rsuite component, such as Dropdown, Nav, Breadcrumb,
    // which are used in conjunction with the Link component of Next.js to use the as prop.
    // https://rsuitejs.com/guide/use-next-app/
    const NavLink = forwardRef((props, ref) => {
        const {as, href, ...rest} = props
        return (
            <Link href={href} as={as}>
                <a ref={ref} {...rest} />
            </Link>
        )
    })

    return (<>
        <Navbar>
            <Navbar.Brand>
                <Link href='/'><a>JSPH/DBN</a></Link>
            </Navbar.Brand>

            <Nav>

                <Nav.Item as={NavLink} href='/posts/posts-list'>
                    Posts
                </Nav.Item>

                <Nav.Item as={NavLink} href='/code'>
                    Code
                </Nav.Item>

                <Nav.Item as={NavLink} href='/art'>
                    Art
                </Nav.Item>

                <Nav.Item as={NavLink} href='/about'>
                    About
                </Nav.Item>
            </Nav>
        </Navbar>
    </>)
}