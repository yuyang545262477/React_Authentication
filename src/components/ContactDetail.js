import React from "react";
import ContactActions from "../actions/ContactAction";
import ContactStore from "../stores/ContactStore";

class ContactDetailComponent extends React.Component {
    
    constructor() {
        super();
        this.state = {
            conTact: {}
        };
        this.onChange = this.onChange.bind(this);
    }
    
    componentWillMount() {
        ContactStore.addChangeListener(this.onChange);
    }
    
    componentDidMount() {
        ContactActions.getContact(this.props.params.id);
        // this.setState({
        //     contact: ContactStore.getContact(this.props.params.id)
        // });
        // let contact;
        // if (this.state.contact) {
        //     contact = this.state.contact[0];
        // }
        //
    }
    
    componentWillUnmount() {
        ContactStore.removeChangeListener(this.onChange);
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            conTact: ContactActions.getContact(nextProps.params.id)
        });
    }
    
    onChange() {
        this.setState({
            conTact: ContactStore.getContact(this.props.params.id)
        });
    }
    
    render() {
        let contact = this.state.conTact;
        return (
            <div>
                { this.state.conTact &&
                <div>
                    <img src={contact[0].image} width="150"/>
                    <h1>{contact.name}</h1>
                    <h3>{contact.email}</h3>
                </div>
                }
            </div>
        );
    }
    
    
}

export
default
ContactDetailComponent;