import React, { Component } from 'react';
import {Consumer} from '../context';
import TextInputGroup from '../helpers/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
    state = {   name:'',
                email:'',
                phone:'',
                errors: []
            }
    
    // pour l'affichage des donnes du contact qu'on a l'id passer dans URL
    // recuperer les donnes du contact a Modifier, on se pasant sur le
    // id qui est  passer par le lien URL (/contact/id/1)
    async componentDidMount(){
        // on recupere le id from the URL
        const id = this.props.match.params.id;
        // From the APi, we use axios and get the inforamtion about user with ID
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        this.setState({
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone
        });

    }


    onChangeInput = (e) => this.setState({[e.target.name]: e.target.value});
    submit = async (dispatch, size, e) =>{
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

            // get the data from the Formulaire and set it to newContact
            const updtContact = {
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email
            }

            // insertion des donnes via l'API using Axios library
            /**
             * Methode 1 : 
             */
            // axios.put('https://jsonplaceholder.typicode.com/users', updtContact)
            //      .then(res => dispatch({
            //         type: 'EDIT_CONTACT',
            //         payload: res.data
            //         }))


            /** 
             * Methode 2 :
             */
            // get the ID of the Contact that will be updated
            const id = this.props.match.params.id;
            try {
                const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updtContact)
                
                dispatch({
                    type: 'EDIT_CONTACT',
                    payload: res.data
                })
            } catch (error) {
                console.log(error)
            }
            
            
            // apres l'insertion des donnes on vide les champs
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
                                    <h4 className="card-title">Edit Contact</h4>
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
                                        
                                            
                                        <button className="btn btn-primary btn-block">Update Contact</button>
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

export default  EditContact;