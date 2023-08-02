export const data={
  contactsOrGroupsList:[
    //---------1-------------------
    { 
      isGroup:false,
      contactOrGroupName:'Anil',
      mobileNumber:'9893567476',   //admin mobile number or user/contact number
      profilePict:require('./assets/myPhoto.jpg'),
      contactORGroupId:1,
      chatsId:1,
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
      contactOrGroupName:'Java Training',
      mobileNumber:null, 
      profilePict:require('./assets/myPhoto.jpg'),
      contactORGroupId:2,
      chatsId:2,
      lastChat:{
        text:"Training schedule on 12 am...",
        date:"02/08/2023",
        time:"11:00 am"
      },
      group:{
        groupAdmins:[{name:"prem",mobile:'9301511759'}],
        lastActiveUser:[{name:"Anil",profilePic:require('./assets/ankit.jpg')}]
      }
    },

    //----------3-------------------
    {
      isGroup:false,
      contactOrGroupName:'Akash',
      mobileNumber:'8463784838',   //admin mobile number or user/contact number
      profilePict:require('./assets/myPhoto.jpg'),
      contactORGroupId:3,
      chatsId:3,
      lastChat:{
        text:"ok sir i am ready to join...",
        date:"01/08/2023",
        time:"11:00 am"
      },
      group:null,
    },

    //-------4-----------------
    {
      isGroup:true,
      contactOrGroupName:'Full stack web',
      mobileNumber:null, 
      profilePict:require('./assets/myPhoto.jpg'),
      contactORGroupId:4,
      chatsId:4,
      lastChat:{
        text:"hello! how are yo students...?",
        date:"02/08/2023",
        time:"09:00 am"
      },
      group:{
        groupAdmins:[{name:"prem",mobile:'9301511759'}],
        lastActiveUser:[{name:"Anil",profilePic:require('./assets/ankit.jpg')}]
      }
    }
  ],

  //==============chatLists=========================
  allUsersChatsList:[
    //---------1-------------------
    {
      chatsId:1,
      contactOrGroupId:1,
      chatsList:[
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:"",
          date:'31/07/2023',
          time:'03:00 PM',
          content:"How are you?",
          contentType:"text",
          id:""
        },
        {
          isMyMessage:true,
          senderName:"me",
          mobileNumber:'9301511759',
          senderPict:"",
          date:'31/07/2023',
          time:'03:01 PM',
          content:"i am fine?",
          contentType:"text",
          chatId:2
        }
     ]
    },

    //-------------2------------------------------
    {
      chatsId:2,
      contactOrGroupId:2,
      chatsList:[
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:"",
          date:'31/07/2023',
          time:'03:00 PM',
          content:"How are you?",
          contentType:"text",
          id:""
        },
        {
          isMyMessage:true,
          senderName:"me",
          mobileNumber:'9301511759',
          senderPict:"",
          date:'31/07/2023',
          time:'03:01 PM',
          content:"i am fine?",
          contentType:"text",
          chatId:2
        }
     ]
    },

    //---------3-------------------
    {
      chatsId:3,
      contactOrGroupId:3,
      chatsList:[
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:"",
          date:'31/07/2023',
          time:'03:00 PM',
          content:"How are you?",
          contentType:"text",
          id:""
        },
        {
          isMyMessage:true,
          senderName:"me",
          mobileNumber:'9301511759',
          senderPict:"",
          date:'31/07/2023',
          time:'03:01 PM',
          content:"i am fine?",
          contentType:"text",
          chatId:2
        }
     ]
    },

    //---------4-------------------
    {
      chatsId:4,
      contactOrGroupId:4,
      chatsList:[
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:"",
          date:'31/07/2023',
          time:'03:00 PM',
          content:"How are you?",
          contentType:"text",
          id:""
        },
        {
          isMyMessage:true,
          senderName:"me",
          mobileNumber:'9301511759',
          senderPict:"",
          date:'31/07/2023',
          time:'03:01 PM',
          content:"i am fine?",
          contentType:"text",
          chatId:2
        }
     ]
    }
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