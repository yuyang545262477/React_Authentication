import React from "react";
import AuthStore from "../stores/AuthStore";
class IndexComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            authenticated: AuthStore.isAuthenticated()
        }
    }
    
    render() {
        return (
            <div>
                {!this.state.authenticated ? (
                    <h2>Log In to View Contact Details</h2>
                ) : (
                    <h2> Click on a contact to view their profile</h2>
                )}
            </div>
        )
    }
}

export default IndexComponent;