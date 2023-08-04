import{Component} from "react"
import '../styles/groupForm.css';
import { StoreContext } from '..';
import {addContactOrGroupToList,showGroupForm,updateContactGroupId} from '../actions/index';

 class GroupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName:"",
    };
  }

  addGroupInList=(e)=>{
   //e.preventDefault();
    const initialGroup={ 
      isGroup:true,
      contactOrGroupId:0,
      contactOrGroupName:'',
      profilePict:require('../assets/myPhoto.jpg'),
      lastChat:{
        text:"",
        date:"",
        time:""
      },
      groupAdmins:[],
      lastActiveUser:{}
    };

    initialGroup.contactOrGroupName=this.state.groupName;
    initialGroup.groupAdmins[0]=this.props.user;
    initialGroup.lastActiveUser[0]=this.props.user;
    initialGroup.contactOrGroupId=this.props.contactOrGroupId+1;

    //console.log("initialContact=",initialContact);
    this.props.dispatch(addContactOrGroupToList(initialGroup));
    this.props.dispatch(updateContactGroupId(this.props.contactOrGroupId+1));
    this.props.dispatch(showGroupForm(!this.props.setShowGroupForm));
  }

  render(){
    return(
      <form  className="GroupForm">
      <span className="groupFormHeader">Create Group</span>

      <div className="field">
        <input
          placeholder="Enter Name"
          type="text"
          required
          value={this.state.groupName}
          onChange={(e) => this.setState({groupName:e.target.value})}
        />

        <input
          placeholder="Group Admin"
          type="text"
          required
          value={this.props.user.name}
        />

      </div>
      <div className="field">
        <input
          placeholder="Mobile"
          type="number"
          value={this.props.user.mobile}
        />
      </div>

  
      <div className="field">
        <button  onClick={(e) => this.addGroupInList()}>Create</button>
      </div>
    </form>
    )
  }
}

export default class GroupFormWrapper extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(userAndStore) => (
          <GroupForm 
            dispatch={userAndStore.store.dispatch} 
            contactOrGroupId={userAndStore.store.getState().contactOrGroupId}
            setShowGroupForm={this.props.setShowGroupForm}
            user={userAndStore.user}
            />
        )}
      </StoreContext.Consumer>
    );
  }
}