import {Link} from 'react-router-dom';
import {Button, Nav, Navbar, Dropdown} from 'react-bootstrap';
import {BsGithub, RiQuestionnaireLine, BsLadder, TiPlusOutline, AiOutlineUser} from 'react-icons/all';
import {connect} from "react-redux";
import {Component} from "react";
import {setAuthedUserActionCreator} from "../state/authedUser/authedUserActions";


class  Navigation extends Component{
    render() {
        console.log(this.props);
        return (
            <div>
                <Navbar sticky='top' bg='dark' variant='dark'>
                    <Navbar.Brand as={Link} to='/' style={{marginLeft: 20}}> <RiQuestionnaireLine
                        style={{marginRight: 5}}/> Would you rather</Navbar.Brand>
                    <Nav className='me-auto'>
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
                    {this.props.loggedIn ?
                        <Nav>
                            <Nav.Link className="justify-content-end" as={Button} variant='outline-dark' style={{marginRight: 20}} onClick={e => this.logout(e)}> <AiOutlineUser
                                style={{marginRight: 5}}/> Logout {this.props.authedUser}
                            </Nav.Link>
                        </Nav>
                        :
                        <Nav>
                            <Nav.Link className="justify-content-end" as={Button} variant='outline-dark' style={{marginRight: 20}}> <AiOutlineUser
                                style={{marginRight: 5}}/> Login
                            </Nav.Link>
                        </Nav>
                    }
                </Navbar>

            </div>
        );
    }

    logout(e) {
        e.preventDefault();
        this.props.dispatch(setAuthedUserActionCreator(null))
    }
}

function mapStoreToProps({authedUser}) {
    return {
        loggedIn: authedUser !== null,
        authedUser

    }
}

export default connect(mapStoreToProps)(Navigation);