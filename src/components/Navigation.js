import {Link} from 'react-router-dom';
import {Button, Nav, Navbar} from 'react-bootstrap';
import {AiOutlineHome, BsGithub, RiQuestionnaireLine, BsLadder, TiPlusOutline, AiOutlineUser} from 'react-icons/all';
import {connect} from "react-redux";
import {Component} from "react";


class  Navigation extends Component{
    render() {
        console.log(this.props);
        return (
            <div>
                <Navbar sticky='top' bg='dark' variant='dark'>
                    <Navbar.Brand as={Link} to='/' style={{marginLeft: 20}}> <RiQuestionnaireLine
                        style={{marginRight: 5}}/> Would you rather</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to='/' style={{marginLeft: 20}}> <AiOutlineHome
                            style={{marginRight: 5}}/> Home </Nav.Link>
                        <Nav.Link as={Link} to='/leaderboard' style={{marginLeft: 20}}> <BsLadder
                            style={{marginRight: 5}}/> Leaderboard
                        </Nav.Link>
                        <Nav.Link as={Link} to='/new' style={{marginLeft: 20}}> <TiPlusOutline
                            style={{marginRight: 5}}/> New Question
                        </Nav.Link>
                        <Nav.Link as={Button} variant='outline-dark' style={{marginLeft: 20}}
                                  onClick={() => window.window.open('https://github.com/4w0k3n/reactnd-project-would-you-rather-starter', '_blank')}>
                            <BsGithub style={{marginRight: 5}}/> GitHub
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="justify-content-end" as={Button} variant='outline-dark' style={{marginRight: 20}}> <AiOutlineUser
                            style={{marginRight: 5}}/> hello
                        </Nav.Link>
                    </Nav>
                </Navbar>

            </div>
        );
    }

}

function mapStoreToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStoreToProps)(Navigation);