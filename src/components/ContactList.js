import{Component} from "react";
import '../styles/contactList.css';
import {SearchBar,Contact,ContactForm} from './index';
import { StoreContext } from '..';
import {showContactForm} from '../actions/index'

//left sidebar

export  class ContactList extends Component {

  handleAddContactsBtnClick=(e)=>{
   this.props.dispatch(showContactForm(!this.props.setShowContactForm));
  }

  

  render(){
     const {contactsOrGroupsList,contactOrGroupId}=this.props;
    return(
        <div className="ContactList">
             <SearchBar/>

             <div className="contactHeading">
               <span>Conversation</span>
               <button onClick={this.handleAddContactsBtnClick}>+</button>
             </div>

             { this.props.setShowContactForm && <ContactForm 
              contactOrGroupId={contactOrGroupId}
              setShowContactForm={this.props.setShowContactForm}
              />}

             {contactsOrGroupsList.map((contactOrGroup,index) => (
              <Contact 
                contactOrGroup={contactOrGroup} 
                chatsListOfList={this.props.chatsListOfList}
                key={`contact-${index}`}
              />
            ))}
              
        </div>
    )
  }
}


export default class ContactListWrapper extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(userAndStore) => (
          <ContactList 
            dispatch={userAndStore.store.dispatch} 
            setShowContactForm={this.props.setShowContactForm}
            contactsOrGroupsList={this.props.contactsOrGroupsList}
            contactOrGroupId={userAndStore.store.getState().contactOrGroupId}
            chatsListOfList={this.props.chatsListOfList}
            />
        )}
      </StoreContext.Consumer>
    );
  }
}