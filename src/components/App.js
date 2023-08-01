import{Component} from "react"
import '../styles/App.css';
import { Navbar,ContactList,ChatBox} from './index';
import { data}  from '../data';
export default class App extends Component{
 render(){
  // console.log("data=",data.contactList);
  return (
    <div className="App">
      <Navbar/>
      <ContactList contactList={data.contactList}/>
      <ChatBox/>
    </div>
  );
 }
}