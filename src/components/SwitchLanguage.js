import React from "react";

import {Dropdown} from 'react-bootstrap'
import '../styles/header.scss'


class  App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "en"
    }
  }

  onLanguageHandle = (event) => {
    let newLang = event.target.value;
    this.setState({value: newLang})
    this.props.i18n.changeLanguage(newLang)
  }
 
  renderRadioButtons = () => {
    return (
      <div>
        
          
          <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" className="clr-white">
                {this.state.value === 'en' ? "English":"Arabic"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    
                    <Dropdown.Item onClick={(e) => this.onLanguageHandle(e)} className="swithToArabic" style={{float:'right'}}><p>العربية</p></Dropdown.Item>
                    <Dropdown.Item onClick={(e) => this.onLanguageHandle(e)} ><p>English</p ></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

      </div>
    );
  }
}

// extended main view with translate hoc
export default App
