import{Component} from "react"
import '../styles/App.css';
import { Navbar,ContactList,ChatBox} from './index';

import {addContactsOrGroupsList,updateContactGroupId,addChatsList,addGroupMembersList } from '../actions';
import { data}  from '../data';
import { StoreContext } from '../index';

 class App extends Component{

  componentDidMount() {
    this.props.store.subscribe(() => this.forceUpdate());
    this.props.store.dispatch(addContactsOrGroupsList(data.contactsOrGroupsList));
    this.props.store.dispatch(updateContactGroupId(data.contactsOrGroupsList.length));
    // this.props.store.dispatch(addChatsList(data.allUsersChatsList[0].chatsList));
  }

 render(){
    const { contactsOrGroupsList,setShowContactForm } = this.props.store.getState();
    //console.log('contactsOrGroupsList', contactsOrGroupsList);
    // console.log('chatsList', chatsList);

  return (
    <div className="App">
      <Navbar/>
      <ContactList 
        contactsOrGroupsList={contactsOrGroupsList}
        setShowContactForm={setShowContactForm}
      />
      <ChatBox/>
    </div>
  );
 }
}


class AppWrapper extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => <App store={store} />}
      </StoreContext.Consumer>
    );
  }
}

export default AppWrapper;