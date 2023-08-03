import{Component} from "react"
import '../styles/contact.css'
//left sidebar item
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover:false
    };
  }

  render(){
    const {contactOrGroup}=this.props;
    return(
        <div className="Contact" 
         onMouseEnter={()=>this.setState({isHover:true})}
         onMouseLeave={()=>this.setState({isHover:false})}
        >
            <div>
              <span className='rounded-img-container'>
                <img src={contactOrGroup.profilePict} alt="profile" />
              </span>
               
              {
                contactOrGroup.isGroup && this.state.isHover &&
                <span className='rounded-img-container right-pic'>
                 <img src={contactOrGroup.lastActiveUser[0].profilePic} alt="profile" />
                </span>
              }

              <span className="lastChatContainer">
                <span>{contactOrGroup.contactOrGroupName}</span>
                {
                  contactOrGroup.isGroup && this.state.isHover &&
                  <span>{","+contactOrGroup.lastActiveUser[0].name+"..."}</span>
                }
                <p>{contactOrGroup.lastChat.text}</p>
              </span> 
            </div>

            <div className="lastChatTiming">
              <span>{contactOrGroup.lastChat.time}</span>
              <span>{contactOrGroup.lastChat.date} </span>
            </div>
        </div>
    )
  }
}