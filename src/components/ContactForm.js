import{Component} from "react"
import '../styles/contactForm.css';
import { StoreContext } from '..';

import {
  addContactOrGroupToList,
  showContactForm,
  updateContactGroupId,
  addCurrentContactOrGroup,
  addChatsListToList,
  addCurrentChatsList
} from '../actions/index';

 class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactName:"",
      mobileNum:"",
    };
  }

  // add new  contacts in your  contactList 
  addContactsInList=()=>{

    const initialContact={ 
      isGroup:false,
      contactOrGroupId:0,
      contactOrGroupName:'',
      mobileNumber:'',  
      profilePict:require('../assets/myPhoto.jpg'),
      lastChat:{
        text:"",
        date:"",
        time:""
      },
      group:null
    };
    
    //replace contacts details in this.that type in input box
    initialContact.contactOrGroupName=this.state.contactName;
    initialContact.mobileNumber=this.state.mobileNum;
    initialContact.contactOrGroupId=this.props.contactOrGroupId+1;

    //create chatList in chatsListOfList for particular new  contact or group,that you want create
    const initialChatList={
      contactOrGroupId:this.props.contactOrGroupId+1,
      chatsLists:[],
   }

    //console.log("initialContact=",initialContact);
    this.props.dispatch(addContactOrGroupToList(initialContact));
    this.props.dispatch(addCurrentContactOrGroup(initialContact));
    
    //update/create chatsListToList or currentChatsList
    this.props.dispatch(addChatsListToList(initialChatList));
    this.props.dispatch(addCurrentChatsList([]));

    this.props.dispatch(updateContactGroupId(this.props.contactOrGroupId+1));
    this.props.dispatch(showContactForm(!this.props.setShowContactForm));
  }

  render(){
    return(
      <div  className="ContactForm">

      <span className="contactFormHeader"> Add Contact</span>

      <div className="field">
        <input
          placeholder="Enter Name"
          type="text"
          required
          value={this.state.contactName}
          onChange={(e) => this.setState({contactName:e.target.value})}
        />

      </div>
      <div className="field">
        <input
          placeholder="Enter MobileNum"
          type="number"
          value={this.state.mobileNum}
          onChange={(e) => this.setState({mobileNum:e.target.value})}
        />
      </div>

  
      <div className="field">
        <button id="add_contact_btn" onClick={() => this.addContactsInList()}>Add</button>
      </div>
    </div>
    )
  }
}

export default class ContactFormWrapper extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(userAndStore) => (
          <ContactForm 
            dispatch={userAndStore.store.dispatch} 
            contactOrGroupId={userAndStore.store.getState().contactOrGroupId}
            setShowContactForm={this.props.setShowContactForm}
            />
        )}
      </StoreContext.Consumer>
    );
  }
}