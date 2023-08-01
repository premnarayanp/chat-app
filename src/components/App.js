import '../styles/App.css';
import { Navbar,ContactList,ChatBox} from './index'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ContactList/>
      <ChatBox/>
    </div>
  );
}

export default App;