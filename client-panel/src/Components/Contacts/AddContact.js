import React, { Component } from 'react';
import {Consumer} from '../context';

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
                                        <div className="form-group">
                                            <label htmlFor="">Name</label>
                                            <input type="text" className="form-control" defaultValue={name}
                                            onChange={this.onChangeInput} name="name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Email</label>
                                            <input type="text" className="form-control" defaultValue={email}
                                            onChange={this.onChangeInput} name="email" />
                                        </div> 
                                        <div className="form-group">
                                            <label htmlFor="">Phone</label>
                                            <input type="text" className="form-control" defaultValue={phone}
                                            onChange={this.onChangeInput} name="phone" />
                                        </div>     
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