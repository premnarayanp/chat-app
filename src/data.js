export const data=[
    {
        contactName:'Anil',
        mobileNumber:'9893567476',
        profilePict:'',

        isGroup:false,
        groupName:null,
        groupMembers:[null],

         chat:[
          {
            isMyMessage:false,
            senderName:"Anil",
            mobileNumber:'9893567476',
            senderPict:"",
            date:'31/07/2023',
            time:'03:00 PM',
            content:"How are you?",
            contentType:"text",
            chatId:1
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


    {
        contactName:'Prem',
        mobileNumber:'9301511759',
        profilePict:'',

        isGroup:true,
        groupName:"moj moj",
        groupMembers:[
             {
                contactName:'Anil',
                mobileNumber:'9893567476',
                profilePict:'',
             },
             {
                contactName:'Prem',
                mobileNumber:'9301511759',
                profilePict:'',
             }
        ],

         chat:[
          {
            isMyMessage:false,
            senderName:"Anil",
            mobileNumber:'9893567476',
            senderPict:"",
            date:'31/07/2023',
            time:'03:00 PM',
            content:"How are you?",
            contentType:"text",
            chatId:1
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
          },
          {
            isMyMessage:false,
            senderName:"Ankit",
            mobileNumber:'9886739750',
            senderPict:"",
            date:'31/07/2023',
            time:'03:00 PM',
            content:"How are you?",
            contentType:"text",
            chatId:3
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
            chatId:4
          }
       ]

    }
]