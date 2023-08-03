import{Component} from "react"
import '../styles/contactForm.css';
import { StoreContext } from '..';
import {addContactOrGroupToList,showContactForm,updateContactGroupId} from '../actions/index';

 class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactName:"",
      mobileNum:"",
    };
  }

  addContactsInList=()=>{

    const initialContact={ 
      isGroup:false,
      contactORGroupId:0,
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

    initialContact.contactOrGroupName=this.state.contactName;
    initialContact.mobileNumber=this.state.mobileNum;
    initialContact.contactORGroupId=this.props.contactOrGroupId+1;

    //console.log("initialContact=",initialContact);
    this.props.dispatch(addContactOrGroupToList(initialContact));
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
        {(store) => (
          <ContactForm 
            dispatch={store.dispatch} 
            contactOrGroupId={store.getState().contactOrGroupId}
            setShowContactForm={this.props.setShowContactForm}
            />
        )}
      </StoreContext.Consumer>
    );
  }
}