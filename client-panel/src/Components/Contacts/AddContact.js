import React, { Component } from 'react';
import {Consumer} from '../context';
import TextInputGroup from '../helpers/TextInputGroup';

class AddContact extends Component {
    state = {   name:'',
                email:'',
                phone:'',
                errors: []
            }
    onChangeInput = (e) => this.setState({[e.target.name]: e.target.value});
    submit = (dispatch, size, e) =>{
            e.preventDefault();

            if (this.state.name == "") {
                this.setState({errors: {name: "The name is empty."}})
                return;
            }

            if (this.state.email == "") {
                this.setState({errors: {email: "The email is empty."}})
                return;
            }

            if (this.state.phone == "") {
                this.setState({errors: {phone: "The phone is empty."}})
                return;
            }

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
                    phone:'',
                    errors: {}
                })

                // apres l'ajout rederection vers la page Accueil
                this.props.history.push('/');
    }
    render() {
        const {name,email,phone, errors} = this.state;

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
                                            error={errors.name}
                                         />
                                         <TextInputGroup 
                                            label="Email" 
                                            name="email" 
                                            type="email" 
                                            value={email}
                                            onChange={this.onChangeInput}
                                            error={errors.email}
                                         />
                                         <TextInputGroup 
                                            label="Phone" 
                                            name="phone" 
                                            type="text" 
                                            value={phone}
                                            onChange={this.onChangeInput}
                                            error={errors.phone}
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