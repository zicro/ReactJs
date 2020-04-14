import React, { Component } from 'react';
import {Consumer} from '../context';
import TextInputGroup from '../helpers/TextInputGroup';

class AddContact extends Component {
    state = {   name:'',
                email:'',
                phone:''}
    onChangeInput = (e) => this.setState({[e.target.name]: e.target.value});
    submit = (dispatch, size, e) =>{
            e.preventDefault();

            dispatch({
            type: 'ADD_CONTACT',
            payload: {
                id: size+1,
                name: this.state.name,
                tel: this.state.phone,
                mail: this.state.email
                
            }
            })

            this.setState({   
                    name:'',
                    email:'',
                    phone:''})
    }
    render() {
        const {name,email,phone} = this.state;

        return(
            <Consumer>
                {value=>{
                    const {dispatch} = value;
                    return (
                        <div>
                            <form onSubmit={this.submit.bind(this, dispatch, value.contacts.length)}>
                            <div className="card">
                                
                                <div className="card-body">
                                    <h4 className="card-title">Add Contact</h4>
                                    <div className="card-text">
                                        <TextInputGroup 
                                            label="Name" 
                                            name="name" 
                                            type="text" 
                                            value={name}
                                            onChange={this.onChangeInput}
                                         />
                                         <TextInputGroup 
                                            label="Email" 
                                            name="email" 
                                            type="email" 
                                            value={email}
                                            onChange={this.onChangeInput}
                                         />
                                         <TextInputGroup 
                                            label="Phone" 
                                            name="phone" 
                                            type="text" 
                                            value={phone}
                                            onChange={this.onChangeInput}
                                         />
                                        
                                            
                                        <button className="btn btn-success btn-block">Add New Contact</button>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    ) 
                }}
            </Consumer>
        )

    }
}

export default  AddContact;