import React from "react";
import {Router, Route, IndexRoute} from "react-router";
import Index from "./components/Index";
import App from "./components/App";
import ContactDetail from "./components/ContactDetail";
// import ContactDetail from "./components/ContactDetail";

class Root extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Index}/>
                    <Route path="/contact/:id" component={ContactDetail}/>
                </Route>
            </Router>
        )
    }
}

export default Root;