import React, {Component} from 'react';
import ListItems from './components/list/ListItems'
import axios from 'axios';

import './App.css';
import './components/list/ListItems'

export class App extends  Component {
    state={
      contacts:[]
    }

fetchData = async url => {
  const resp = await axios.get(url);
  const data = await resp.data;
  return await data
}

async componentDidMount(){
  const url = 'https://www.danfoss.com/umbraco/Api/ContactsApi/GetContacts?filter=countryCode%3AGB&pageid=42800';
  const response = await this.fetchData(url)
  this.setState({
    contacts:response
  })
}


render(){
  return (
    <div className="App">
      Contacts
      <ListItems />
    </div>
  );
}
}

export default App;
