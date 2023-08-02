// action types
export const ADD_CONTACTS_GROUPS_LIST = 'ADD_CONTACTS_GROUPS_LIST';
export const ADD_CONTACT_GROUP_TO_LIST = 'ADD_CONTACT_GROUP_TO_LIST';

export const ADD_CHATS_LIST = 'ADD_CHATS_LIST';
export const ADD_CHAT_TO_LIST = 'ADD_CHAT_TO_LIST';

export const ADD_GROUP_MEMBERS_LIST = 'ADD_GROUP_MEMBERS_LIST'; 
export const ADD_GROUP_MEMBERS_TO_LIST = 'ADD_GROUP_MEMBERS_TO_LIST'; 

// export const SET_SHOW_HOVERING = 'SET_SHOW_HOVERING';

// action creators
export function addContactsOrGroupsList(contactsOrGroupsList) {
  return {
    type: ADD_CONTACTS_GROUPS_LIST,
    contactsOrGroupsList,
  };
}

export function addContactOrGroupToList(contactOrGroup) {
  return {
    type: ADD_CONTACT_GROUP_TO_LIST,
    contactOrGroup, 
  };
}

export function addChatsList(chatsList) {
  return {
    type: ADD_CHATS_LIST,
    chatsList,
  };
}

export function addChatToList(chat) {
  return {
    type: ADD_CHAT_TO_LIST,
    chat,
  };
}

export function addGroupMembersList(groupMembersList) {
  return {
    type: ADD_GROUP_MEMBERS_LIST,
    groupMembersList,
  };
}


export function addGroupMembersToList(groupMembers) {
  return {
    type: ADD_GROUP_MEMBERS_TO_LIST,
    groupMembers,
  };
}

// export function setShowHoveringEffects(val) {
//   return {
//     type: SET_SHOW_HOVERING,
//     val,
//   };
// }

