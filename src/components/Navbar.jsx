import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import ThemeSwitch from './ThemeSwitch';
import useTheme from '../useTheme';

const MyNavbar = () => {
  const [theme] = useTheme(); // Extract the theme using useTheme

  return (
    <Navbar
      expand="lg"
      variant={theme === 'dark' ? 'dark' : 'light'} // Adjust Navbar variant based on theme
      className={theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} // Conditionally set the class
    >
      <Container>
        <Navbar.Brand href="#">MyLogo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={theme === 'dark' ? 'text-light' : 'text-dark'}>Home</Nav.Link>
            <Nav.Link href="#link" className={theme === 'dark' ? 'text-light' : 'text-dark'}>Link</Nav.Link>
            <NavDropdown title="Learn" id="basic-nav-dropdown" className={theme === 'dark' ? 'text-light' : 'text-dark'}>
              <NavDropdown.Item href="#action/3.1" className={theme === 'dark' ? 'text-light' : 'text-dark'}>Action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button variant={theme === 'dark' ? 'outline-light' : 'outline-dark'} className="me-2">Sign In</Button>
            <Button variant={theme === 'dark' ? 'light' : 'dark'}>Sign Up</Button>
          </Nav>
          <ThemeSwitch /> {/* Theme switcher dropdown */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
