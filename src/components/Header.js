import React from "react";
import {Nav, Navbar, NavItem, Header, Brand} from "react-bootstrap";
import AuthActions from "../actions/AuthActions";
import AuthStore from "../stores/AuthStore";

class HeaderComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            authenticated: AuthStore.isAuthenticated()
        };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    
    login() {
        this.props.lock.show((err, profile, token)=> {
            if (err) {
                alert(err);
                return null;
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
                    {!this.state.authenticated ? (
                        <NavItem onClick={this.login}>Login</NavItem>
                    ) : (
                        <NavItem onClick={this.logout}>Logout</NavItem>
                    )}
                </Nav>
            </Navbar>
        )
    }
}

export default HeaderComponent;