export const data={
  contactsOrGroupsList:[
    //---------1-------------------
    { 
      isGroup:false,
      contactOrGroupId:1, //userId
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
      contactOrGroupId:2,
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
      contactOrGroupId:3,
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
      contactOrGroupId:4,
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
  chatsListOfList:[
    //---------1-------------------
    {
      contactOrGroupId:1,
      chatsLists:[
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:require('./assets/ankit.jpg'),
          date:'31/07/2023',
          time:'03:00 PM',
          content:"How are you?  h hhhhhhhhh hhhhhhhh jjjjjjjj hhhhhhhhhhh hhh  h hhhhhhhhh hhhhhhhh jjjjjjjj hhhhhhhhhhh hhh",
          contentType:"text",
          chatId:1
        },
        {
          isMyMessage:true,
          senderName:"me",
          mobileNumber:'9301511759',
          senderPict:require('./assets/ankit.jpg'),
          date:'31/07/2023',
          time:'03:01 PM',
          content:"i am fine? aaaaaaaaa   bbbbbbbbb ccccccccccc gggggggg hhhhhhh hhhhhhhhh hhhhhhhh jjjjjjjj hhhhhhhhhhh hhhhhhhhhhh ggggggg hhhhhh gggggg hhhhhhh gggggggggg",
          contentType:"text",
          chatId:2
        },
        {
          isMyMessage:true,
          senderName:"aa",
          mobileNumber:'9301511759',
          senderPict:require('./assets/ankit.jpg'),
          date:'31/07/2023',
          time:'03:01 PM',
          content:"i am bbb fine?",
          contentType:"text",
          chatId:2
        }
     ]
    },

    //-------------2------------------------------
    {
      contactOrGroupId:2,
      chatsLists:[
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:"",
          date:'31/07/2023',
          time:'03:00 PM',
          content:"How are you?",
          contentType:"text",
          chatId:4
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
          chatId:5
        }
     ]
    },

    //---------3-------------------
    {

      contactOrGroupId:3,
      chatsLists:[
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:"",
          date:'31/07/2023',
          time:'03:00 PM',
          content:"How are you?",
          contentType:"text",
          chatId:6
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
          chatId:7
        }
     ]
    },

    //---------4-------------------
    {
      contactOrGroupId:4,
      chatsLists:[
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:"",
          date:'31/07/2023',
          time:'03:00 PM',
          content:"How are you?",
          contentType:"text",
          chatId:8
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
          chatId:9
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