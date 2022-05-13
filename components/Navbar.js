import Link from 'next/link'
import {Button, List, Modal, Nav, Navbar} from 'rsuite'
import {forwardRef, useState} from 'react'

export default function NavBarInstance() {
    // set state
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

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

                    <Nav.Item as={NavLink} href='/posts'>
                        Posts
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
                    <Nav.Item onClick={handleOpen} href='#'>
                        Contact Card
                    </Nav.Item>
                    <Nav.Item href='https://github.com/josephdubon'>
                        GitHub
                    </Nav.Item>
                    <Nav.Item href='https://americoders.org'>
                        Americoders
                    </Nav.Item>
                </Nav>
            </section>
        </Navbar>

        {/* Section - modal - content */}
        <Modal open={open} onClose={handleClose}>
            <Modal.Header>
                <Modal.Title>Contact Card</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <List bordered hover>
                    <List.Item>Name: Joseph Dubon</List.Item>
                    <List.Item>Title: Full-Stack Software Engineer</List.Item>
                    <List.Item>Email: <a
                        href='mailto:jd@josephdubon.com'>jd@josephdubon.com</a></List.Item>
                    <List.Item>Company: <a href='https://americoders.org'>Americoders, LLC</a></List.Item>
                </List>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} appearance='primary'>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>)
}