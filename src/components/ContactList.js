import{Component} from "react";
import '../styles/contactList.css';
import {SearchBar,Contact} from './index';
//left sidebar
export default class ContactList extends Component {
  render(){
     const {contactList}=this.props;
    console.log("contactList=",contactList);
    return(
        <div className="ContactList">
             <SearchBar/>
             <div className="contactHeading">
               <span>Conversation</span>
               <button>+</button>
             </div>

             {contactList.map((contactOrGroup,index) => (
              <Contact 
                contactOrGroup={contactOrGroup} 
                key={`contact-${index}`}
              />
            ))}
              
        </div>
    )
  }
}