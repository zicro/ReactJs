import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact.css';
import {Consumer} from '../context';

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
        
        const {id,name,tel,mail} = this.props.data;

        return(
            <Consumer>
                {value=>{
                    const {dispatch} = value;
                    
                    return (
                        <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{name} 
                        <i onClick={this.showContact.bind(this, name)} className="fa fa-sort-down" style={{cursor:'pointer'}}></i>
                        <i className="fa fa-times" style={{color:'red', float:'right', cursor:'pointer'}}
                         area-hidden="true" onClick={this.onDeleteClick.bind(this, id, dispatch)}></i></h4>
                        <p class="card-text">
                            {(this.state.showContactToggle) ? (
                                <ul class="list-group">
                                    <li class="list-group-item">{tel}</li>
                                    <li class="list-group-item">{mail}</li>
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
    tel: "+212066",
    mail: "test@mail.com"
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    
}
export default Contact;