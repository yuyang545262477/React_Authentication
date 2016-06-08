import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import {Grid, Row, Col} from "react-bootstrap";


class AppComponent extends React.Component {
    
    componentWillMount() {
        this.lock = new Auth0Lock('NSkUrK2p488SsmzIJYnxSeoETgwEUMoS', 'ttotts.auth0.com');
    }
    
    render() {
        return (
            <div>
                <Header lock={this.lock}></Header>
                <Grid>
                    <Row>
                        <Col xs={12} md={3}>
                            <SideBar/>
                        </Col>
                        <Col xs={12} md={9}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
