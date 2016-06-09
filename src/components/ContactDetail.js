import React from "react";
import ContactActions from "../actions/ContactAction";
import ContactStore from "../stores/ContactStore";

class ContactDetailComponent extends React.Component {
    
    constructor() {
        super();
        this.state = {
            contact: {}
        };
        this.onChange = this.onChange.bind(this);
    }
    
    componentWillMount() {
        ContactStore.addChangeListener(this.onChange);
    }
    
    componentDidMount() {
        ContactActions.getContact(this.props.params.id);
    }
    
    componentWillUnmount() {
        ContactStore.removeChangeListener(this.onChange);
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            contact: ContactActions.getContact(nextProps.params.id)
        });
    }
    
    onChange() {
        this.setState({
            contact: ContactStore.getContact(this.params.id)
        });
    }
    
    render() {
        let contact;
        if (this.state.contact) {
            contact = this.state.contact;
            return (
                <div>
                    {this.state.contact &&
                    <div>
                        <img src={contact.image} alt="images" width="150"/>
                        <h1>{contact.name}</h1>
                        <h3>{contact.email}</h3>
                    </div>
                    }
                </div>
            )
        }
    }
}

export default ContactDetailComponent;