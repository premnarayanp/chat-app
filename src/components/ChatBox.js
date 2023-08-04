import{Component} from "react"
import '../styles/chatBox.css';
import {ReceivingChat,SendingChat} from './index';

export default class ChatBox extends Component {

  render(){
    const {currentChatsList} =this.props;
    return(
        <div className="ChatBox">
           {currentChatsList.map((chat,index) => (
             
              chat.isMyMessage?<SendingChat chat={chat} key={`chat-${index}`}/>
                             :<ReceivingChat chat={chat} key={`chat-${index}`}/>
             
           ))}

           {/* {
            currentChatsList[0]==='' && <h1 className="notChat">There is No chats</h1>
           } */}
      
        </div>
    )
  }
}

              