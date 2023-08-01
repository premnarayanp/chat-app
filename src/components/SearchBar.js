import{Component} from "react"
import '../styles/searchBar.css';

export default class SearchBar extends Component {
  render(){
    return(
        <div className="SearchBar">
          <div className="search-container">
            <button id="search-btn" onClick={''}>Search</button>
            <input value={''} onChange={''} placeholder="search contact..."/>
          </div>
        </div>
    )
  }
}