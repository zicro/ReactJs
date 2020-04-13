import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) =>{
    switch (action.type) {
        case 'DELETE_CONTACT':
            return{
                contacts: state.contacts.filter((contact)=> contact.id !== action.payload)
            };
    
        default:
           return state;
    }
}

export  class Provider extends Component {

        //ON peut recuperer les donnes a partir du DB ici
        state = {
            contacts:[
                {id:1, name:"omar", tel:"+21265558", mail:"larhnimi@git.net"},
                {id:2, name:"maro", tel:"+21266666", mail:"larhnimi@git.net"},
                {id:3, name:"ramo", tel:"+21264444", mail:"larhnimi@git.net"}
            ],
            dispatch: action => this.setState(state =>reducer(state, action))
        }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

// il ne sera utile pour consomer les states (les donnes)
// qui appartient a ce context
export const Consumer = Context.Consumer;
