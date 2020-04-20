import React, { Component } from 'react'
import axios from 'axios';
const Context = React.createContext();
const reducer = (state, action) =>{
    switch (action.type) {
        case 'DELETE_CONTACT':
            return{
                contacts: state.contacts.filter((contact)=> contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return{
                // ...state.contacts / permet de recuperer tous les objects qui se trouve 
                // dans state contacts
                //* action.payload : permet de ajouter le dernier element saisie
                contacts: [action.payload, ...state.contacts]
            };
        case 'EDIT_CONTACT':
                return{
                    // on parcouris la liste des contact qui est stocker dans la state Contacts
                    // avec la function map() qui permet de boucler, est a chaque fois
                    // elle recupere une ligne de contact
                    // si le id du contact recuperer par la boucle == id modifier, qu'on a 
                    // acces a lui via la method action.payload.id donc 
                    // on remplace les donnes par les nouveaux qui sont modifier
                    //* cette methode pour la mise a jour local des contacts */
                    contacts: state.contacts.map(
                        contact => contact.id === action.payload.id ? contact = action.payload : contact )
                };    
        default:
           return state;
    }
}

export  class Provider extends Component {

        //ON peut recuperer les donnes a partir du DB ici
        state = {
            contacts:[
                {id:1, name:"omar", phone:"+21265558", email:"larhnimi@git.net"},
                {id:2, name:"maro", phone:"+21266666", email:"larhnimi@git.net"},
                {id:3, name:"ramo", phone:"+21264444", email:"larhnimi@git.net"}
            ],
            dispatch: action => this.setState(state =>reducer(state, action))
        }

        
        // get date from json file on load du component
        //Method 1 : start
        // componentWillMount(){
        //      axios.get('https://jsonplaceholder.typicode.com/users')
        //           .then(res => this.setState({
        //              contacts: res.data
        //            }))
        //           .catch(err => console.error(err));
        //         }
        //Method 1 : End
        /**
         * //Method 2 : using async & Await Mode 
         */
        async componentDidMount(){
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')

            this.setState({
                    contacts: res.data
                 })
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
