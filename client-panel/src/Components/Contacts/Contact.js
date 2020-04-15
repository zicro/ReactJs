import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact.css';
import {Consumer} from '../context';
import axios from 'axios'; 
 class Contact extends Component {
     state = {
         showContactToggle: false
     }

     showContact(Msg){
        //console.log('salam', Msg);
        this.setState({
            showContactToggle: !this.state.showContactToggle
        });
     }
     onDeleteClick = (id, dispatch) => {

         dispatch({
             type: 'DELETE_CONTACT',
             payload: id
         })
     }
    render() {
        
        const {id,name,phone,email} = this.props.data;

        return(
            <Consumer>
                {value=>{
                    const {dispatch} = value;
                    
                    return (
                        <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{name} 
                        <i onClick={this.showContact.bind(this, name)} className="fa fa-sort-down" style={{cursor:'pointer'}}></i>
                        <i className="fa fa-times" style={{color:'red', float:'right', cursor:'pointer'}}
                         area-hidden="true" onClick={this.onDeleteClick.bind(this, id, dispatch)}></i></h4>
                        <p className="card-text">
                            {(this.state.showContactToggle) ? (
                                <ul className="list-group">
                                    <li className="list-group-item">{phone}</li>
                                    <li className="list-group-item">{email}</li>
                                </ul>
                            ) : null}
                            
                        </p>
                       
                    </div>
                </div>
                    )
                
                }}
            </Consumer>
        )
    }
}

Contact.defaultProps = {
    name: "My name",
    phone: "+212066",
    email: "test@mail.com"
}

Contact.propTypes = {
    contact: PropTypes.object,
    
}
export default Contact;