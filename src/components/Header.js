import React from "react";
import {Nav, Navbar, NavItem, Header, Brand} from "react-bootstrap";
import AuthActions from "../actions/AuthActions";

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    
    login() {
        this.props.lock.show((err, profile, token)=> {
            if (err) {
                return alert(err);
            }
            AuthActions.logUserIn(profile, token);
            this.setState({authenticated: true});
        });
    }
    
    logout() {
        AuthActions.logUserOut();
        this.setState({authenticated: false});
    }
    
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React Contacts</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem onClick={this.login}>Login</NavItem>
                    <NavItem onClick={this.logout}>Logout</NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default HeaderComponent;