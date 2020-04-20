import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact.css';
import {Consumer} from '../context';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
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
     onDeleteClick =  async (id, dispatch) => {
        /**
         * Methode 1 : 
         */
        // axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
        //      .then(res =>dispatch({
        //         type: 'DELETE_CONTACT',
        //         payload: id
        //     }))
        //     .catch(err => console.error(err));


        /**
         * Methode 2 : 
         */
        try {
             const res = await axios.delete('https://jsonplaceholder.typicode.com/users/'+id) 
             dispatch({
                type: 'DELETE_CONTACT',
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
       

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
                         area-hidden="true" onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
                         
                         <Link to={`/contact/edit/${id}`}>
                            <i className="fa fa-pencil" style={{color:'gray', float:'right',
                             cursor:'pointer', marginRight:'0.3em'}}
                            area-hidden="true" ></i>
                         </Link>
                         
                         </h4>
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