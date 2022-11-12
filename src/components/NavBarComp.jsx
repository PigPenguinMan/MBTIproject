import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import DataContext from '../Context/DataContext';
import { useEffect } from 'react';
const NavBarComp = () => {
    const [login , setLogin] = useState(true);
    const data = useContext(DataContext);
    const navigate = useNavigate();

    useEffect(()=>{
        setLogin(data.state.user ? true : false)
    },[data.state.user])


    const logOut = () => {
        setLogin(false)
        data.action.setUser(null);
        navigate('/');
    }

    return (
        <div className='GNb'>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">로고</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">메뉴1</Nav.Link>
                        <Nav.Link href="#features">메뉴2</Nav.Link>
                        <Nav.Link href="#pricing">메뉴3</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        {login ? (
                            <Nav>
                            <NavLink className='nav-link' to='/mypage'>
                                {data.state.user.name}님의 MyPage
                            </NavLink>
                            <Button variant="outline-dark" onClick={logOut}>LogOut</Button>{' '}
                            </Nav>
                        ):(
                            <div>
                            <Button variant="outline-dark" onClick={()=>{navigate('/loginform')}}>Login</Button>{' '}
                                
                            </div>
                        )
                        }
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBarComp;