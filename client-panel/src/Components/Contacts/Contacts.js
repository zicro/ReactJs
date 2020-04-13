import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

class Contacts extends Component {


    deleteContact(id){
        const {contacts} = this.state;
        // ici on recupere la liste des client except the ligne with thE ID THAT is in param
        const newLineContacts = contacts.filter((contact) => contact.id !== id)
        // mise a jour du State
        this.setState({
            contacts: newLineContacts
        })
    }
    render() {

        return (
            <Consumer>
                {value => (
                    <div>
                    {value.contacts.map((contact)=>(
                        <Contact key={contact.id} data={contact}
                        deleteContactFromChild={this.deleteContact.bind(this, contact.id)} />
                    ))}
                </div>
                )}
            </Consumer>
        )

    }
}

export default Contacts;