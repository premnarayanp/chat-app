import{Component} from "react"
import '../styles/chatBox.css';
import {ReceivingChat,SendingChat} from './index';

export default class ChatBox extends Component {

  render(){
    const {currentChatsList,currentContactOrGroup} =this.props;
    console.log("currentChatsList=",currentChatsList);
    return(
       
        <div className="ChatBox">
         {
          currentContactOrGroup.isGroup?
          <header className="chatBoxHeader">
           <div className="membersImg">
             <span className='roundedImageContainer'>
               <img src={currentContactOrGroup.profilePict} alt="user-pic" />
             </span>

             <span className='roundedImageContainer'>
               <img src={currentContactOrGroup.groupAdmins[0].profilePic} alt="user-pic" />
             </span>

             <span className='roundedImageContainer'>
               <img src={currentContactOrGroup.lastActiveUser[0].profilePic} alt="user-pic" />
             </span>
           </div>

            <span className="contactNames">{currentContactOrGroup.contactOrGroupName+" ~ "+currentContactOrGroup.groupAdmins[0].name+","+currentContactOrGroup.lastActiveUser[0].name}...</span>
            <button className="addGroupMemberBtn">+</button>
          </header>
          : 
          <header className="chatBoxHeader">
            <div className='roundedImageContainer'>
              <img src={currentContactOrGroup.profilePict} alt="user-pic" />
            </div>
            <span className="contactNames">{currentContactOrGroup.contactOrGroupName+" ~ "+currentContactOrGroup.mobileNumber}</span>
            <button className="description">Description...</button>
          </header>
         }
          

          <main className="chatBoxMain">
          {currentChatsList.map((chat,index) => (
             
             chat.isMyMessage?<SendingChat chat={chat} key={`chat-${index}`}/>
                            :<ReceivingChat chat={chat} key={`chat-${index}`}/>
            
          ))}
          </main>
        </div>
    )
  }
}

  
// {
//   currentChatsList[0]==='' &&
//  }