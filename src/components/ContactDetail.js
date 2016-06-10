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
        console.log('will');
    }
    
    componentDidMount() {
        ContactActions.getContact(this.props.params.id);
        console.log('hello');
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
        return (
            <div>
                {this.state.conTact ? (
                    <div>
                        <p>{window.console.log(this.state.conTact)}</p>
                        <img src={this.state.conTact.image} width="150"/>
                        <h1>{this.state.conTact.name}</h1>
                        <h3>{this.state.conTact.email}</h3>
                    </div>
                
                ) : (
                    <h1>I not exists</h1>
                )}
            </div>
        );
    }
    
    
}

export
default
ContactDetailComponent;