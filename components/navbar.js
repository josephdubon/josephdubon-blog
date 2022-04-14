import Link from 'next/link'
import {Nav, Navbar} from 'rsuite'
import {forwardRef} from 'react'

export default function NavBarInstance() {

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
        <Navbar appearance='inverse'>
            <section className='mainNav'>
                <Navbar.Brand as={NavLink} href='/'>
                    JSPH/DBN ⌘
                </Navbar.Brand>
                <Nav>
                    <Nav.Item as={NavLink} href='/about'>
                        About
                    </Nav.Item>

                    <Nav.Item as={NavLink} href='/code-and-development'>
                        Code & Dev
                    </Nav.Item>

                    <Nav.Item as={NavLink} href='/live-projects'>
                        Live Projects
                    </Nav.Item>

                    <Nav.Item as={NavLink} href='/art'>
                        Art
                    </Nav.Item>
                </Nav>
                <Nav pullRight>
                    <Nav.Item href='https://github.com/josephdubon'>
                        GitHub
                    </Nav.Item>
                    <Nav.Item href='https://www.linkedin.com/in/joseph-dubon/'>
                        LinkedIn
                    </Nav.Item>
                </Nav>
            </section>
        </Navbar>
    </>)
}