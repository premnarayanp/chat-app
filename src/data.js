export const data={
  contactsOrGroupsList:[
    //---------1-------------------
    { 
      isGroup:false,
      contactId:1, //userId
      contactOrGroupName:'Anil',
      mobileNumber:'9893567476',  //admin mobile number or user/contact number
      profilePict:require('./assets/myPhoto.jpg'),
      lastChat:{
        text:"Hello how are you...",  
        date:"01/08/2023",
        time:"10:00 am"
      },
      group:null
    },

    //---------2-----------------
    {
      isGroup:true,
      groupId:2,
      contactOrGroupName:'Java Tr aining',
      //mobileNumber:null, 
      profilePict:require('./assets/myPhoto.jpg'),
      lastChat:{
        text:"Training schedule on 12 am...",
        date:"02/08/2023",
        time:"11:00 am"
      },
      groupAdmins:[{name:"prem",mobile:'9301511759',profilePic:require('./assets/ankit.jpg')}],
      lastActiveUser:[{name:"Anil",mobile:'9301511759',profilePic:require('./assets/ankit.jpg')}]
    },

    //----------3-------------------
    {
      isGroup:false,
      contactId:3,
      contactOrGroupName:'Akash',
      mobileNumber:'8463784838',   //admin mobile number or user/contact number
      profilePict:require('./assets/myPhoto.jpg'),
      lastChat:{
        text:"ok sir i am ready to join...",
        date:"01/08/2023",
        time:"11:00 am"
      },
      //group:null,
    },

    //-------4-----------------
    {
      isGroup:true,
      groupId:4,
      contactOrGroupName:'Full stack web',
      // mobileNumber:null, 
      profilePict:require('./assets/myPhoto.jpg'),
      lastChat:{
        text:"hello! how are yo students...?",
        date:"02/08/2023",
        time:"09:00 am"
      },
      groupAdmins:[{name:"prem",mobile:'9301511759',profilePic:require('./assets/ankit.jpg')}],
      lastActiveUser:[{name:"Anil",mobile:'9301511759',profilePic:require('./assets/ankit.jpg')}]
    }
  ],

  //==============chatLists=========================
  chatsLists:[
    //---------1-------------------
    {
      chatsId:1,
      contactOrGroupId:1,
      isMyMessage:false,
      senderName:"Anil",
      mobileNumber:'9893567476',
      senderPict:"",
      date:'31/07/2023',
      time:'03:00 PM',
      content:"How are you?",
      contentType:"text",   
    },
    {
      chatsId:2,
      contactOrGroupId:1,
      isMyMessage:true,
      senderName:"me",
      mobileNumber:'9301511759',
      senderPict:"",
      date:'31/07/2023',
      time:'03:01 PM',
      content:"i am fine?",
      contentType:"text",
    },

    //-------------2------------------------------
    {
      chatsId:3,
      contactOrGroupId:2,
      isMyMessage:false,
      senderName:"Anil",
      mobileNumber:'9893567476',
      senderPict:"",
      date:'31/07/2023',
      time:'03:00 PM',
      content:"How are you?",
      contentType:"text",
    },   
    {
      chatsId:4,
      contactOrGroupId:2,
      isMyMessage:false,
      senderName:"Anil",
      mobileNumber:'9893567476',
      senderPict:"",
      date:'31/07/2023',
      time:'03:00 PM',
      content:"How are you?",
      contentType:"text",
    },

    //---------3-------------------
    {
      chatsId:5,
      contactOrGroupId:3,
      isMyMessage:false,
      senderName:"Anil",
      mobileNumber:'9893567476',
      senderPict:"",
      date:'31/07/2023',
      time:'03:00 PM',
      content:"How are you?",
      contentType:"text",   
    },
    {
      chatsId:6,
      contactOrGroupId:3,
      isMyMessage:true,
      senderName:"me",
      mobileNumber:'9301511759',
      senderPict:"",
      date:'31/07/2023',
      time:'03:01 PM',
      content:"i am fine?",
      contentType:"text",
    },

    //---------4-------------------
    {
      chatsId:7,
      contactOrGroupId:4,
      isMyMessage:false,
      senderName:"Anil",
      mobileNumber:'9893567476',
      senderPict:"",
      date:'31/07/2023',
      time:'03:00 PM',
      content:"How are you?",
      contentType:"text",   
    },
    {
      chatsId:8,
      contactOrGroupId:4,
      isMyMessage:true,
      senderName:"me",
      mobileNumber:'9301511759',
      senderPict:"",
      date:'31/07/2023',
      time:'03:01 PM',
      content:"i am fine?",
      contentType:"text",
    },
 ],

 //====================groupMemberList===============
 groupMembersList:[
  //--------1---------------------------------
  {
    groupId:2,
    members:[
      {
        contactName:'Anil',
        mobileNumber:'9893567476',
        profilePict:'',
      },
      {
        contactName:'Anil',
        mobileNumber:'9893567476',
        profilePict:'',
      },
      {
        contactName:'Anil',
        mobileNumber:'9893567476',
        profilePict:'',
      },
    ]
  },

   //--------2---------------------------------
   {
    groupId:4,
    members:[
      {
        contactName:'Anil',
        mobileNumber:'9893567476',
        profilePict:'',
      },
      {
        contactName:'Anil',
        mobileNumber:'9893567476',
        profilePict:'',
      },
      {
        contactName:'Anil',
        mobileNumber:'9893567476',
        profilePict:'',
      },
    ]
  },
 ]

}