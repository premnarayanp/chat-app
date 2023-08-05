import{Component} from "react"
import '../styles/chatBoard.css';
import {addCurrentChatToList,updateChatsListOfList} from '../actions/index'
export default class ChatBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputChat:'',
    };
  }

 //get current time in hour,minutes, and AM or PM and date
 getCurrentTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let am_pm = (hour >= 12 && hour < 24) ? 'PM' : 'AM';

  hour = (hour > 12) ? hour - 12 : hour;
  if (hour === 0) {
      hour = 12;
  }

   hour= hour<10? "0"+hour :hour;
   minute= minute<10? "0"+minute :minute;

   const time=hour+":"+minute+" "+am_pm
   const currentDate=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();

  return {
    time:time,
    date:currentDate
  };
}

  SendChat=()=>{
  //  console.log("input chat is",this.state.inputChat);

     const {date,time}=this.getCurrentTime();
     const {name,mobile,profilePic}=this.props.user;

     const initialChats={
          isMyMessage:true,
          senderName:"",
          mobileNumber:'',
          senderPict:"",
          date:'',
          time:'',
          content:"",
          contentType:"text",
          chatId:new Date().getTime(),

        } 
        
        initialChats.content=this.state.inputChat;
        initialChats.date=date;
        initialChats.time=time;
        initialChats.senderName=name;
        initialChats.mobileNumber=mobile;
        initialChats.senderPict=profilePic;
       
        //update currentChaList
        this.props.dispatch(addCurrentChatToList(initialChats));

        //if i want to save my  chat when open another chat and reopen this user chat .then need to
        //also update chatsListOList  with currentChaList
        //update  chatsList Of chatsListOfList   to currentChaList, 
        //identified by contactOrGroupId
        //we already update currentChaList on top ,line 63 ,so we need pass id for reducer
        //only because chatsListOList, currentChaList both available in reducer state
        //so don,t need to pass it ,or separate action function
        this.props.dispatch(updateChatsListOfList(this.props.contactOrGroupId));


        this.setState({inputChat:''});
        
 
  }

  render(){
    //const {currentGroupMemberList,dispatch}=this.props;
   
    return(
        <div className="ChatBoard">
          <button className="mediaBtn"></button>
          <textarea value={this.state.inputChat} onChange={(e)=>{this.setState({inputChat:e.target.value})}} type="text" className="chatInput"></textarea>
          <button className="sendChatBtn" onClick={()=>this.SendChat()}></button>
        </div>

    )
  }
}