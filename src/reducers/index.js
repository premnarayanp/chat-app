import {
  ADD_CONTACTS_GROUPS_LIST,
  ADD_CONTACT_GROUP_TO_LIST,
  ADD_CHATS_LIST,
  ADD_CHAT_TO_LIST,
  ADD_GROUP_MEMBERS_LIST,
  ADD_GROUP_MEMBERS_TO_LIST,
  SHOW_CONTACT_FORM,
  SHOW_GROUP_FORM,
  UPDATE_CONTACT_GROUP_ID,
  UPDATE_CHAT_ID
} from '../actions';

// import { combineReducers } from 'redux';

const initialChattingState = {
  contactsOrGroupsList: [],
  chatsList: [],
  groupMembersList: [],
  setShowContactForm:false,
  setShowGroupForm:false,
  contactOrGroupId:0,
  chatId:0,
};

export default function chatting(state = initialChattingState, action) {
  // fetch chats/contacts-groups/groupMembers and save in store

  switch (action.type) {
    case ADD_CONTACTS_GROUPS_LIST:
      return {
        ...state,
        contactsOrGroupsList: action.contactsOrGroupsList,
      }; 


    case ADD_CONTACT_GROUP_TO_LIST:
      return {
        ...state,
        contactsOrGroupsList: [action.contactOrGroup, ...state.contactsOrGroupsList],
      };


    case ADD_CHATS_LIST:
      return {
        ...state,
        chatsList: action.chatsList,
      };


    case ADD_CHAT_TO_LIST:
      return {
        ...state,
        chatsList: [action.chat, ...state.chatsList],
      };


    case ADD_GROUP_MEMBERS_LIST:
      return {
        ...state,
        groupMembersList: action.groupMembersList,
      }; 


    case ADD_GROUP_MEMBERS_TO_LIST:
      return {
          ...state,
          groupMembersList: [...action.groupMembers, ...state.groupMembersList],
      };

    case SHOW_CONTACT_FORM:
      return {
        ...state,
        setShowContactForm: action.val,
      };

    case SHOW_GROUP_FORM:
      return {
        ...state,
        setShowGroupForm: action.val,
      };

    case UPDATE_CONTACT_GROUP_ID:
      return{
        ...state,
        contactOrGroupId:action.val
      }

    case UPDATE_CHAT_ID:
      return{
        ...state,
        chatId:action.val
      }  

    default:
      return state;
  }
}

// export default combineReducers({
// });
