import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/Logo.png';
import { FcBusinessman } from "react-icons/fc";

const Header = ()=>{
    return(
        <>
          <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand style={{fontFamily:'Akaya Kanadaka'}}>
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            JustCode
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <FcBusinessman size="20"/>{''}<a href="https://www.linkedin.com/in/aakash-kasturiya/">Aakash Kasturiya</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    )
}

export default Header;