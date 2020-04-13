import React, { Component } from 'react'

class AddContact extends Component {
    state = {   name:'',
                email:'',
                phone:''}
    render() {
        const {name,email,phone} = this.state;
        return (
            <div>
                <div class="card">
                   
                    <div class="card-body">
                        <h4 class="card-title">Add Contact</h4>
                        <div class="card-text">
                            <div className="form-group">
                                <label htmlFor="">Name</label>
                                <input type="text" className="form-control" defaultValue={name} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="text" className="form-control" defaultValue={email} />
                            </div> 
                            <div className="form-group">
                                <label htmlFor="">Phone</label>
                                <input type="text" className="form-control" defaultValue={phone} />
                            </div>     
                            <button className="btn btn-success btn-block">Add New Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default  AddContact;