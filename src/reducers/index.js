import {
  ADD_CONTACTS_GROUPS_LIST,
  ADD_CONTACT_GROUP_TO_LIST,
  ADD_CHATS_LIST,
  ADD_CHAT_TO_LIST,
  ADD_GROUP_MEMBERS_LIST,
  ADD_GROUP_MEMBERS_TO_LIST,
  // SET_SHOW_HOVERING,
} from '../actions';

// import { combineReducers } from 'redux';

const initialChattingState = {
  contactsOrGroupsList: [],
  chatsList: [],
  groupMembersList: [],
  // setShowHovering:false
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

    // case SET_SHOW_HOVERING:
    //   return {
    //     ...state,
    //     setShowHovering: action.val,
    //   };
    
    default:
      return state;
  }
}

// export default combineReducers({
// });
